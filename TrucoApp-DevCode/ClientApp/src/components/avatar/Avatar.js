import React from "react";
import "./avatar.css";
import pelo from "./../../assets/avatar/pelo1.png";
import ropa from "./../../assets/avatar/ropa.png";

const setPiel = (colorNuevo)=>{

	let colorActual = document.querySelector(".cabeza").classList[1];

	document.querySelector(".cabeza").classList.remove(colorActual);
	document.querySelector(".oreja-der").classList.remove(colorActual);
	document.querySelector(".oreja-izq").classList.remove(colorActual);
	document.querySelector(".cuello").classList.remove(colorActual);
	document.querySelector(".brazo-der").classList.remove(colorActual);
	document.querySelector(".brazo-izq").classList.remove(colorActual);

	document.querySelector(".cabeza").classList.add(colorNuevo);
	document.querySelector(".oreja-der").classList.add(colorNuevo);
	document.querySelector(".oreja-izq").classList.add(colorNuevo);
	document.querySelector(".cuello").classList.add(colorNuevo);
	document.querySelector(".brazo-der").classList.add(colorNuevo);
	document.querySelector(".brazo-izq").classList.add(colorNuevo);
		
}

const setOjos = (colorNuevo)=>{

		let colorActual = document.querySelector(".iris-der").classList[1];

	    document.querySelector(".iris-izq").classList.remove(colorActual);
		document.querySelector(".iris-der").classList.remove(colorActual);
		document.querySelector(".iris-izq").classList.add(colorNuevo);
		document.querySelector(".iris-der").classList.add(colorNuevo);
}
export function Avatar() {
    return (
		
		<div className="componente-avatar">
			<div className="componente-avatar-modificacion">
				<div className="componente-principal">
					<div className="avatar">
						<div className="oreja-izq piel-default"></div>
						<div className="cabeza piel-default">
							<div className="contendor-pelo">
								<img src={pelo}/>
							</div>
							<div className="cejas-ojos-nariz-boca">
								<div className="contenedor-cejas">
									<div className="ceja-izq"></div>
									<div className="ceja-der"></div>
								</div>
								<div className="contendor-ojos">
									<div className="ojo-izq">
										<div className="iris-izq iris-marron">
											<div className="pupila-izq"></div>
										</div>
									</div>
									<div className="ojo-der">
										<div className="iris-der iris-marron">
											<div className="pupila-der"></div>
										</div>
									</div>
								</div>
								<div className="nariz"></div>
								<div className="boca"></div>
							</div>
						</div>
						<div className="oreja-der piel-default"></div>
					</div>
					<div className="cuello piel-default"></div>
					<div className="componente-ropa">
							<img src={ropa}/>
					</div>
					<div className="contendor-brazos">
						<div className="brazo-izq piel-default"></div>
						<div className="brazo-der piel-default"></div>
					</div>
				</div>

				
				<div className="componente-cambio-aspecto">
					<div className="modificar color-ojo">
						<div className="ojo ojo-marron"
							 onClick={()=>setOjos("iris-marron")}>
								<div className="iris iris-marron">
									<div className="pupila" title="ojos marrones"></div>
								</div>
							</div>

						<div className="ojo ojo-verde"
							 onClick={()=>setOjos("iris-verde")}>
								<div className="iris iris-verde">
									<div className="pupila" title="ojos verdes"></div>
								</div>
						</div>
						<div className="ojo ojo-celeste"
							 onClick={()=>setOjos("iris-celeste")}>
								<div className="iris iris-celeste">
									<div className="pupila" title="ojos celestes"></div>
								</div>
						</div>
					</div>
					<div className="modificar color-piel">
						<div className="piel piel-default"
							 title="default"
							 onClick={()=>setPiel("piel-default")}></div>
						<div className="piel piel-rosa"
							 title="piel rosa"
							 onClick={()=>setPiel("piel-rosa")}></div>
						<div className="piel piel-morada"
							 title="piel morada"
							 onClick={()=>setPiel("piel-morada")}></div>
						<div className="piel piel-marron"
							 title="piel marron"
							 onClick={()=>setPiel("piel-marron")}></div>
						<div className="piel piel-oscura"
							 title="piel oscura"
							 onClick={()=>setPiel("piel-oscura")}></div>
					</div>
					<div className="modificar color-pelo">
						<div className="pelo pelo-negro" title="pelo negro"></div>
						<div className="pelo pelo-castano" title="pelo castaño"></div>
						<div className="pelo pelo-rubio" title="pelo rubio"></div>
						<div className="pelo pelo-colorado" title="pelo colorado"></div>
						<div className="pelo pelo-canoso" title="pelo canoso"></div>
					</div>	
				</div>
			</div>
		</div>
		
				
        
    );
}