import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <div className="w-64 border-2 flex justify-center items-center flex-col p-5 rounded-xl gap-5 relative h-[400px] shadow-lg hover:scale-105 transition duration-200 hover:shadow-xl">
      <img
        src={meal.strMealThumb}
        width="200px"
        className="rounded-xl"
        alt=""
      />
      <h3>{meal.strMeal}</h3>
      <button className="text-white bg-blue-500 px-10 py-2 rounded-xl absolute bottom-3">
        <Link to={`/detail/${meal.idMeal}`}>
          <IoEyeSharp className="text-2xl" />
        </Link>
      </button>
    </div>
  );
};

export default Card;
