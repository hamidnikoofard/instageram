import React, {useState } from "react";
import Logo from "../assets/logos_instagram.png";
import Signupimg from "../assets/img/signup/1.png";
import Input from "../Components/Share/Input";
import Button from "../Components/Share/Button";
import { FaFacebookSquare } from "react-icons/fa";
import googlePlay from "../assets/img/signup/googleplay.png";
import microsoft from "../assets/img/signup/microsoft.png";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { regex } from "../utils/regex";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { setId, setUser } from "../utils/manageUser&Id";
import { setToken } from "../utils/manageToken";
import Loading from "../Components/Share/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const resolver = yup.object({
    username: yup.string().required("Please enter your username"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(regex.password, "Password must be at least 8 characters long"),
  });

  const { register, reset, formState, handleSubmit } = useForm({
    resolver: yupResolver(resolver),
  });

  const submitForm = handleSubmit(async (formFild) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://instagram-backend-ugd3.onrender.com/api/user/login",
        {
          username: formFild.username,
          password: formFild.password,
        }
      );
      setToken(response.data.accessToken);
      setUser(response.data.data.username);
      setId(response.data.data._id)
      reset();
      setIsUserLogin(true);

    } catch (error) {
      const errorMassage = error.response.data.message
      toast.error(errorMassage , {
        position : "top-center"
      })
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
      navigate("/home");
    }
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-[935px] mx-auto">
        <div className="hidden md:flex w-[444px] h-[650px] justify-end items-center">
          <img src={Signupimg} alt="" className="max-w-full max-h-full" />
        </div>

        <div className="flex flex-col items-center w-full md:w-[350px]">
          <div className="w-full p-6 md:p-10 bg-white border border-gray-300 flex flex-col items-center mb-3 rounded-sm">
            <div className="w-full">
              <img
                src={Logo}
                alt="Instagram"
                className="mx-auto mb-8 max-w-[175px]"
              />
              <form
                onSubmit={submitForm}
                className="w-full flex flex-col gap-2"
              >
                <Input
                  {...register("username")}
                  label="username"
                  type="text"
                  error={formState.errors?.username?.message}
                />
                <Input
                  {...register("password")}
                  label="Password"
                  type="password"
                  showpass="Show"
                  error={formState.errors?.password?.message}
                />
                <div className="w-full mt-2">
                  <Button title="Log in" type="submit" variant="primary" />
                </div>
              </form>

              <div className="w-full my-4 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm font-semibold">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                <FaFacebookSquare size={20} color="#385185" />
                <p className="text-[#385185] font-semibold text-sm cursor-pointer">
                  Log in with Facebook
                </p>
              </div>

              <div className="mt-5 text-center">
                <p className="text-xs text-[#385185] cursor-pointer">
                  Forgotten your password?
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-6  bg-white border border-gray-300 flex flex-col items-center mb-3 rounded-sm">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                className="text-[#0095f6] font-semibold cursor-pointer"
                to={"/auth/sign-up"}
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm mb-4">Get the app.</p>
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
      </div>
    </div>
  );
};

export default Login;
