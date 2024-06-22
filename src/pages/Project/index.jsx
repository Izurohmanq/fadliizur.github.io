import Navbar from "../../components/Navbar";
import ClickCard from "../../components/Cards";
import { dataProject } from "../../data";

export default function Project() {
  return (
    <>
      <div className="task mt-10">
        <h1 className="text-center text-white text-2xl font-bold">Project</h1>
        <div className="card flex flex-wrap justify-around items-center my-10">
        {dataProject.map((item) => {
            return (
              <div key={item.id}>
                <ClickCard  {...item}/>
              </div>
            );
          })}
        </div>
      </div>
      <Navbar></Navbar>
    </>
  );
}
