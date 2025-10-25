import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    console.log("Form data:", data);
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
                <h3 className="font-semibold text-lg">Contact Us</h3>
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Enter your name"
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
                  placeholder="Email address"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.email.message}
                  </p>
                )}

                <label className="label">Message</label>
                <textarea
                  rows="6"
                  name="message"
                  className="input resize-none"
                  placeholder="Type your message"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.message.message}
                  </p>
                )}

                <div className="w-full flex justify-around items-center mt-4">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
