import { useNavigate } from 'react-router-dom';

export default function Carousel({items, activeIndex, setActiveIndex}) {

  const navigate = useNavigate();

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`absolute inset-0 w-full h-full p-8 text-left transition-opacity duration-700 ease-in-out ${
              index === activeIndex
                ? "opacity-100 z-20"
                : "opacity-0 z-10 pointer-events-none"
            } ${item.bg}`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-5">
              <img
                src={item.image}
                alt={item.title}
                className="h-28 w-28 object-contain"
              />
              <h2 className="text-3xl font-bold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-700 text-center max-w-lg text-base">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 z-30 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition"
      >
        ◀
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 z-30 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition"
      >
        ▶
      </button>
    </div>
  );
}
