import React, { useState } from "react";
import Banner from "../components/Banner";
import FreeBook from "../components/FreeBook";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  return (
    <>
      <Banner />
      <FreeBook />
    </>
  );
};

export default Home;
