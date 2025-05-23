import ClickCard from "../../components/Cards";
import LinkedinImage from "../../assets/contact-asset/linkedin.png";
import { Spotify } from "react-spotify-embed";
import Navbar from "../../components/Navbar";
import Head from "../../components/Head";

export default function Contact() {
  return (
    <>
      <Head
        title="Contact | Fadli Izurohman"
        desc="Beberapa contact yang bisa kamu hubungi"
        keywords="web portfolio, react js, linkedin, spotify"
      />
      <div id="contact" className="contact min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <div className="max-w-3xl my-10">
            <h1 className="font-bold text-center text-white text-3xl md:text-5xl">Contact</h1>
            <div className="Content flex flex-col md:flex-row justify-center items-center mt-5">
              <ClickCard
                image={[LinkedinImage]}
                judul="Linkedin"
                desc="Linkedin"
                tag="Halo semuanya, silakan untuk menghubungi saya bisa melalui Linkedin berikut. Terima Kasih !! 😀"
                utils="Let's Connect!!"
                link="https://www.linkedin.com/in/fadli-izurohman/"
              />
              <Spotify link="https://open.spotify.com/playlist/1tfWgRXaUizmYBD8sM4axM?si=61494593fbab43e7" />
            </div>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </>
  );
}
