import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AppContext } from "../context/AppProvider";
import { serverURL } from "../utils/constants";
const Login = ({ setShowLogin }) => {
  const { setUser } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    console.log("Form data:", data);

    setLoading(true);
    try {
      const res = await axios.post(serverURL + "/api/auth/login", data);

      console.log(res.data);
      toast.success(res.data.message);
      localStorage.setItem("Users", JSON.stringify(res.data.user));

      setUser(res.data.user);

      setShowLogin(false);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
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
          <button className="btn btn-secondary" disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </button>
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
