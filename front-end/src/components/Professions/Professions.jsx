import { useEffect, useState } from "react";
import Card from "./Card";

export default function Professions() {
  const [profession, setProfession] = useState([]);

  async function getApi() {
    const data = await fetch("http://localhost:3000/api/professions");
    const result = await data.json();

    if (result.meta.status === 200) {
      setProfession(result.data);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div
        className="p-4 mb-12 rounded shadow shadow-slate-400 flex flex-col
      dark:shadow-bunker-200
      "
      >
        <h4
          className="bg-blue-600 text-white z-[2] text-center rounded-t-[inherit] relative p-[8px_16px] m-[0_0_8px] text-2xl
        dark:bg-gradient-to-r from-bright-turquoise-700 to-bright-turquoise-500 dark:text-bunker-50 transition-colors duration-300"
        >
          Listado de Profesionales
        </h4>
        {profession.map((element, i) => (
          <Card
            key={i}
            profession={element.profession}
            isLast={i === element.length - 1}
          />
        ))}
      </div>
    </>
  );
}
