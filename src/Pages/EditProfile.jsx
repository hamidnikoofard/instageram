import React from "react";
import Input from "../Components/Share/Input";
import CustomLink from "../Components/Share/CustomLink";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { regex } from "../utils/regex";
import { getId, getUser } from "../utils/manageUser&Id";
import axios from "axios";
import { getToken } from "../utils/manageToken";

const EditProfile = () => {
  const resolver = yup.object({
    username: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .required("Enter new email")
      .matches(regex.email, "Enter a valid email"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(regex.password, "Password must be at least 8 characters long"),
  });

  const { register, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(resolver),
  });

  const submitForm = handleSubmit(async (formData) => {
    const userId = getId();
    try {
      const response = await axios.put(
        `https://instagram-backend-ugd3.onrender.com/api/user/${userId}`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-xl shadow-lg p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Edit Your Profile
          </h1>
        </div>

        <form onSubmit={submitForm} className="flex flex-col gap-6">
          <Input
            {...register("username")}
            label={"New Username"}
            type={"text"}
            error={formState.errors?.username?.message}
            value={getUser()}
          />
          <Input
            {...register("email")}
            label={"New Email"}
            type={"text"}
            error={formState.errors?.email?.message}
          />
          <Input
            {...register("password")}
            label={"New Password"}
            type={"password"}
            error={formState.errors?.password?.message}
          />

          <CustomLink
            title={"Update Profile"}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
