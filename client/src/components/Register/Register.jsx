import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Login from "../Login/Login";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/loginstudent");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-bg-start to-light-bg-end dark:from-dark-bg-start dark:to-dark-bg-end">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Register Page</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="inputName" className="text-sm">
              Name
            </label>
            <input
              className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="inputName"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inputEmail" className="text-sm">
              Email
            </label>
            <input
              className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="inputEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inputPassword" className="text-sm">
              Password
            </label>
            <input
              className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="inputPassword"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inputPhone" className="text-sm">
              Phone
            </label>
            <input
              className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              id="inputPhone"
              placeholder="Enter your phone"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inputAddress" className="text-sm">
              Address
            </label>
            <input
              className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              id="inputAddress"
              placeholder="Enter your address"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-sm mt-4">
          <Link to="/loginstudent" className="text-blue-500">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
