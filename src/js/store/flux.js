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
			loadPlanet: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
					});
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
				deleteFavorite: id => {
					//Este id es el id del Favorito
					const store = getStore();
					const newFavorites = store.favorites.filter(item => item.id !== id); //id del favorito con el id de cada favorito de mi lista
					setStore({ favorites: [...newFavorites] });
					const actions = getActions();
					actions.deleteFavorites(id);
				};
			}
		}
	};
};

export default getState;
