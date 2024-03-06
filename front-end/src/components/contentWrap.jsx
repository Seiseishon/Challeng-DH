import PanelWrap from "./PanelWrap";
import Applicants from "./Applicants/Applicants";
import Professions from "./Professions/Professions";
import Carousel from "./Carousel/Carousel";

export default function ContentWrap() {
  const slides = [
    "src/assets/img/carousel/pexels-clay-elliot-14634936.jpg",
    "src/assets/img/carousel/pexels-polina-zimmerman-3747455.jpg",
    "src/assets/img/carousel/pexels-rdne-stock-project-5922534.jpg",
    "src/assets/img/carousel/pexels-rdne-stock-project-7581123.jpg",
    "src/assets/img/carousel/pexels-mikhail-nilov-6930435.jpg",
  ];

  return (
    <>
      <main
        className="col-[2] row-[2] p-[3em] overflow-auto bg-slate-100
      dark:bg-bunker-950 transition-colors duration-300
      "
      >
        {/*Preventa*/}
        <PanelWrap title="Búsqueda y selección">
          <p
            className="text-center text-slate-400 text-xl mb-2
          dark:text-bunker-300
          "
          >
            Encontramos talento para tu empresa, en todos los cargos
            administrativos, profesionales y técnicos.
          </p>
          <div>
            <Carousel slides={slides} />
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
