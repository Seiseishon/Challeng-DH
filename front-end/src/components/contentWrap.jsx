import PanelWrap from "./PanelWrap";
import Applicants from "./Applicants/Applicants";
import Professions from "./Professions/Professions";

import banner from "../assets/img/banner.jpg";

export default function ContentWrap() {
  return (
    <>
      <main className="col-[2] row-[2] p-[3em] overflow-auto bg-gray-50 border-l border-gray-300">
        {/*Preventa*/}
        <PanelWrap title="Búsqueda y selección">
          <p className="text-center text-gray-400 text-xl">
            Encontramos talento para tu empresa, en todos los cargos
            administrativos, profesionales y técnicos.
          </p>
          <div>
            <img src={banner} alt="Rcursos Humanos" />
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
