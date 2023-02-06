import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  RouteObject,
} from "react-router-dom";

import Option1 from "../Views/Option1";
import Home from "../Views/Home";

// Layouts
import { NavbarContentFooter } from "../Layouts/NavbarContentFooter";

import { NotFound } from "../Views/NotFound";
import { DebugLayout } from "../Layouts/DebugLayout";

const RouteIndex: RouteObject = {
  path: "/",
  element: <NavbarContentFooter />,
  errorElement: <NotFound />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "d",
      element: <Option1 />,
    },
  ],
};

const RouteLogin: RouteObject = {
  path: "/login",
  element: <h1>Login Page</h1>,
};

const RouteDebut: RouteObject = {
  path: "/o",
  element: <Option1 />,
  children: [
    {
      path: "yes/:id",
      element: (
        <>
          <h1>Yes!</h1> <Outlet></Outlet>
        </>
      ),
      children: [
        {
          path: "test",
          element: <h1>Working test</h1>,
        },
      ],
    },
    {
      path: "No",
      element: <h1>No!</h1>,
    },
  ],
};

export default createBrowserRouter([
  RouteIndex,
  RouteLogin,
  RouteDebut,
  {
    path: "contacts/:contactId",
    // element: <Contact />,
  },
  {
    path: "debug",
    element: <DebugLayout />,
  },
  // {
  //   path: "*",
  //   element: <h1>Page Not Found</h1>,
  // },
]);

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />}>
//       <Route index element={<h1>Yes!</h1>} />
//       <Route path="about" element={<h1>About!</h1>} />
//     </Route>
//     <Route path="*" element={<h1>Something Went Wrong! 1</h1>} />
//   </Routes>
// </BrowserRouter>
