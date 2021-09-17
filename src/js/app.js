import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
	// This block will be executed once the page is loaded and ready

	const ul = document.querySelector("ul");

	async function showPokemons() {
		const fetchData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
		const data = await fetchData.json();
		const pokemons = data.results;

		// console.log(pokemons);

		pokemons.forEach((pokemon) => {
			const li = document.createElement("li");
			li.innerText = pokemon.name;

			ul.appendChild(li);
		});
	}

	showPokemons();
});
