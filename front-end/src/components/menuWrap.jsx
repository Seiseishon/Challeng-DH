import React from "react"
import { useState } from "react"

function menuWrap(){
  const [ count, setCount] = useState(0);
}
		<header class="menu-wrap">
			<figure class="user">
				<div class="user-avatar"
					img src="./assets/img/logo-dh.png" alt="Logo Digital House	">
				</div>
				<figcaption>
					Digital House
				</figcaption>
			</figure>
			<nav>
				<section class="menu">
					<h3>Opciones</h3>
					<ul>
						<li>
							<a href="#">
								<i class="bi bi-building" style="font-size: 1.2rem; color: cornflowerblue;"></i>
								- Empresas
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-person" style="font-size: 1.2rem; color: cornflowerblue;"></i>
								- Aspirantes
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-list-check"></i>
								- Profesiones
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-person-vcard" style="font-size: 1.2rem; color: cornflowerblue;"></i>
								- Postulate aquí
							</a>
						</li>
						<li>
							<a href="#">
								<i class="bi bi-chat-left-text"></i>
								- Contacto
							</a>
						</li>
					</ul>
				</section>
			</nav>
		</header>