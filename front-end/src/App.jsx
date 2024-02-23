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
