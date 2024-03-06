import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuWrap() {
  return (
    <>
      <header
        className="col-[1] row-[2] pb-[3em] overflow-auto bg-white w-[300px] border-r border-slate-300
      dark:bg-bunker-950 dark:border-bunker-700 transition duration-300 max-md:hidden
      "
      >
        <nav className="block p-[0_3em] h-[243]">
          <section className="block p-[3em_0_0]">
            <h3
              className="m-0 text-[0.875em] uppercase text-blue-500 font-semibold
            dark:text-bright-turquoise-400"
            >
              Opciones
            </h3>
            <ul className="p-0 m-0 block">
              <li className="block p-0 m-[1em_0_0]">
                <NavLink
                  to="company"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                  no-underline font-semibold text-[0.875em] transition-[color] ease-[ease] duration-[0.15s]
                  dark:text-bunker-400 dark:hover:text-bright-turquoise-100"
                >
                  <i className="bi bi-building text-lg mr-1" />- Empresas
                </NavLink>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <NavLink
                  to="applicants"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-person text-lg mr-1" />- Aspirantes
                </NavLink>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <NavLink
                  to="professions"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-list-check text-lg mr-1" />- Profesiones
                </NavLink>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <NavLink
                  to="/form"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-person-vcard text-lg mr-1" />- Postulate
                  aquí
                </NavLink>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <NavLink
                  to="contact"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-chat-left-text text-lg mr-1" />- Contacto
                </NavLink>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
}
