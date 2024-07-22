document.getElementById("btn").addEventListener("click", () => {
  let pokemonName = document.getElementById("input-name").value.toLowerCase();
  fetchData(pokemonName);
  async function fetchData(pokemonName) {
    try {
      const resource = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!resource.ok) {
        throw new Error("could not fetch resource");
      }
      const data = await resource.json();
      console.log(data.sprites.front_default);
      console.log(data.name);
      document
        .getElementById("p-img")
        .setAttribute("src", data.sprites.front_default);
      document.getElementById("p-img").style.display = "block";
      document.getElementById("fig-cap").innerHTML = data.name;
    } catch (error) {
      console.error(error);
    }
  }
});

//NOTE: fetching data from API using promises

/* fetch("https://pokeapi.co/api/v2/pokemon/pikach")
  .then((resource) => {
    if (!resource.ok) {
      throw new Error("could not fetch resource");
    }
    return resource.json();
  })
  .then((data) => console.log(data.name))
  .catch((error) => console.error(error)); */

//NOTE: fetching data from API using async/await

/* fetchData();
async function fetchData() {
  try {
    const resource = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!resource.ok) {
      throw new Error("could not fetch resource");
    }
    const data = await resource.json();
    console.log(data.sprites.front_default);
    console.log(data.name);
  } catch (error) {
    console.error(error);
  }
} */
