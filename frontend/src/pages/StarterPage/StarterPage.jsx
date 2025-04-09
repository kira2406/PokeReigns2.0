import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PokemonGrid from "../../components/Starter/PokemonGrid";

const StarterPage = () => {

  const [trainerName, setTrainerName] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [nameError, setNameError] = useState("");
  const [selectedStarter, setSelectedStarter] = useState(null)

  console.log("selectedStarter", selectedStarter)

  const generateTrainerId = () => {
    const id = `TRN-${Math.floor(10000000 + Math.random() * 90000000)}`;
    setTrainerId(id);
  };

  const handleSubmitButton = () => {
    // add the starter pokemon to the user
  }

  const handleNameChange = (e) => {
    const value = e.target.value;

    // Allow only alphanumerics and spaces
    const validFormat = /^[A-Za-z0-9\s]*$/;
    // Must contain at least one alphabet
    const containsAlpha = /[A-Za-z]/;

    let errorMessage = "";

    if (!validFormat.test(value)) {
      errorMessage = "Only letters, numbers, and spaces are allowed.";
    } else if (value && !containsAlpha.test(value)) {
      errorMessage = "Name must include at least one letter (A-Z).";
    } else if (value && value.length < 8) {
      errorMessage = "Name must be exactly 8 characters long.";
    }

    setTrainerName(value);
    setNameError(errorMessage);
  };

  const displaySubmitButton = trainerId && trainerName && selectedStarter

  return (
    <Card
      sx={{
        maxWidth: "90vw",
        margin: "auto",
        marginTop: 8,
        padding: 2,
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Box sx={{ p: 4 }}>
          <Grid2 container spacing={2}>
            <Grid2 item size={3}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h4" component="div" gutterBottom>
                  Hi Trainer !
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Create your Trainer Profile
                </Typography>
                <TextField
                  label="Trainer Name"
                  value={trainerName}
                  onChange={handleNameChange}
                  error={Boolean(nameError)}
                  helperText={nameError || ""}
                  fullWidth
                  slotProps={{
                    helperText: {
                      sx: {
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  onClick={generateTrainerId}
                  disabled={!trainerName || Boolean(nameError)}
                >
                  Generate Trainer ID
                </Button>
                {trainerId && (
                  <Typography variant="body1" mt={2}>
                    Your Trainer ID: <strong>{trainerId}</strong>
                  </Typography>
                )}
              </Box>
            </Grid2>
            <Grid2 item size={1}></Grid2>

            <Grid2 item size={8}>
              <Typography variant="h6" mb={2}>
                Choose Your Starter Pokémon
              </Typography>
              <PokemonGrid selectedStarter={selectedStarter} setSelectedStarter={setSelectedStarter}/>
            </Grid2>
          </Grid2>
        </Box>
      </CardContent>
      {displaySubmitButton && <CardActions
        sx={{
          justifyContent: 'center',
          padding: 1, 
        }}
      >
        <Button variant="contained" size="large" color="primary" onClick={handleSubmitButton} sx={{p:2}}>
          Begin your journey
        </Button>
      </CardActions>
}
    </Card>
  );
};

export default StarterPage;
