import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppProvider";
import { serverURL } from "../utils/constants";
import axiosInstance from "../utils/axiosInstance";

const SignUp = ({ showLogin, setShowLogin }) => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    console.log("Form data:", data);
    setLoading(true);

    try {
      const res = await axiosInstance.post("/api/auth/signup", data);

      console.log(res.data);
      setUser(res.data.user);
      toast.success(res.data.message);

      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100  min-w-sm w-1/2 shrink-0 shadow-2xl relative">
          <span
            className="absolute right-5 top-5 cursor-pointer text-gray-400 text-xl"
            onClick={() => navigate("/")}
          >
            x
          </span>

          <div className="card-body">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <fieldset className="fieldset">
                <h3 className="font-semibold text-lg">Signup</h3>
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.name.message}
                  </p>
                )}

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.email.message}
                  </p>
                )}

                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.password.message}
                  </p>
                )}

                <div className="w-full flex justify-around items-center mt-4">
                  <button className="btn btn-secondary" disabled={loading}>
                    {loading ? "Please wait..." : "Signup"}
                  </button>
                  <span className="text-md">
                    Already registered?{" "}
                    <Link
                      to="/"
                      onClick={() => setShowLogin(true)}
                      className="underline text-blue-500"
                    >
                      SignIn
                    </Link>
                  </span>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
