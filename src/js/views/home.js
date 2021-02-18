import React, { useState, useEffect, setState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";
import "../../styles/home.scss";
import { Planetas } from "../component/planetas.jsx";
import { Personajes } from "../component/personajes.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.loadPeople();
	// }, []);
	return (
		<div>
			<h1>PERSONAJES</h1>
			<div className="align-items-center text-center mt5 mx-2">
				<div className="d-flex flex-row p-4 mx-2" style={{ overflow: "auto" }}>
					<div className="row">
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
			<h1>PLANETAS</h1>
			<div className="align-items-center text-center mt5">
				<div className="d-flex flex-row p-4" style={{ overflow: "auto" }}>
					<div className="row">
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
	);
};
