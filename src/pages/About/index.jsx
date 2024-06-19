import Kolase from "../../assets/about-aset/kolase foto.png";
import SNavbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <div id="about" className="about mb-8">
        <div className="flex justify-center">
          <div className="max-w-3xl my-5">
            <h1 className="text-center text-white">About</h1>
            <img
              src={Kolase}
              className="w-full rounded-3xl border-3 mt-5 border-white"
              alt="header foto about"
            />
            <article className="mt-5 space-y-4 text-white">
              <p>Halo semuanya!!</p>
              <p>
                Kenalin nama saya Fadli Izurohman. Lahir di rumah sakit pada
                tanggal 16 bulan Buruh. Saat ini saya memiliki ketertarikan pada
                bidang data dan web.
              </p>
              <p>
                Untuk saat ini pada bidang web saya berfokus kepada Front-end
                saja. Terkadang saya juga nyerempet-nyerempet ke back-end juga
                seperti Laravel dan Node JS, walaupun sebenarnya sekarang sambil belajar Golang. Untuk bidang data sendiri, saya fokus kepada
                bahasa pemrograman python beserta library-nya, seperti pandas,
                numpy, dan sekarang lagi nyerempet-nyerempet ke scikit learn
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
