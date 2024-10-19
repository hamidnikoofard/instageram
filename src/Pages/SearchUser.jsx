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
    search: yup.string().required("Please enter a username"),
  });

  const { register, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(resolver),
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const submitForm = handleSubmit(async (formData) => {
    try {
      setLoading(true);
      setHasSearched(true);
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
    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-xl shadow-lg p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Search Users
          </h1>
          <p className="text-gray-600">
            Enter a username to find users on the platform.
          </p>
        </div>

        <form
          onSubmit={submitForm}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="w-full sm:w-2/3">
            <Input
              {...register("search")}
              label={"Search Username"}
              name={"search"}
              type={"text"}
              error={formState.errors?.search?.message}
            />
          </div>
          <Button
            title={"Search"}
            icon={<AiOutlineSearch />}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out w-full sm:w-auto"
          />
        </form>

        <div className="w-full">
          {loading && <Loading />}
          {!loading && hasSearched && (
            <div>
              {users.length > 0 ? (
                <>
                  <h2 className="text-lg font-semibold text-center mb-4">
                    Search Results
                  </h2>
                  <div className="flex flex-col justify-center gap-4">
                    {users.map((user) => (
                      <FollowerCard
                        username={user.username}
                        key={user._id}
                        id={user._id}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-center text-gray-600 font-medium">
                  No users found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
