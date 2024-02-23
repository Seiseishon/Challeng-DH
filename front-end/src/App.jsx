
import foto1 from "./assets/img/foto1.jpg";
import foto2 from "./assets/img/foto2.jpg";
import foto3 from "./assets/img/foto3.jpg";
import foto4 from "./assets/img/foto4.jpg";
import foto5 from "./assets/img/foto5.jpg";
import foto6 from "./assets/img/foto6.jpg";

import SearchWrap from "./components/searchWrap";
import MenuWrap from "./components/menuWrap";
import ContentWrap from "./components/contentWrap";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div
      className={
        "grid w-full h-screen gap-0 grid-cols-[300px_auto] grid-rows-[80px_auto] *:box-border"
      }
    >
      {/*Sección de acceso*/}
      <SearchWrap />
      {/*Fin Sección de acceso*/}
      {/*Sección menu*/}
      <Logo />
      <MenuWrap />
      {/*Fin Sección menu*/}
      {/*Sección contenido*/}
      <ContentWrap />
      {/*Fin Sección contenido*/}
    </div>
  );
}
