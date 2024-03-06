import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink to='company'>Empresa</NavLink>
          </li>
          <li>
            <NavLink to='applicants'>Aspirantes</NavLink>
          </li>
          <li>
            <NavLink to='professions'>Profesiones</NavLink>
          </li>
          <li>
            <NavLink to='form'>Postulate aquí</NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contacto</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}
