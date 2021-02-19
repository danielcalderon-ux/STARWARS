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
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{detalle.name} </h1>
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
