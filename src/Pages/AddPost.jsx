import React from "react";
import Input from "../Components/Share/Input";
import Button from "../Components/Share/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getToken } from "../utils/manageToken";

const AddPost = () => {
  const resolver = yup.object({
    title: yup.string().required("Enter a title"),
    content: yup.string().required("Enter a content"),
  });

  const { reset, register, handleSubmit, formState } = useForm({
    resolver: yupResolver(resolver),
  });

  const submitForm = handleSubmit(async (formData) => {
    try {
      const response = await axios.post(
        "https://instagram-backend-ugd3.onrender.com/api/article",
        {
          "title": formData.title,
          "content": formData.content
        },
        {
          headers : {
            Authorization : `Bearer ${getToken()}`
          }
        }
      );
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-5xl bg-white border shadow-md border-gray-300 flex flex-col items-center rounded-md py-10">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:w-1/2">
          <h1 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
            Add New Post
          </h1>
          <form onSubmit={submitForm} className="flex flex-col gap-6">
            <Input
              {...register("title")}
              label={"Title"}
              type={"text"}
              name={"title"}
              error={formState.errors?.title?.message}
            />
            <Input
              {...register("content")}
              label={"Content"}
              type={"text"}
              name={"content"}
              error={formState.errors?.content?.message}
            />
            <Button title={"Post"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
