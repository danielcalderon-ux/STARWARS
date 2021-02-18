import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export const Personajes = props => (
	<div className="container">
		<div className="row">
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

					<Link to="/personajes/1" className="btn btn-primary">
						Go somewhere
					</Link>
					<button type="button" className="btn btn-outline-info float-right">
						<i className="far fa-heart text-danger " />
					</button>
				</div>
			</div>
		</div>
	</div>
);

Personajes.propTypes = {
	nombre: propTypes.string,
	height: propTypes.string,
	gender: propTypes.string,
	birth_year: propTypes.string
};