import { Box, Button, Card, TextField, Typography } from "@mui/material";

function Register() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        gap: "500px",
        padding: "100px",
      }}
    >
      <Card variant="outlined">
        <Typography variant="h5" component="h5">
          Cadastrar
        </Typography>
        <Typography variant="h6" component="h6">
          Informações de usuário
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Nome" id="outlined-basic" variant="outlined" />
          <TextField id="outlined-basic" label="Sobrenome" variant="outlined" />
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
  );
}

export default Register;
