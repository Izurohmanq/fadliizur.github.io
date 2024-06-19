import assets from "../../assets/navbar-aset/navbar-aset";
import { Link, useNavigate } from 'react-router-dom';

const { Home, About, TechStack, Project, Contact } = assets;

export default function Navbar() {
  return (
    <>
      <div className="navbar content-center mb-20">
        <nav className="navbar-bawah fixed bottom-0 left-0 right-0 flex justify-center items-center content-center bg-slate-950/30 w-1/2 mx-auto p-3 mb-10 rounded-lg">
          <span>
            <Link to="/">
              <img src={Home} className="size-12 me-9"></img>
            </Link>
          </span>
          <span>
            <Link to="/about">
              <img src={About} className="size-12 me-9"></img>
            </Link>
          </span>
          <span>
            <Link to="/techstack">
              <img src={TechStack} className="size-12 me-9"></img>
            </Link>
          </span>
          <span>
            <Link to="#task">
              <img src={Project} className="size-12 me-9"></img>
            </Link>
          </span>
          <span>
            <Link to="#contact">
              <img src={Contact} className="size-12"></img>
            </Link>
          </span>
        </nav>
      </div>
    </>
  );
}
