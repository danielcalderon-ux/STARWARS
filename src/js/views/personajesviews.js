import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const Personajeswiews = props => {
	const params = useParams(); // tre la informaicion de la ruta
	const { store, actions } = useContext(Context); // para poder usar la info del store

	var detalle = store.peoples[params.theid];
	console.log(detalle);

	return (
		<div className="jumbotron jumbotron-fluid bg-dark text-white">
			<div className="container">
				<h1 className="display-4">{detalle.name} </h1>
				<p>
					Existen dos grupos de humanos que son sensibles a la Fuerza pero que poseen ideologías diferentes
					entre sí: los Jedi y los Sith. La estructura jerárquica de la orden Jedi incluye a los maestros,
					como Obi-Wan Kenobi, Luke Skywalker y Yoda; sus aprendices o también conocidos como padawan; los
					iniciados o younglings que suelen ser menores de edad; y los caballeros, cuyo estatus progresa al de
					un maestro una vez que concluyen el entrenamiento de su respectivo aprendiz. Además de los
					anteriores, existen otros tipos de Jedi que persiguen fines específicos: por ejemplo, los
					guardianes, los centinelas y los consulares.
				</p>
				<div className="row">
					<div className="col border-danger">
						<strong>nombre</strong>
						<br />
						{detalle.name}
					</div>
					<div className="col border-danger">
						<strong>altura</strong>
						<br />
						{detalle.height}
					</div>
					<div className="col border-danger">
						<strong>genero</strong>
						<br />
						{detalle.gender}
					</div>
					<div className="col border-danger">
						<strong>dia nacimiento</strong>
						<br />
						{detalle.birth_year}
					</div>
				</div>
			</div>
		</div>
	);
};

Personajeswiews.propTypes = {
	name: propTypes.string
};
