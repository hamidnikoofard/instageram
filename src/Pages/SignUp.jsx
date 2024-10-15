import React, { useState } from "react";
import Logo from "../assets/logos_instagram.png";
import Button from "../Components/Share/Button";
import { FaFacebookSquare } from "react-icons/fa";
import Input from "../Components/Share/Input";
import { Link, useNavigate } from "react-router-dom";
import googlePlay from "../assets/img/signup/googleplay.png";
import microsoft from "../assets/img/signup/microsoft.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { regex } from "../utils/regex";
import axios from "axios";
import Loading from "../Components/Share/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const resolver = yup.object({
    email: yup
      .string()
      .required("Please enter your mobile number or email address")
      .matches(regex.email, "Please enter a valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(regex.password, "Password must be at least 8 characters long"),
    fullname: yup.string().required("Please enter your full name"),
    username: yup.string().required("Please enter your username"),
  });

  const { register, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(resolver),
  });

  const submitForm = handleSubmit(async (formfild) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://instagram-backend-ugd3.onrender.com/api/user/signup",
        {
          username: formfild.username,
          password: formfild.password,
          email: formfild.email,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false)
    } finally {
      setLoading(false);
      navigate("/");
    }
    reset();
  });

  if(loading){
    <Loading />
  }

  return (
    <div className="flex justify-center items-center min-h-screen flex-col px-4">
      <div className="w-full max-w-[350px] p-6 md:p-10 bg-white border border-gray-300 flex flex-col items-center mb-3 rounded-sm mt-4">
        <img src={Logo} alt="" className="mb-5" />
        <p className="text-center font-semibold text-gray-500">
          Sign up to see photos and videos from your friends
        </p>
        <div className="w-full mt-5">
          <Button icon={<FaFacebookSquare />} title={"Log in with Facebook"} />
        </div>
        <div className="w-full my-4 flex items-center mt-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={submitForm} className="w-full flex flex-col gap-2 mt-1">
          <Input
            {...register("email")}
            label="Mobile Number or Email"
            type="text"
            error={formState.errors?.email?.message}
          />
          <Input
            {...register("password")}
            label="Password"
            type="password"
            showPasswordToggle={false}
            error={formState.errors?.password?.message}
          />
          <Input
            {...register("fullname")}
            label="Full Name"
            type="text"
            error={formState.errors?.fullname?.message}
          />
          <Input
            {...register("username")}
            label="User Name"
            type="text"
            error={formState.errors?.username?.message}
          />
          <p className="text-center text-xs mt-2 text-gray-500">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-blue-900 cursor-pointer">Learn More</span>
          </p>
          <p className="text-center text-xs mt-2 text-gray-500">
            By signing up, you agree to our Terms. Learn how we collect, use and
            share your data in our Privacy Policy and how we use cookies and
            similar technology in our Cookies Policy.
          </p>
          <div className="mt-3">
            <Button title={"Sign Up"} type={"submit"} />
          </div>
        </form>
      </div>

      <div className="w-full max-w-[350px] p-6 bg-white border border-gray-300 flex flex-col items-center mb-3 rounded-sm">
        <div className="flex items-center justify-center gap-1">
          <span>Have an account?</span>
          <Link className="text-[#0095f6] font-semibold" to={"/"}>
            Log in
          </Link>
        </div>
      </div>

      <div className="mt-3 text-center">
        <p className="mb-4">Get the app.</p>
        <div className="flex justify-center items-center gap-2">
          <img
            src={googlePlay}
            alt="Google Play"
            className="h-10 w-auto cursor-pointer"
          />
          <img
            src={microsoft}
            alt="Microsoft Store"
            className="h-10 w-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
