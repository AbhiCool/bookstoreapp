import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Course = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/book");

        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, []);

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

      {!books.length ? (
        <h1 className="text-center text-2xl mt-10">No books found</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {books.map((book) => (
            <Card key={book.id} book={book}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Course;
