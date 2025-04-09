import { useSelector } from 'react-redux';

const usePokemon = (pokemonIds) => {
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);
    const pokemonDataDict = pokemonIds.reduce((acc, id) => {
        acc[id] = pokemons[id] || null;
        return acc;
    }, {});
    
  return { pokemonData: pokemonDataDict, loading, error };
};

export default usePokemon;