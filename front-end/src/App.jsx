import SearchWrap from "./components/searchWrap";
import MenuWrap from "./components/menuWrap";
import ContentWrap from "./components/contentWrap";
import Logo from "./components/Logo";
import Formulario from "./components/Formulario";

/* import { BrowserRoutes, Router, Route, Link } from 'react-router-dom';
 */
export default function App() {
  return (
    <div
      className="grid h-screen gap-0 grid-cols-[300px_auto] grid-rows-[80px_auto] *:box-border
    max-md:grid-cols-1" 
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
      {/* <Formulario /> */}
      {/* Formulario */}
    </div>
  );
}
