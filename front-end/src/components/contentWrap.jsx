import PanelWrap from "./PanelWrap";
import Applicants from "./Applicants/Applicants";
import Professions from "./Professions/Professions";

import banner from "../assets/img/public/banner.jpg";

export default function ContentWrap() {
  return (
    <>
      <main className="col-[2] row-[2] p-[3em] overflow-auto bg-slate-100 border-l border-slate-300
      dark:bg-bunker-950 dark:border-bunker-700 dark:border-l transition-colors duration-300
      ">
        {/*Preventa*/}
        <PanelWrap title="Búsqueda y selección">
          <p className="text-center text-slate-400 text-xl mb-2
          dark:text-bunker-300
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
