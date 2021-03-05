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
				fetch("https://3000-plum-tarantula-a9fa19dw.ws-us03.gitpod.io/personajes/")
					.then(res => res.json())
					.then(data => {
						setStore({ peoples: data });
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
				const url = "https://3000-plum-tarantula-a9fa19dw.ws-us03.gitpod.io/planetas";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},
			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
				console.log(store.favorites);
			}
		}
	};
};

export default getState;
