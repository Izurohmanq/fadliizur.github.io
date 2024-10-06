import assets from "../../assets/navbar-aset/navbar-aset";
import { Link, useNavigate, useLocation } from "react-router-dom";

const { Home, About, TechStack, Project, Contact, Experience } = assets;

export default function Navbar() {
  const location = useLocation(); // Get current location

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar content-center mb-20">
      <nav className="navbar-bawah fixed bottom-0 left-0 right-0 flex justify-center items-center content-center bg-slate-950/30 w-full md:w-1/2 mx-auto p-3 md:mb-10 rounded-lg backdrop-blur-sm">
        <span className="relative mx-5">
          <Link to="/">
            <img
              src={Home}
              className="transition ease-in-out duration-300 w-8 md:w-10 hover:scale-125 mb-1"
              alt="Home"
            />
            {isActive("/") && (
              <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            )}
          </Link>
        </span>

        <span className="relative mx-5">
          <Link to="/about">
            <img
              src={About}
              className="transition ease-in-out duration-300 w-8 md:w-10 hover:scale-125 mb-1"
              alt="About"
            />
            {isActive("/about") && (
              <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            )}
          </Link>
        </span>

        <span className="relative mx-5">
          <Link to="/techstack">
            <img
              src={TechStack}
              className="transition ease-in-out duration-300 w-8 md:w-10 hover:scale-125 mb-1"
              alt="Tech Stack"
            />
            {isActive("/techstack") && (
              <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            )}
          </Link>
        </span>

        <span className="relative mx-5">
          <Link to="/project">
            <img
              src={Project}
              className="transition ease-in-out duration-300 w-8 md:w-10 hover:scale-125 mb-1"
              alt="Project"
            />
            {isActive("/project") && (
              <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            )}
          </Link>
        </span>

        <span className="relative mx-5">
          <Link to="/experience">
            <img
              src={Experience}
              className="transition ease-in-out duration-300 w-8 md:w-10 hover:scale-125 mb-1"
              alt="Experience"
            />
            {isActive("/experience") && (
              <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            )}
          </Link>
        </span>

        <span className="relative mx-5">
          <Link to="/contact">
            <img
              src={Contact}
              className="transition ease-in-out duration-300 w-8 md:w-10 hover:scale-125 mb-1"
              alt="Contact"
            />
            {isActive("/contact") && (
              <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            )}
          </Link>
        </span>
      </nav>
    </div>
  );
}
