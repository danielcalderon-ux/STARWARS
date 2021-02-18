const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			favorites: []
		},
		actions: {
			// loadPeople: async () => {
			// 	const url = "https://swapi.dev/api/people";
			// 	const response = await fetch(url);
			// 	const data = await response.json();
			// 	console.log(data.results);

			// 	setStore({ peoples: data.results });
			// },
			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => {
						setStore({ peoples: data.results });
					});
			},
			// loadPlanet: () => {
			// 	fetch("https://swapi.dev/api/planets")
			// 		.then(res => res.json())
			// 		.then(data => {
			// 			setStore({ planets: data.results });
			// 		});
			// }
			loadPlanet: async () => {
				const url = "https://www.swapi.tech/api/planets";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			}
		}
	};
};
export default getState;
