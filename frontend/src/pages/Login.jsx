import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log("Form data:", data);
  };

  console.log("errors", errors);
  return (
    <>
      <h1 className="text-xl font-medium my-2">Login</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <span
          className="absolute right-5 top-5 cursor-pointer text-gray-400 text-xl"
          onClick={() => setShowLogin(false)}
        >
          x
        </span>

        <div>
          <label className="label block" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="label block" htmlFor="">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex justify-around items-center">
          <button className="btn btn-secondary">Login</button>
          <p>
            Not registered yet?{" "}
            <Link
              to="/signup"
              onClick={() => setShowLogin(false)}
              className="underline text-blue-500"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
