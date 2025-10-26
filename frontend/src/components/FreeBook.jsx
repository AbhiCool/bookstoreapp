import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const FreeBook = () => {
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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="text-xl pb-2 font-semibold">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            laudantium neque repudiandae modi alias labore assumenda tenetur
            quibusdam aperiam ducimus, vitae ratione maxime, aspernatur
            asperiores quo ut tempore adipisci provident!
          </p>
        </div>

        <div className="mt-4">
          <Slider {...settings}>
            {books
              .filter((book) => book.category === "Free")
              .map((book) => (
                <Card key={book.id} book={book} />
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
