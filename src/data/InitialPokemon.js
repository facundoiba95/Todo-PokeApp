export const InitialPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`+ getRandomIntInclusive(1,900))
    const json = await res.json();
    return json;
  } 
export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }