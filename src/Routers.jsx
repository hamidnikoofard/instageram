import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ProtectedRouter from "./Components/auth/ProtectedRouter";
import PublicRoute from "./Components/auth/PublicRoute";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import Followers from "./Pages/Followers";
import Following from "./Pages/Following";
import SearchUser from "./Pages/SearchUser";
import NavBar from "./Layout/NavBar";
import UserPage from "./Pages/UserPage";

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
        <NavBar />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editprofile",
        element: <EditProfile />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "followings",
        element: <Following />,
      },
      {
        path: "search",
        element: <SearchUser />,
      },
      {
        path : "search/:userid",
        element : <UserPage />
      },
    ],
  },
]);

