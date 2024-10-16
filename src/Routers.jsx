import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ProtectedRouter from "./Components/auth/ProtectedRouter";
import PublicRoute from "./Components/auth/PublicRoute";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import Followers from "./Pages/Followers";
import Following from "./Pages/Following";
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
    path: "/profile",
    element: (
      <ProtectedRouter>
        <Profile />
      </ProtectedRouter>
    ),
  },
  {
    path: "/editprofile",
    element: (
      <ProtectedRouter>
        <EditProfile />
      </ProtectedRouter>
    ),
  },
  {
    path: "/followers",
    element: (
      <ProtectedRouter>
        <Followers />
      </ProtectedRouter>
    ),
  },
  {
    path: "/followings",
    element: (
      <ProtectedRouter>
        <Following />
      </ProtectedRouter>
    ),
  },
]);
