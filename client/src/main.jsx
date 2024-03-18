import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";

import Contact from "./components/Contact.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Login from "./components/Login/Login.jsx";
import Option from "./components/Login/Option.jsx";
import WebDev from "./components/Courses/WebDev.jsx";
import JobPortal from "./components/JobPortal/JobPortal.jsx";
import Register from "./components/Register/Register.jsx";
import LoginStudent from "./components/Login/LoginStudent.jsx";

//
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="courses" element={<Courses />} />
      <Route path="webdev" element={<WebDev />} />

      <Route path="login" element={<Login />} />
      <Route path="option" element={<Option />} />
      <Route path="jobportal" element={<JobPortal />} />
      <Route path="register" element={<Register />} />
      <Route path="loginstudent" element={<LoginStudent />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
