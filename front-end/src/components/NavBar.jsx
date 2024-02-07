import { useState } from "react"

export default function NavBar() {

    const [miClase, setMiClase] = useState('bi bi-moon-stars');
    
    function handleClick() {
        document.documentElement.classList.toggle('dark')
        document.documentElement.classList.toggle('light')
        
        setMiClase((claseActual) =>
            claseActual === 'bi bi-moon-stars' ? 'bi bi-brightness-low-fill' : 'bi bi-moon-stars'
        );
    
    }


    return (
        <section className="search-wrap bg-light-400 dark:bg-dark-400 dark:text-dark-100 text-xl transition-colors duration-500">
            <div className="search">
                <label htmlFor="search">
                    <i
                        className="bi bi-search"
                        style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                    />
                    <input className="dark:bg-dark-100" type="text" id="search" />
                </label>
            </div>
            <div className="user-actions">
                {/* button darkMode */}
                <button onClick={handleClick}>
                    <i className= {miClase}></i>
                </button>
                {/* button darkMode */}
                <button>
                    <a href="#">
                        <i
                            className="bi bi-person-add"
                            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                        />
                    </a>
                </button>
                <button>
                    <a href="#">
                        <i
                            className="bi bi-person"
                            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                        />
                    </a>
                </button>
                <button>
                    <a href="#">
                        <i
                            className="bi bi-box-arrow-right"
                            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                        />
                    </a>
                </button>
            </div>
        </section>
    )
}