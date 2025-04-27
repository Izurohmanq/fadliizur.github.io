import Kolase from "../../assets/about-aset/kolase foto.png";
import Head from "../../components/Head";
import SNavbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Head
        title="About | Fadli Izurohman"
        desc="penjelasan mengenai siapa diriku sebenarnya"
        keywords="web portfolio, react js"
      />
      <div id="about" className="about min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <div className="max-w-3xl my-5">
            <h1 className="font-bold text-center text-white text-3xl md:text-5xl">About</h1>
            <div className="px-5"> 
              <img
                src={Kolase}
                className="w-full rounded-3xl mt-5 border-4 border-white"
                alt="header foto about"
              />
            </div>
            <article className="mt-5 px-5 space-y-4 text-white text-justify">
              <p className="font-semibold text-5xl md:text-1xl text-center md:text-start">Halo semuanya!!</p>
              <p>
                Perkenalkan nama saya Fadli Izurohman, bisa dipanggil iju/fadli. Saat ini saya berdomisili di Bandung dan 
                saya adalah seorang fresh graduate yang memiliki ketertarikan pada web, baik front-end maupund back-end dan mobile development.
              </p>
              <p>
                Untuk saat ini, pada bidang web saya berfokus kepada Front-end
                ReactJS dan ke Back-end juga seperti Laravel dan Node JS,
                sementara di lain waktu sambil belajar Golang untuk Back-end dan Flutter untuk mobile development.
                Seiring berjalannya dengan waktu, saya juga mempelajari bahasa pemrograman lainnya,
                seperti Golang. Tidak hanya itu saja, saya pun mempelajari GCP untuk DevOps.
              </p>
              <p>
                Mungkin, sekian dari saya. Sekali lagi terima kasih atas
                perhatiannya. Selamat berjelajah.
              </p>
            </article>
          </div>
        </div>
      </div>

      <SNavbar></SNavbar>
    </>
  );
}

