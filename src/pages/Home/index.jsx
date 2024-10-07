import FadliFoto from "../../assets/fadli2.jpg";
import SNavbar from "../../components/Navbar";
import Head from "../../components/Head";



export default function HomePage() {
  return (
    <>
      <Head 
        title="Home | Fadli Izurohman"
        desc="Halo Iju di sini Selamat datang di web portfoliokuu"
        keywords="web portfolio, react js"
      />
      
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center w-full my-10">
          <img src={FadliFoto} alt="izurohman" className="rounded-lg me-0 md:me-5 border-6 border-white" />
          <div className="greetings text-white text-center sm:text-start mt-5 md:mt-0">
            <h1 className="text-3xl xl:text-6xl">Halo</h1>
            <h1 className="text-3xl xl:text-6xl">Iju di sini</h1>
            <p className="text-2xl xl:text-3xl mt-2 md:mt-5">Selamat datang</p>
            <p className="text-2xl xl:text-3xl">di web portfoliokuu</p>
          </div>
        </div>
      </div>
      
      <SNavbar />
    </>
  );
}
