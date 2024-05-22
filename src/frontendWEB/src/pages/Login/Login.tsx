import { Box, Button, Card, TextField, Typography } from "@mui/material";
import charityImage2 from "../../assets/charity2.jpg";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "left",
        gap: "40px",
        padding:"20px",
      }}
    >
      <Card variant="outlined" style={{width: "400px", padding: "10px"}}>
        <Typography variant="h5" component="h5" style={{ padding: "10px" }}>
          Entrar
        </Typography>
        <Typography variant="body1" component="h1" style={{ padding: "20px" }}>
          Endereço de E-mail
        </Typography>
        <Box display="flex" flexDirection="column" style={{ padding: "10px" }}>
          <TextField
            id="outlined-basic"
            label="email@adress.com"
            variant="outlined"
            />
        </Box>
        <Typography variant="body1" component="h1" style={{ padding: "20px" }}>
          Senha
        </Typography>
        <Box display="flex" flexDirection="column" style={{ padding: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
            />
        </Box>
        <Button
          sx={{ borderRadius: 30 }}
          variant="contained"
          style={{ padding: "10px",  }}
          >
          Login
        </Button>
        <Button
          sx={{ borderRadius: 30 }}
          variant="contained"
          style={{ padding: "10px" }}
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
          sx={{ borderRadius: 30 }}
          variant="contained"
          href="/register"
          style={{ padding: "10px" }}
          >
          Criar conta
        </Button>
      </Card>
      <div >
        <img
            width="160%"
            src={charityImage2}
            alt="Charity Hands"
            style={{ borderRadius: "10px" }}
            />
      </div>
    </div>
  );
}
export default Login;
