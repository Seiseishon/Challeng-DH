import { useState } from "react";

export default function SearchWrap() {
  const [dark, setDark] = useState(true);

  function handelClick() {
    setDark(!dark)
  }

  //bi bi-sun bi-moon-stars

  return (
    <>
      <section className="col-[2] row-[1] bg-white bottom-3 border-b border-l border-gray-300 flex items-center justify-between p-[0_3em]">
        <div className="h-10">
          <label htmlFor="search">
            <i className="bi bi-search text-2xl text-modeLight-2" />
            <input type="text" id="search" />
          </label>
        </div>
        <div className="w-[160]">
          <button>
            <i onClick={handelClick} class={`bi ${dark ? 'bi-moon-stars' : 'bi-sun'}`}></i>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i className="bi bi-person-add text-2xl text-modeLight-2" />
            </a>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i className="bi bi-person text-2xl text-modeLight-2" />
            </a>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i className="bi bi-box-arrow-right text-2xl text-modeLight-2" />
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
