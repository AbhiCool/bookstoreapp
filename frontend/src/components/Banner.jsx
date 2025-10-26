import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold">
            Hello, welcomes here to learn something
            <span className="text-pink-500"> new everyday</span>!!!
          </h2>
          <p className="text-xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A qui
            temporibus aliquid molestiae exercitationem. Error, officiis,
            repellendus quidem quo corrupti esse quam ea vel ipsam eligendi
            accusamus obcaecati ex fugit.
          </p>
          <label className=" flex items-center gap-2 border p-2 rounded-md">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              className="grow outline-none"
              placeholder="Enter your email to login"
            />
          </label>
        </div>
        <button className="btn btn-secondary mt-6">Get Started</button>
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/2 flex items-center ">
        <img src="/banner.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
