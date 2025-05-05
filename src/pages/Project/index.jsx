import Navbar from "../../components/Navbar";
import ClickCard from "../../components/Cards";
import { dataProject } from "../../dataProject";
import Head from "../../components/Head";
import Details from "../../components/Details";
import { useState } from "react";

export default function Project() {
  const [showDetail, setShowDetail] = useState(null)

  const handleProjectClick = (projectID) => {
    const selected = dataProject.find((project) => project.id === projectID)
    setShowDetail(selected)
  }

  const handleCloseClick = () => {
    setShowDetail(null)
  }

  return (
    <>
      <Head
        title="Projects | Fadli Izurohman"
        desc="Beberapa projects selama berkarir pada bidang web development"
        keywords="web portfolio, react js, laravel, php, sql, gcp, javascript, nodejs, tailwind, material ui"
      />
      <div className="task min-h-screen flex flex-col justify-center items-center mt-5">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold my-5">
          Projects
        </h1>

        {/* Grid layout for cards with smaller gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5">
          {dataProject.map((item) => {
            return (
              <div key={item.id} onClick={() => handleProjectClick(item.id)}>
                <ClickCard {...item} />
              </div>
            );
          })}
        </div>
        {showDetail && <Details item={showDetail} handle={handleCloseClick} /> }
      </div>

      <Navbar></Navbar>
    </>
  );
}
