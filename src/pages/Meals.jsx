import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    console.log(data.meals);
    setMeals(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="flex flex-wrap gap-5 py-10">
          {meals?.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default Meals;
