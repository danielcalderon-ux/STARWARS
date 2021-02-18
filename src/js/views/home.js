import React, { useState, useEffect, setState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Planetas } from "../component/planetas.jsx";
import { Personajes } from "../component/personajes.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
	}, []);
	//console.log(store.planets);
	return (
		<div>
			<h1>PERSONAJES</h1>
			<div className="container">
				<div className="align-items-center text-center">
					<div style={{ overflow: "auto" }}>
						<div className="row">
							<div className="d-flex">
								{store.peoples.map((people, i) => {
									return (
										<div key={i}>
											<Personajes
												nombre={people.name}
												height={people.height}
												gender={people.gender}
												birth_year={people.birth_year}
											/>
										</div>
									);
								})}
								;
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<h1>PLANETAS</h1>
			<div className="container">
				<div className="align-items-center text-center">
					<div style={{ overflow: "auto" }}>
						<div className="row">
							<div className="d-flex">
								{store.planets.map((planet, i) => {
									return (
										<div key={i}>
											<Planetas nombre={planet.name} />
										</div>
									);
								})}
								;
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
