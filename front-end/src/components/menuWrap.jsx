export default function MenuWrap() {
  return (
    <>
      <header className="col-[1] row-[2] pb-[3em] overflow-auto bg-white w-[300px]
      dark:bg-bunker-950 transition duration-300
      ">
        <nav className="block p-[0_3em] h-[243]">
          <section className="block p-[3em_0_0]">
            <h3 className="m-0 text-[0.875em] uppercase text-blue-500 font-semibold
            dark:text-bright-turquoise-400
            ">
              Opciones
            </h3>
            <ul className="p-0 m-0 block">
              <li className="block p-0 m-[1em_0_0]">
                <a
                  href="#"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                  no-underline font-semibold text-[0.875em] transition-[color] 
                  ease-[ease] duration-[0.15s]
                  dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                  "
                >
                  <i className="bi bi-building text-lg mr-1" />- Empresas
                </a>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <a
                  href="#"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-person text-lg mr-1" />- Aspirantes
                </a>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <a
                  href="#"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-list-check text-lg mr-1" />- Profesiones
                </a>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <a
                  href="#"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-person-vcard text-lg mr-1" />- Postulate aquí
                </a>
              </li>
              <li className="block p-0 m-[1em_0_0]">
                <a
                  href="#"
                  className="flex h-5 items-center start-0 justify-start text-slate-400 hover:text-blue-950
                no-underline font-semibold text-[0.875em] transition-[color] 
                ease-[ease] duration-[0.15s]
                dark:text-bunker-400 dark:hover:text-bright-turquoise-100
                "
                >
                  <i className="bi bi-chat-left-text text-lg mr-1" />- Contacto
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
}
