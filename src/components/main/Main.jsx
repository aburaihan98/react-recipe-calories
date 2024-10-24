import { useState } from "react";
import Cards from "./Cards";
import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";

export default function Main() {
  const [wantCooks, setWantCooks] = useState([]);
  const [currently, setCurrently] = useState([]);

  const handleAddToWantToCook = (recipe) => {
    const isExist = wantCooks.find(
      (previousRecipe) => previousRecipe?.recipe_id === recipe?.recipe_id
    );
    if (isExist) {
      return alert("This recipe is already added 🙏");
    } else {
      setWantCooks([...wantCooks, recipe]);
    }
  };

  const handleAddToCurrentlyCooking = (recipe) => {
    setCurrently([...currently, recipe]);

    const remainingRecipes = wantCooks.filter((item) => {
      return item?.recipe_id !== recipe?.recipe_id;
    });
    setWantCooks(remainingRecipes);
  };

  return (
    <div className="my-24">
      <h2 className="font-semibold text-4xl mb-6 text-center">Our Recipes</h2>
      <p className="text-[#150B2B99] mb-12 text-center">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget{" "}
        <br className=" hidden lg:block" /> urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <section className="lg:grid grid-cols-10 gap-6">
        <div className="col-span-6">
          <Cards handleAddToWantToCook={handleAddToWantToCook}></Cards>
        </div>
        {/* sidebar  */}
        <div className="col-span-4">
          <div className="py-8 border rounded-2xl">
            <h2 className=" font-semibold text-2xl pb-4 border-b  w-[350px] m-auto text-center">
              Want to cook: {wantCooks?.length}
            </h2>
            <WantToCook
              wantCooks={wantCooks}
              handleAddToCurrentlyCooking={handleAddToCurrentlyCooking}
            ></WantToCook>
            <CurrentlyCooking currently={currently}></CurrentlyCooking>
          </div>
        </div>
      </section>
    </div>
  );
}
