import { useState } from "react";
import Search from "./search";

export default function SearchWrap() {
  const [miClase, setMiClase] = useState("bi bi-moon-stars");
  const [open, setOpen] = useState(false);

  function handleClick() {
    document.documentElement.classList.toggle("dark");

    setMiClase((claseActual) =>
      claseActual === "bi bi-moon-stars"
        ? "bi bi-brightness-low-fill"
        : "bi bi-moon-stars"
    );
  }

  function bottonOpen() {
    setOpen(true);
  }

  function bottonClosed() {
    setOpen(false);
  }

  return (
    <section className="col-[2] row-[1] bg-white bottom-3 border-b border-slate-300 flex items-center justify-between p-[0_3em] dark:bg-bunker-950 dark:border-bunker-700 transition duration-300">
      {open && (
        <div
          onClick={bottonClosed}
          className="bg-gray-900/80 z-10 min-h-screen w-full fixed top-0 left-0 transition-opacity duration-300"
        ></div>
      )}
      <nav
        className={`${
          open ? "w-96 opacity-100" : "w-0 opacity-0"
        } bg-bunker-50 fixed z-20 h-full bottom-0 left-0 rounded-xl border-2 border-slate-600 transition-all duration-300
        dark:bg-bunker-950 dark:border-gray-800
        `}
      >
        <button
          onClick={bottonClosed}
          className="md:hidden text-blue-500 hover:text-blue-800 absolute top-4 right-4 transition-colors duration-300
          dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <section
          className={`${
            !open && "hidden"
          } mx-8 mt-14 text-center text-2xl text-slate-400`}
        >
          <ul>
            <li className="py-2 transition-colors duration-300">
              <a
                className="nav dark:hover:text-bright-turquoise-400"
                href=""
              >
                Empresa
              </a>
            </li>
            <li className="py-2 transition-colors duration-300">
              <a
                className="nav dark:hover:text-bright-turquoise-400"
                href=""
              >
                Aspirantes
              </a>
            </li>
            <li className="py-2 transition-colors duration-300">
              <a href="" className="nav dark:hover:text-bright-turquoise-400">Profesiones</a>
            </li>
            <li className="py-2 transition-colors duration-300">
              <a className="nav dark:hover:text-bright-turquoise-400" href="">Postulate aquí</a>
            </li>
            <li className="py-2 transition-colors duration-300">
              <a href="" className="nav dark:hover:text-bright-turquoise-400">Contacto</a>
            </li>
          </ul>
        </section>
      </nav>
      <div className="h-10 max-md:flex max-md:w-72 max-md:justify-around">
        <button
          onClick={bottonOpen}
          className="md:hidden text-blue-500 pr-3 border-r-2 hover:text-blue-800 transition-colors duration-300
          dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200 dark:border-bunker-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <label className="flex items-center h-full">
          <i
            className="bi bi-search text-2xl text-blue-500 hover:text-blue-800
            dark:text-bright-turquoise-400 dark:hover:text-bright-turquoise-200
            "
          />
          <Search/>
        </label>
      </div>
      <div className="w-40">
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
  );
}
