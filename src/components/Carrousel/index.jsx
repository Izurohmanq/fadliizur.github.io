import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow with Tailwind
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-4 md:-right-10 top-1/2 transform -translate-y-1/2 bg-rose-800 hover:bg-rose-500 text-white rounded-full p-1 md:p-3 shadow-md cursor-pointer z-10 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      ▶
    </div>
  );
}

// Custom Prev Arrow with Tailwind
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-5 md:-left-10 top-1/2 transform -translate-y-1/2 bg-rose-800 hover:bg-rose-500 text-white rounded-full p-1 md:p-3 shadow-md cursor-pointer z-10 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      ◀
    </div>
  );
}

export default function Carrousel({ linkImage }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container w-full max-w-3xl mx-auto px-2">
      <Slider {...settings}>
        {linkImage.map((imgSrc, index) => (
          <div className="px-2 sm:px-5" key={index}>
            <img
              src={imgSrc}
              className="w-full h-auto max-h-[60vh] sm:max-h-[500px] object-contain rounded-2xl mt-5 border-4 border-white"
              alt={`carousel-image-${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
