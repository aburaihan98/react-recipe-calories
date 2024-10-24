import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="py-12 flex justify-between items-center">
      <p className="font-bold text-3xl">Recipe Calories</p>
      <div className=" hidden lg:block">
        <ul className=" text-[#150B2BB3] flex items-center gap-12">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className=" hidden lg:block">
          <div className="py-3 px-6 bg-[#150B2B0D] rounded-full flex items-center gap-3">
            <FaSearch />
            <input
              className="bg-transparent"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="w-12 h-12 bg-[#0BE58A] rounded-full flex justify-center items-center">
          <img
            src="https://img.icons8.com/?size=24&id=82751&format=png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}
