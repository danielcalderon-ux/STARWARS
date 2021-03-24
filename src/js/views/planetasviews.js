import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const Planetaswiews = () => {
	const params = useParams(); // tre la informaicion de la ruta
	const { store, actions } = useContext(Context); // para poder usar la info del store
	var detalle = store.planets[params.theid];
	return (
		<div className="jumbotron jumbotron-fluid bg-dark text-white">
			<div className="container">
				<h1 className="display-4">{detalle.name} </h1>
				<p>
					Los viajes espaciales son comunes y la mayoría de los planetas que aparecen en la saga están
					afiliados a la República Galáctica, la unión democrática que rige la galaxia y cuyo gobierno,
					presidido por un canciller supremo, está formado por representantes de toda ella, elegidos o
					designados y agrupados en el llamado Senado Galáctico, ubicado en el planeta Coruscant.43​44​ En
					oposición a la República se encuentra la Confederación de Sistemas Independientes (Separatistas),
					siendo el enfrentamiento de ambas uno de los temas más importantes en la trama de las tres primeras
					películas de Star Wars.
				</p>
				<div className="row">
					<div className="col border-danger">
						<strong>nombre</strong>
						<br />
						{detalle.name}
					</div>
					<div className="col border-danger">
						<strong>clima</strong>
						<br />
						{detalle.climate}
					</div>
					<div className="col border-danger">
						<strong>poblacion</strong>
						<br />
						{detalle.population}
					</div>
					<div className="col border-danger">
						<strong>diametro</strong>
						<br />
						{detalle.diameter}
					</div>
				</div>
			</div>
		</div>
	);
};
