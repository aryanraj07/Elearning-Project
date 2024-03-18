import React from "react";
import Option from "./Option";

const Login = () => {
  return (
    <div className="h-screen flex flex-co justify-evenly gap-5 md:flex-row items-center">
      <Option src="stuent.jpg" btntext="Student->" linker="/register" />
      <Option src="teacher.jpg" btntext="Teacher->" />
    </div>
  );
};

export default Login;
