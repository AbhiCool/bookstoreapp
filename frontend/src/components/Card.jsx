import React from "react";

const Card = ({ book }) => {
  return (
    <>
      <div className="m-2 p-3 hover:scale-105 duration-300 transition-all w-full">
        <div
          style={{ width: "100%" }}
          className="card bg-base-100 shadow-sm border border-base-content"
        >
          <figure>
            <img src={book.image} alt="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {book.name}
              <div className="badge badge-secondary">{book.category}</div>
            </h2>
            <p>{book.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline rounded-xl">
                ${book.price}
              </div>
              <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white cursor-pointer p-3 rounded-full">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
