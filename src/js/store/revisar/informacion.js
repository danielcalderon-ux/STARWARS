import React from "react";
//create your first component
export class Musica extends React.Component {
	constructor() {
		super();
		this.state = {
			fetchData: [] //los datos que obtenemos
		};
	}
	componentDidMount() {
		// funcion del componente esta listo para hacer la llamada
		fetch("https://swapi.tech/api/people") // solicita informacion
			.then(response => response.json()) // es una promesa de que recivira la informacion
			.then(data => {
				//en data queda almacenada la informaion
				this.setState({ fetchData: data }); // pasa los datos a fetchdata
				//console.log(this.state.fetchData);
			});
		// data =  {id: 1, category: "game", name: "Mario Castle", url: "files/mario/songs/castle.mp3"}
		//console.log(this.fetchData); //la data que trage
	}

	// direccionurl() {
	// 	this.state.fetchData[0].url;
	// }

	render() {
		return (
			<div>
				{this.state.fetchData.map((personaje, i) => {
					// recorre todo el arrey fetchData y lo guarda en nombre

					return (
						<div className="container">
							<ol className="list-group">
								<li
									className="list-group-item"
									key={i}
									onClick={() => console.log(i)}>
									{" "}
									{personaje.name}{" "}
								</li>
							</ol>
						</div>
					);
				})}
			</div>
		);
	}
}