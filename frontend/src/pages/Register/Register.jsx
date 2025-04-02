import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import {registerRequest } from "../../redux/reducers/authReducer";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    dispatch(registerRequest({ email, password }));
    // Add authentication logic here
  };

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
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, width: "100%" }}>
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                gutterBottom
              >
                Embark on you journey, become a Trainer ! Register
              </Typography>

              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                fullWidth
                label="Re-enter Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={handleRegister}
              >
                Register
              </Button>

              <Typography textAlign="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link
                  href="#"
                  onClick={() => navigate("/login")}
                  underline="hover"
                >
                  Login here
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Container>
  );
};

export default Register;
