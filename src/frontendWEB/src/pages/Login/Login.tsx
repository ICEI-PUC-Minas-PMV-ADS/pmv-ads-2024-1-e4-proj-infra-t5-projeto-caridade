import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Login() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "40px",
          padding: "60px",
        }}
      >
        <Card variant="outlined">
          <Typography variant="h5" component="h5" style={{ padding: "10px" }}>
            Entrar
          </Typography>
          <Typography
            variant="body1"
            component="h1"
            style={{ padding: "10px" }}
          >
            Endereço de E-mail
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            style={{ padding: "10px" }}
          >
            <TextField
              id="outlined-basic"
              label="email@adress.com"
              variant="outlined"
            />
          </Box>
          <Typography
            variant="body1"
            component="h1"
            style={{ padding: "10px" }}
          >
            Senha
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            style={{ padding: "10px" }}
          >
            <TextField
              id="outlined-basic"
              label="************"
              variant="outlined"
            />
          </Box>
          <Button
            sx={{ borderRadius: 40 }}
            variant="contained"
            style={{ padding: "30px" }}
          >
            Login
          </Button>
          <Button
            sx={{ borderRadius: 40 }}
            variant="contained"
            style={{ padding: "30px" }}
          >
            Esqueceu a Senha
          </Button>
          <Typography
            variant="body1"
            component="h1"
            style={{ padding: "10px", paddingTop: "60px" }}
          >
            Não possui cadastro?
          </Typography>
          <Button
            sx={{ borderRadius: 40 }}
            variant="contained"
            href="/register"
            style={{ padding: "10px" }}
          >
            Criar conta
          </Button>
        </Card>
        <div>
          <img src="" alt="teste" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
