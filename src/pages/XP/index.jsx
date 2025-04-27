import Navbar from "../../components/Navbar";
import ClickCard from "../../components/Cards";
import Head from "../../components/Head";
import { dataExperience } from "../../dataExperience";

export default function ExperiencePage() {
  return (
    <>
      <Head
        title="Experience | Fadli Izurohman"
        desc="Beberapa Experience selama berkarir pada bidang web development"
        keywords="web Experience, react js, laravel, php, sql, gcp, javascript, nodejs, tailwind, material ui"
      />
      <div className="task min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold my-5">
          Experience
        </h1>

        {/* Grid layout for cards with smaller gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5">
          {dataExperience.map((item) => {
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
