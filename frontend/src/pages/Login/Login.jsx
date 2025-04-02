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
import { loginRequest } from "../../redux/reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    dispatch(loginRequest({ email, password }));
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
                Welcome Back Trainer ! Login
              </Typography>

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

              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={handleLogin}
              >
                Login
              </Button>

              <Typography textAlign="center" sx={{ mt: 2 }}>
                Don&apos;t have an account?{" "}
                <Link
                  href="#"
                  onClick={() => navigate("/register")}
                  underline="hover"
                >
                  Register here
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Container>
  );
};

export default Login;
