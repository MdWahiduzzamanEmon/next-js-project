import Image from "next/image";
import { useEffect, useState } from "react";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setFoods(data.categories));
  }, []);

  return (
    <>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {foods?.slice(0, 6).map((food) => (
          <div
            key={food.idCategory}
            className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 hover:translate-y-2 transform delay-100"
          >
            <div className="flex justify-center -mt-16">
              <Image
                className=" object-cover rounded-full border-2 border-indigo-500"
                src={food?.strCategoryThumb}
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                {food?.strCategory}
              </h2>
              <p className="mt-2 text-gray-600">
                {food?.strCategoryDescription.slice(0, 100)}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-xl font-medium text-indigo-500">
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Foods;


 