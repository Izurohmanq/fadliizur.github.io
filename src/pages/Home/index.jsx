import FadliFoto from "../../assets/fadli2.jpg";
import SNavbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <>
    <div className="flex justify-center items-center my-28">
      <img src={FadliFoto} alt="foto izur" className="rounded-lg me-5"/>
      <div className="greetings text-white">
        <h1 className="text-6xl">Halo</h1>
        <h1 className="text-6xl">Iju di sini</h1>
        <p className="text-3xl mt-5">Selamat datang</p>
        <p className="text-3xl">di web portfoliokuu</p>
      </div>
    </div>
    <SNavbar></SNavbar>
    </>
  );
}
