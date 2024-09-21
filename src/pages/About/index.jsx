import Kolase from "../../assets/about-aset/kolase foto.png";
import Head from "../../components/Head";
import SNavbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Head
        title="About Iju"
        desc="penjelasan mengenai siapa diriku sebenarnya"
        keywords="web portfolio, react js"
      />
      <div id="about" className="about min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <div className="max-w-3xl my-5">
            <h1 className="text-center text-white text-3xl">About</h1>
            <div className="px-5"> 
              <img
                src={Kolase}
                className="w-full rounded-3xl mt-5 border-4 border-white"
                alt="header foto about"
              />
            </div>
            <article className="mt-5 px-5 space-y-4 text-white text-justify">
              <p>Halo semuanya!!</p>
              <p>
                Perkenalkan nama saya Fadli Izurohman. Lahir di rumah sakit pada
                tanggal 16. Saat ini saya memiliki ketertarikan pada
                bidang data, web, dan mobile development.
              </p>
              <p>
                Untuk saat ini, pada bidang web saya berfokus kepada Front-end
                ReactJS dan ke Back-end juga seperti Laravel dan Node JS,
                sementara di lain waktu sambil belajar Golang untuk Back-end dan Flutter untuk mobile development. 
                Untuk bidang data sendiri, saya fokus kepada bahasa pemrograman python
                beserta library-nya, seperti pandas, numpy, scikit learn, dan Tensorflow.
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

