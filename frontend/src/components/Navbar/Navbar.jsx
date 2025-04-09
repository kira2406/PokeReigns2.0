import { Box, Button, Grid2, Typography } from "@mui/material"

const Navbar = () => {
  return (
    <Box sx={{padding: 2}}>
      <Grid2 container alignItems="center" sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Grid2 item xs={12} sm={4} md={4}>
          <Typography variant="h2" fontWeight="bold">
            PokeReigns
          </Typography>
        </Grid2>

        <Grid2 item xs={12} sm={8} md={8} >
          <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 3}}>
            <Button>Home</Button>
            <Button>Friends</Button>
            <Button>Maps</Button>
            <Button>Battles</Button>
            <Button>Pokemons</Button>
            <Button>Account</Button>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Navbar