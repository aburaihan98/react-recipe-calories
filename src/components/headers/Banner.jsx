import bannerImage from "../../assets/image/banner.png";

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="text-white rounded-3xl h-[600px] bg-cover bg-center flex flex-col justify-center items-center"
    >
      <h1 className="font-bold text-5xl text-center mb-6">
        Discover an exceptional cooking <br className=" hidden lg:block" />{" "}
        class tailored for you!
      </h1>
      <p className="text-lg mb-10 text-center">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding <br className=" hidden lg:block" />{" "}
        problems to become an exceptionally well world-class Programmer.
      </p>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row lg:space-x-7 px-4">
        <button className="w-full lg:w-auto py-5 px-10 text-black bg-[#0BE58A] rounded-full font-semibold text-xl">
          Explore Now
        </button>
        <button className="w-full lg:w-auto py-5 px-10 bg-transparent border rounded-full font-semibold text-xl mt-4 lg:mt-0">
          Our Feedback
        </button>
      </div>
    </div>
  );
}
