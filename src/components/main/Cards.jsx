import { useEffect, useState } from "react";
import Card from "./Card";

export default function Cards({ handleAddToWantToCook }) {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetch("./recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data?.recipes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="lg:grid grid-cols-2 gap-6 space-y-6 lg:space-y-0">
      {recipes?.map((recipe) => (
        <Card
          key={recipe?.recipe_id}
          recipe={recipe}
          handleAddToWantToCook={handleAddToWantToCook}
        ></Card>
      ))}
    </div>
  );
}
