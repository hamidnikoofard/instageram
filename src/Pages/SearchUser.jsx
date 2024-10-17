import React, { useEffect, useState } from "react";
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
    const resolver =yup.object(
        {
            search : yup.string().required("Enter username")
        }
    )

  const { register, reset, handleSubmit, formState } = useForm(
    {
        resolver : yupResolver(resolver)
    }
  );
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
      console.log(users);
      reset()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-5xl p-6 md:p-10 bg-white border shadow-md border-gray-300 flex flex-col items-center mb-3 rounded-md mt-4">
        <div className="w-1/2">
          <form onSubmit={submitForm} className="flex gap-4 items-center">
            <Input
              {...register("search")}
              label={"search"}
              name={"search"}
              type={"text"}
              error={formState.errors?.search?.message}
            />
            <Button
              title={"Serach"}
              icon={<AiOutlineSearch />}
              className="px-4 h-9"
            />
          </form>
        </div>
        <div className="mt-4 w-1/2">
          {loading && <Loading />}
          {users.length > 0 && (
            <div>
              <h2 className="font-semibold mb-2 text-center">Search results</h2>
              <div className="w-full">
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
