import React from "react";
import list from "../list.json";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const Course = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen container mx-auto md:px-20 px-4">
      <div className="mt-28 flex flex-col items-center justify-center gap-8">
        <h1 className=" text-2xl md:text-4xl ">
          We're are delighted to have you{" "}
          <span className="text-pink-500">here :)</span>
        </h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          corrupti incidunt, error iste sequi cumque fuga magnam? Ex eaque harum
          laborum perferendis ad maxime voluptatum quidem nesciunt, quia
          voluptatibus sed?
        </p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {list.map((book) => (
          <Card key={book.id} book={book}></Card>
        ))}
      </div>
    </div>
  );
};

export default Course;
