import Carrousel from "../Carrousel";

export default function Details({ item, handle }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-2 sm:p-4">
      <div className="relative bg-white w-full max-w-5xl max-h-full overflow-y-auto rounded-xl shadow-lg p-4 sm:p-6">
        {/* Tombol Close */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black"
          onClick={handle}
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
          <p>{item.tag}</p>
        </article>
      </div>
    </div>
  );
}
