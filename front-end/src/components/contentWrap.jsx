import React from "react";
import { useState } from "react";
import applicants from "./applicants";
import professions from "./professions";

function contentWrap(){
    const [count, setCount] = useState(0);
 return (
	<>
     <main class="content-wrap">
			<header class="preventa">

				<h2>Búsqueda y selección</h2>
				<p class="text-center h5">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
				<div>
					<img src="./assets/img/banner.jpg" alt="Rcursos Humanos"/>
				</div>
			</header>
			<applicants/>
		    <professions/>
		</main>
	</>
	);
}

 export default contentWrap;