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
        className="p-4 mb-12 rounded shadow shadow-light-600 flex flex-col
      dark:shadow-dark-400
      "
      >
        <h4
          className="bg-gradient-to-r from-light-300 to-light-500 text-light-800 z-[2] text-center border border-light-500 rounded-t-[inherit] relative p-[8px_16px] m-[0_0_8px] text-2xl
        dark:bg-gradient-to-l dark:from-dark-700 dark:to-dark-500 dark:border-dark-500 dark:text-dark-200"
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
