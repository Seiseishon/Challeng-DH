import { Link } from "react-router-dom";

export default function Card({ id, img, firstName, lastName, profession }) {
  return (
    <Link to={`applicants/:${id}`}>
      <div className="bg-transparent w-72 h-96 transition-colors duration-300">
        <div className="w-48 h-48 rounded-full mx-auto mt-10 overflow-hidden">
          <img src={img} alt={`${firstName} ${lastName}`} />
        </div>
        <div className="flex flex-col items-center mt-5">
          <h4
            className="text-slate-600 font-bold text-lg
        dark:text-slate-200
        "
          >{`${firstName} ${lastName}`}</h4>
          <ul
            className="my-4 text-center text-slate-500
        dark:text-slate-300"
          >
            {profession.map((Element, i) => {
              return <li key={i}> {Element.profession} </li>;
            })}
          </ul>
          <div className="text-slate-400">
            <button className="pr-4 hover:text-orange-500">
              <i className="bi bi-envelope-at-fill"></i>
            </button>
            <button className="pr-4 hover:text-blue-500">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
