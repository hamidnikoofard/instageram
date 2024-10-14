import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import ProtectedRouter from "./Components/auth/ProtectedRouter";
import PublicRoute from "./Components/auth/PublicRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/auth/sign-up",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRouter>
        <Home />
      </ProtectedRouter>
    ),
  },
]);
