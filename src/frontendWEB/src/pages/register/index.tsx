import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Register() {
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
          <Typography variant="h5" component="h5">
            Cadastrar
          </Typography>
          <Typography variant="h6" component="h6">
            Informações de usuário
          </Typography>
          <Box display="flex" flexDirection="column">
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Sobrenome"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Confirmar Senha"
              variant="outlined"
            />
          </Box>
          <Button sx={{ borderRadius: 40 }} variant="contained">
            Cadastrar
          </Button>
          <Button sx={{ borderRadius: 40 }} variant="contained">
            Cancelar
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

export default Register;
