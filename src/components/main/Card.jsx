import { FaFire } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";

export default function Card({ item }) {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;

  return (
    <div className="p-6 border rounded-2xl">
      <div className="mb-6 h-[200px]">
        <img
          className="rounded-2xl h-full"
          src={recipe_image}
          alt={`${recipe_name} image`}
        />
      </div>
      <h2 className="font-semibold text-xl mb-4">{recipe_name}</h2>
      <p className="pb-4 mb-6 text-[#878787] border-b">{short_description}</p>
      <h3 className="font-medium text-lg mb-4">
        Ingredients: {ingredients?.length}
      </h3>
      <ul className="list-disc list-inside text-gray-500 text-lg pb-4 border-b">
        {ingredients?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div className="flex items-center gap-4 my-6">
        <div className="flex items-center gap-2">
          <TiStopwatch />
          <p>{preparing_time} minutes</p>
        </div>
        <div className="flex items-center gap-2">
          <FaFire />
          <p>{calories} minutes</p>
        </div>
      </div>
      <button className="py-3 px-6 text-black bg-[#0BE58A] rounded-full font-semibold text-xl">
        Want to Cook
      </button>
    </div>
  );
}
