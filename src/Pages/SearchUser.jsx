import React, { useState } from "react";
import Input from "../Components/Share/Input";
import { useForm } from "react-hook-form";
import Button from "../Components/Share/Button";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import Loading from "../Components/Share/Loading";
import FollowerCard from "../Components/Profile/FollowerCard";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SearchUser = () => {
  const resolver = yup.object({
    search: yup.string().required("Enter username")
  });

  const { register, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(resolver)
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitForm = handleSubmit(async (formData) => {
    try {
      setLoading(true);
      const response = (
        await axios.get(
          `https://instagram-backend-ugd3.onrender.com/api/user/searchUser?search=${formData.search}&limit=5`
        )
      ).data;
      setUsers(response.users);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-4">
      <div className="w-full max-w-5xl bg-white border shadow-md border-gray-300 flex flex-col items-center rounded-md">
        <div className="w-full px-4 sm:px-6 md:px-10 py-6">
          <form onSubmit={submitForm} className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-2/3 md:w-3/4">
              <Input
                {...register("search")}
                label={"Search"}
                name={"search"}
                type={"text"}
                error={formState.errors?.search?.message}
              />
            </div>
            <Button
              title={"Search"}
              icon={<AiOutlineSearch />}
              className="px-4 h-9 w-full sm:w-auto"
            />
          </form>
        </div>
        <div className="w-full px-4 sm:px-6 md:px-10 py-4">
          {loading && <Loading />}
          {users.length > 0 && (
            <div>
              <h2 className="font-semibold mb-4 text-center">Search results</h2>
              <div className="w-full space-y-2">
                {users.map((user) => (
                  <FollowerCard username={user.username} key={user._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchUser;