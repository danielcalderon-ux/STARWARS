import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const Planetaswiews = () => {
	const params = useParams(); // tre la informaicion de la ruta
	const { store, actions } = useContext(Context); // para poder usar la info del store
	var detalle = store.planets[params.theid];
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{detalle.name}</h1>
				<p className="lead">
					This is a modified jumbotron that occupies the entire horizontal space of its parent.
				</p>
			</div>
		</div>
	);
};
