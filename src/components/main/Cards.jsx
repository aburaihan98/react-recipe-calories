import { useEffect, useState } from "react";
import Card from "./Card";

export default function Cards() {
  const [cards, setCards] = useState();

  useEffect(() => {
    fetch("./recipes.json")
      .then((response) => response.json())
      .then((data) => setCards(data?.recipes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6">
      {cards?.map((item) => (
        <Card key={item?.recipe_id} item={item}></Card>
      ))}
    </div>
  );
}
