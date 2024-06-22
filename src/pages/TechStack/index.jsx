import Navbar from "../../components/Navbar";
import assets from "../../assets/techstack-aset/techstack-aset";

const { Bootstrap, CSS, Laravel, Mysql, Nodejs, Python, React, Tailwind } = assets;

const techStack = [
  { src: Bootstrap, alt: "Bootstrap logo" },
  { src: CSS, alt: "CSS logo" },
  { src: Laravel, alt: "Laravel logo" },
  { src: Mysql, alt: "MySQL logo" },
  { src: Nodejs, alt: "Node.js logo" },
  { src: Python, alt: "Python logo" },
  { src: React, alt: "React logo" },
  { src: Tailwind, alt: "Tailwind logo" }
];

function TechImage({ src, alt }) {
  return <img className="w-auto h-20 m-2 transition ease-in-out hover:scale-125" src={src} alt={alt} />;
}

export default function TechStack() {
  return (
    <>
      <section id="techStack" className="techStack py-10 mt-28 md:mt-52">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-5 text-white">
            <i>Tech stack</i> yang kadang saya gunakan:
          </p>
          <div className="flex flex-wrap justify-center items-center">
            {techStack.map((tech, index) => (
              <TechImage key={index} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
}
