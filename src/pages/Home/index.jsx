import FadliFoto from "../../assets/fadli2.jpg";
import SNavbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center my-10 xl:my-36">
      <img src={FadliFoto} alt="foto izur" className="rounded-lg me-0 md:me-5"/>
      <div className="greetings text-white text-center sm:text-start mt-5 md:mt-0">
        <h1 className="text-3xl xl:text-6xl ">Halo</h1>
        <h1 className="text-3xl xl:text-6xl ">Iju di sini</h1>
        <p className="text-2xl xl:text-3xl mt-2 md:mt-5">Selamat datang</p>
        <p className="text-2xl xl:text-3xl">di web portfoliokuu</p>
      </div>
    </div>
    <SNavbar></SNavbar>
    </>
  );
}
