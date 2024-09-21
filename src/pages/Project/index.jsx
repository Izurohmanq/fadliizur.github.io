import Navbar from "../../components/Navbar";
import ClickCard from "../../components/Cards";
import { dataProject } from "../../data";
import Head from "../../components/Head";

export default function Project() {
  return (
    <>
      <Head
        title="Portfolio"
        desc="Beberapa portfolio selama berkarir pada bidang web development"
        keywords="web portfolio, react js, laravel, php, sql, gcp, javascript, nodejs, tailwind, material ui"
      />
      <div className="task min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-white text-3xl font-bold my-5">
          Project
        </h1>

        {/* Grid layout for cards with smaller gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5">
          {dataProject.map((item) => {
            return (
              <div key={item.id}>
                <ClickCard {...item} />
              </div>
            );
          })}
        </div>
      </div>

      <Navbar></Navbar>
    </>
  );
}
