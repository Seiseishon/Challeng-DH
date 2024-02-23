import { useState } from "react";

export default function SearchWrap() {

  const [miClase, setMiClase] = useState('bi bi-moon-stars');
    
    function handleClick() {
        document.documentElement.classList.toggle('dark')
        
        setMiClase((claseActual) =>
            claseActual === 'bi bi-moon-stars' ? 'bi bi-brightness-low-fill' : 'bi bi-moon-stars'
        );
    
    }

  return (
    <>
      <section className="col-[2] row-[1] bg-light-200 bottom-3 border-b border-l border-light-600 flex items-center justify-between p-[0_3em]
      dark:bg-dark-800 transition duration-300 dark:border-l dark:border-dark-950
      ">
        <div className="h-10">
          <label className="flex items-center h-full">
            <i className="bi bi-search text-2xl text-light-700
            dark:text-dark-300 transition duration-300
            " />
            <input type="text" className='pl-[1em] py-[1px] pr-[2px] h-full ml-1 border-0 bg-light-200 focus:bg-light-100 text-light-950
            dark:bg-dark-800 dark:focus:bg-dark-900 dark:text-dark-50 transition-colors duration-300
            '/>
          </label>
        </div>
        <div className="w-[160]">
          <button>
            <i onClick={handleClick} className={`${miClase} text-xl text-light-700
            dark:text-dark-50
            `}></i>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i className="bi bi-person-add text-2xl text-light-700
              dark:text-dark-50
              " />
            </a>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i className="bi bi-person text-2xl text-light-700
              dark:text-dark-50
              " />
            </a>
          </button>
          <button className="border-0 bg-none w-8 h-8 m-0 p-0 ml-2">
            <a href="#">
              <i className="bi bi-box-arrow-right text-2xl text-light-700
              dark:text-dark-50
              " />
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
