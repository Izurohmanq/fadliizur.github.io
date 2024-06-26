import Kolase from "../../assets/about-aset/kolase foto.png";
import SNavbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <div id="about" className="about mb-8">
        <div className="flex justify-center">
          <div className="max-w-3xl my-5">
            <h1 className="text-center text-white text-2xl">About</h1>
            <img
              src={Kolase}
              className="w-full rounded-3xl border-3 mt-5 border-4 border-white"
              alt="header foto about"
            />
            <article className="mt-5 px-5 space-y-4 text-white text-justify">
              <p>Halo semuanya!!</p>
              <p>
                Kenalin nama saya Fadli Izurohman. Lahir di rumah sakit pada
                tanggal 16 bulan Buruh. Saat ini saya memiliki ketertarikan pada
                bidang data dan web.
              </p>
              <p>
                Untuk saat ini pada bidang web saya berfokus kepada Front-end ReactJS dan ke Back-end juga
                seperti Laravel dan Node JS, sementara di lain waktu sekarang sambil belajar Golang. 
                Untuk bidang data sendiri, saya fokus kepada
                bahasa pemrograman python beserta library-nya, seperti pandas,
                numpy, dan scikit learn, walaupun sebenarnya sekarang lagi nyicil Tensorflow.
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
