import Card from "./Card";
import { useState, useEffect } from "react";

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
    <article className="p-0 grid grid-cols-repeat gap-[2em]">
      {applicant.map((element, i) => {

        return (
          <Card
            key={i}
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
