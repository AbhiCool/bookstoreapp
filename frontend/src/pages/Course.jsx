import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { serverURL } from "../utils/constants";
import SkeletonCard from "../components/SkeletonCard";
import axiosInstance from "../utils/axiosInstance";

const Course = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/api/book");

        setBooks(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen container mx-auto md:px-20 px-4">
        <div className="mt-28 flex flex-col items-center justify-center gap-2">
          <div className="skeleton skeleton-text short"></div>
          <div className="skeleton skeleton-text w-full"></div>
          <div className="skeleton skeleton-text w-full"></div>
          <div className="skeleton skeleton-text w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-2">
          {books.map((book) => (
            <Card key={book.id} book={book}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Course;
