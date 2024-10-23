import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";

export default function Sidebar() {
  return (
    <div className="py-8 border rounded-2xl">
      <h2 className=" font-semibold text-2xl pb-4 border-b  w-[350px] m-auto text-center">
        Want to cook: 01
      </h2>
      <WantToCook></WantToCook>
      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
}
