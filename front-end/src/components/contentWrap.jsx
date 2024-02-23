import PanelWrap from "./PanelWrap";
import Applicants from "./Applicants/Applicants";
import Professions from "./Professions/Professions";

import banner from "../assets/img/banner.jpg";

export default function ContentWrap() {
  return (
    <>
      <main className="col-[2] row-[2] p-[3em] overflow-auto bg-light-100 border-l border-light-600
      dark:bg-dark-900 transition-colors duration-300 dark:border-l dark:border-dark-950
      ">
        {/*Preventa*/}
        <PanelWrap title="Búsqueda y selección">
          <p className="text-center text-light-600 text-xl mb-2
          dark:text-dark-400
          ">
            Encontramos talento para tu empresa, en todos los cargos
            administrativos, profesionales y técnicos.
          </p>
          <div>
            <img className="mb-2" src={banner} alt="Rcursos Humanos" />
          </div>
        </PanelWrap>
        {/*Fin Preventa*/}
        {/*Sección aspirantes*/}
        <PanelWrap title="Aspirantes">
          <Applicants />
        </PanelWrap>
        {/*Fin sección aspirantes*/}
        {/*Sección de profesiones*/}
        <PanelWrap title="Profesiones">
          <Professions />
        </PanelWrap>
        {/*Fin sección profesiones*/}
      </main>
    </>
  );
}
