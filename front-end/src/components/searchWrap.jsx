import { useState } from "react";

export default function SearchWrap() {
  const [miClase, setMiClase] = useState("bi bi-moon-stars");

  function handleClick() {
    document.documentElement.classList.toggle("dark");

    setMiClase((claseActual) =>
      claseActual === "bi bi-moon-stars"
        ? "bi bi-brightness-low-fill"
        : "bi bi-moon-stars"
    );
  }

  return (
    <>
      <section
        className="col-[2] row-[1] bg-white bottom-3 border-b border-l border-slate-300 flex items-center justify-between p-[0_3em]
      dark:bg-bunker-950 dark:border-bunker-700 transition duration-300
      "
      >
        <div className="h-10">
          <label className="flex items-center h-full">
            <i
              className="bi bi-search text-2xl text-blue-500 hover:text-blue-800
            dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200
            "
            />
            <input
              type="text"
              className="pl-[1em] py-[1px] pr-[2px] h-full ml-1 border-0 bg-white focus:bg-slate-100 text-slate-800
            dark:bg-bunker-950 dark:focus:bg-bunker-900 dark:text-bunker-200 transition-colors duration-300
            "
            />
          </label>
        </div>
        <div className="w-[160]">
          <button>
            <i
              onClick={handleClick}
              className={`${miClase} text-xl text-blue-500 hover:text-blue-800
              dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200
            `}
            ></i>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i
                className="bi bi-person-add text-2xl text-blue-500 hover:text-blue-800
              dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200
              "
              />
            </a>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i
                className="bi bi-person text-2xl text-blue-500 hover:text-blue-800
              dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200
              "
              />
            </a>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i
                className="bi bi-box-arrow-right text-2xl text-blue-500 hover:text-blue-800
              dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200
              "
              />
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
