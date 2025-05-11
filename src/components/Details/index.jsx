import { useState, useEffect } from "react";
import Carrousel from "../Carrousel";

export default function Details({ item, handle }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      handle(); 
    }, 300); 
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-2 sm:p-4">
      <div
        className={`relative bg-white w-full max-w-5xl max-h-full overflow-y-auto rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Tombol Close */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black"
          onClick={handleClose}
        >
          Close
        </button>

        {/* Judul */}
        <h1 className="font-bold text-center text-2xl sm:text-4xl md:text-5xl text-black mt-4">
          Penjelasan
        </h1>

        {/* Carrousel */}
        <div className="mt-4 sm:mt-6">
          <Carrousel linkImage={item.image} />
        </div>

        {/* Artikel */}
        <article className="mt-4 sm:mt-6 pt-5 px-2 sm:px-5 space-y-4 text-black text-justify text-sm sm:text-base">
          <ul className="list-disc list-outside pl-5 space-y-1">
            {item.tag
              .split(".")
              .map((sentence, index) =>
                sentence.trim() !== "" ? (
                  <li key={index}>{sentence.trim()}.</li>
                ) : null
              )}
          </ul>
          <a
            target="_blank"
            className="block font-bold mt-4 text-center text-sm sm:text-xl md:text-xl text-black transform ease-in-out hover:scale-110 hover:text-rose-800"
            href={item.link}
          >
            Link {item.judul}
          </a>
        </article>
      </div>
    </div>
  );
}
