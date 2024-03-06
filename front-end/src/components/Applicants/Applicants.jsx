import { useState, useEffect } from "react";
import Card from "./Card";

export default function Applicants() {
  const [applicant, setApplicant] = useState([]);

  async function getApi() {
    const data = await fetch("http://localhost:3000/api/applicants");
    const result = await data.json();

    if (result.meta.status === 200) {
      setApplicant(result.data);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <article className="p-0 grid grid-cols-repeat gap-[2em] justify-items-center mx-auto mt-4 w-[96%]
    max-md:col-[2] max-md:row-[2]">
      {applicant.map((element, i) => {

        return (
          <Card
            key={i}
            id= {element.id}
            img={element.image}
            firstName={element.firstName}
            lastName={element.lastName}
            profession={element.professions.data}
          />
        );
      })}
    </article>
  );
}
