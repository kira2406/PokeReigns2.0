import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          pt: 10,
          pb: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">
          <Link
            component="button"
            onClick={() => navigate("/")}
            sx={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}
          >
            PokeReigns
          </Link>
        </Typography>
      </Box>
      <Grid2 container spacing={2} alignItems="center">
        <Grid2 item xs={12} md={6}>
          <Box sx={{ pt: 5, pr: 5 }}>
            <Typography variant="body">
              Enter a whole new world of pokemon trainers
            </Typography>
          </Box>
          <Box sx={{ pt: 5, pr: 5 }}>
            <Typography variant="body">
              Capture, train and compete against other trainers
            </Typography>
          </Box>
          <Box sx={{ pt: 5, pr: 5 }}>
            <Typography variant="body">
              have you got what it takes to be the best trainer?
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "start", gap: 3, mt: 10 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/login")}
            >
              Play Now
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Box>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Pikachu"
              style={{ maxWidth: "70%", height: "auto", borderRadius: "10px" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Landing;
