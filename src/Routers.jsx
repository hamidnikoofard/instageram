import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Login />
    },
    {
        path : "/auth/sign-up",
        element : <SignUp />
    },
    {
        path : "/home",
        element : <Home />
    }
])