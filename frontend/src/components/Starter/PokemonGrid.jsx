import { useEffect, useMemo } from 'react';
import { Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';
import usePokemon from '../../hooks/usePokemon';
import PropTypes from "prop-types";
import { fetchPokemonDataRequest } from '../../redux/reducers/pokemonReducer';
import { useDispatch } from 'react-redux';

const PokemonGrid = ({selectedStarter, setSelectedStarter}) => {
    const dispatch = useDispatch()    
    const starterPokemonIds = useMemo(() => ["1", "4", "7", "387", "390", "393", "650", "653", "656"], [])
    const { pokemonData: starterPokemonData } = usePokemon(starterPokemonIds);
    
    useEffect(() => {
        dispatch(fetchPokemonDataRequest({ pokemon_ids: starterPokemonIds }));
    }, [dispatch, starterPokemonIds]);

  return (
        <Grid2 container spacing={4}>
      {starterPokemonIds.map((pokemonId, index) => (
        <Grid2 item size={4} key={index}>
          <Card onClick={() => setSelectedStarter(pokemonId)} sx={{
        backgroundColor: pokemonId == selectedStarter ? 'primary.main' : '',
      }}
      >
            <CardMedia
              component="img"
              height="140"
              image={starterPokemonData[pokemonId]?.imageUrl}
              alt={starterPokemonData[pokemonId]?.name}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {starterPokemonData[pokemonId]?.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
      </Grid2>
  );
};

PokemonGrid.propTypes = {
    selectedStarter: PropTypes.any.isRequired,
    setSelectedStarter: PropTypes.func.isRequired
};

export default PokemonGrid;
