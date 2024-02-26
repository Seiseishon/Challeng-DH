export default function Card({ img, firstName, lastName, profession }) {

  return (
    <>
      <div
        className="bg-slate-50 h-[320px] p-[1em] mb-[3rem] border-slate-200 rounded shadow-lg shadow-slate-300
      dark:bg-bunker-900 dark:border-bunker-200 dark:shadow-bunker-500 transition-all duration-300 border text-center
      "
      >
        <div>
          <div className="w-[100px] h-[100px] rounded-[50%] m-[0_auto] overflow-hidden">
            <img src={img} alt={firstName} />
          </div>
          <div>
            <h2
              className="m-[2em_0_0.75em] text-black text-[1rem] leading-[100%] font-bold
            dark:text-bunker-200
            "
            >
              {`${firstName} ${lastName}`}
            </h2>
            <ul
              className="m-0 text-sm text-slate-400
            dark:text-bunker-300
            "
            >
              {profession.map((Element, i) => {
                return (
                  <li key={i}> {Element.profession} </li>
                )
              })}
            </ul>
          </div>
          <div
            className="border-slate-300 flex items-center justify-between
          dark:text-bunker-200 border-t mt-5 pt-5 w-full
          "
          >
            <button>
              <i className="bi bi-star dark:hover:text-bunker-300"></i>
            </button>
            <button>
              <i className="bi bi-chat dark:hover:text-bunker-300"></i>
            </button>
            <button>
              <i className="bi bi-envelope dark:hover:text-bunker-300"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
