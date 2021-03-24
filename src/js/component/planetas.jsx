import React, { useState, useEffect, setState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	const nombre = props.nombre;

	return (
		<div className="card mx-2" style={{ width: "18rem" }}>
			<img
				src="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text">clima: {props.climate}</p>
				<p className="card-text">poplacion: {props.population}</p>
				<p className="card-text">diametro: {props.diameter}</p>
				<Link to={`/planetas/${props.id}`} className="btn btn-primary">
					Go somewhere
				</Link>
				<Link onClick={() => actions.addFavorite(nombre, "planeta")}>
					<button type="button" className="btn btn-outline-info float-right">
						<i className="far fa-heart text-danger " />
					</button>
				</Link>
			</div>
		</div>
	);
};

Planetas.propTypes = {
	nombre: propTypes.string,
	climate: propTypes.string,
	population: propTypes.string,
	diameter: propTypes.string,
	id: propTypes.number
};
