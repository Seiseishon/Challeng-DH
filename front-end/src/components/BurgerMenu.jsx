import { useState } from "react";

export default function BurgerMenu() {
    const [open, setOpen] = useState(false)
    
    function botton() {
        setOpen(true)
    }

  return (
    <nav className={`${!open && 'hidden'} bg-gradient-to-t from-bright-turquoise-800 to-bright-turquoise-500 fixed min-h-screen w-56 z-10`} >
      <button onClick={botton} className={`right-0 bottom-0`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <section>
        <h3>Opciones</h3>
        <ul>
          <li>
            <a href="">Empresa</a>
          </li>
          <li>
            <a href="">Aspirantes</a>
          </li>
          <li>
            <a href="">Profesiones</a>
          </li>
          <li>
            <a href="">Postulate aquí</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
