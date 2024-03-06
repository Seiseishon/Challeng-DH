import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ApplicantDetails() {
  const idApplicant = useParams("idApplicant");

  const [applicant, setApplicant] = useState([]);

  async function getApi() {
    const data = await fetch(
      `http://localhost:3000/api/applicants/${idApplicant}`
    );
    const result = await data.json();

    if (result.meta.status === 200) {
      setApplicant(result.data);
    }
  }

  const {
    firstName,
    lastName,
    dni,
    email,
    phone,
    urlProfile,
    birthDate,
    gender,
    image,
    professions,
  } = applicant;

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div
      className="bg-transparent text-slate-500 flex justify-around mx-auto mt-8 rounded-xl border border-slate-500 w-[60%] h-[50%] transition-colors duration-300
      dark:text-bunker-200
      max-md:w-[25rem] max-md:h-[35rem] max-md:flex-col max-md:items-center max-md:mx-auto max-md:col-[2] max-md:row-[2]
    "
    >
      <div className="my-auto">
        <img
          className="w-52 h-52 rounded-full"
          src={image}
          alt={`${firstName} ${lastName}`}
        />
      </div>
      <div className="flex-col w-80 my-auto">
        <div className="text-center">
          <h3 className="text-2xl"> {`${firstName} ${lastName}`} </h3>
          <p className="font-semibold"> {gender} </p>
        </div>
        <div className="text-center">
          <p>carrera/carrera/carrera</p> {/* aca irian el listado de carrera, no van en lista. */}
        </div>
        <div className="text-lg my-4 max-md:text-center">
          <div> {dni} </div>
          <div className="my-3"> {phone}</div>
          <div> {birthDate}</div>
        </div>
        <div className="text-center text-lg">
          <a className="mx-4 hover:text-blue-600" href={urlProfile}>
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="hover:text-orange-500" href={email}>
            <i className="bi bi-envelope-at-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
