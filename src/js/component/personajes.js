import React, { useState, useEffect, setState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const Personajes = props => {
	const { store, actions } = useContext(Context);
	const nombre = props.nombre;

	return (
		<div className="card mx-2" style={{ width: "18rem" }}>
			<img
				src="https://as.com/meristation/imagenes/2019/12/19/noticias/1576748977_381724_1576749029_noticia_normal.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text">ALTURA: {props.height}</p>
				<p className="card-text">GENERO: {props.gender}</p>
				<p className="card-text">AÑO DE NACIMIENO: {props.birth_year}</p>

				<Link to={`/personajes/${props.id}`} className="btn btn-primary">
					Go somewhere
				</Link>

				<Link onClick={() => actions.addFavorite(nombre, "persona")}>
					<button type="button" className="btn btn-outline-info float-right">
						<i className="far fa-heart text-danger " />
					</button>
				</Link>
			</div>
		</div>
	);
};

Personajes.propTypes = {
	nombre: propTypes.string,
	height: propTypes.string,
	gender: propTypes.string,
	birth_year: propTypes.string,
	id: propTypes.number
};
