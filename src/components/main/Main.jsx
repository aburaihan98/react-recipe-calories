import Cards from "./Cards";
import Sidebar from "./sidebar";

export default function Main() {
  return (
    <div className="my-24">
      <h2 className="font-semibold text-4xl mb-6 text-center">Our Recipes</h2>
      <p className="text-[#150B2B99] mb-12 text-center">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget{" "}
        <br className=" hidden lg:block" /> urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <section className="grid grid-cols-10 gap-6">
        <div className="col-span-6">
          <Cards></Cards>
        </div>
        <div className="col-span-4">
          <Sidebar></Sidebar>
        </div>
      </section>
    </div>
  );
}
