import { useState, useEffect } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    const nextIndex = (current + 1) % slides.length;
    setCurrent(nextIndex);
  }

  function circleClick(i) {
    console.log(i);
    setCurrent(i);
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className="overflow-hidden relative rounded-xl h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div
        className="flex transition ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => (
          <img key={i} src={s} />
        ))}
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-4 w-full">
        {slides.map((s, i) => (
          <div
            onClick={() => circleClick(i)}
            key={"circle" + i}
            className={`rounded-full w-3 h-3 cursor-pointer hover:bg-white transition-colors duration-300 ${
              i === current ? "bg-white" : "bg-slate-300/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
