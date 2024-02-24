export default function Card({ img, firstName, lastName, profession }) {
  return (
    <>
      <div
        className="bg-light-200 h-[320px] p-[1em] mb-[3rem] border-light-300 rounded shadow-lg shadow-light-600
      dark:bg-dark-800 dark:border-dark-700 dark:shadow-dark-400 transition-all duration-300 border text-center
      "
      >
        <div>
          <div className="w-[100px] h-[100px] rounded-[50%] m-[0_auto] overflow-hidden">
            <img src={'h'} alt={firstName} />
          </div>
          <div>
            <h2
              className="m-[2em_0_0.75em] text-light-700 text-[1rem] leading-[100%] font-bold
            dark:text-dark-300
            "
            >
              {`${firstName} ${lastName}`}
            </h2>
            <ul
              className="m-0 text-sm text-light-500
            dark:text-dark-500
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
            className="border-light-500 text-light-800 flex items-center justify-between
          dark:border-dark-500 dark:text-dark-200 border-t mt-5 pt-5 w-full
          "
          >
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
