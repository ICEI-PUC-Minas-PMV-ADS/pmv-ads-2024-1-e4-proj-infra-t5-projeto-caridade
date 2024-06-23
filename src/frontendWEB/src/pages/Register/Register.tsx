import { Box, Button, Card, CircularProgress, TextField, Typography } from "@mui/material";
import { useState } from "react";
import charityImage2 from "../../assets/charity2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserServices } from "../../services/UserServices/UserServices";

function Register() {
  const [ req, setReq ] = useState(false)
  const [ error, setError ] = useState("")
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("")
  const navigate = useNavigate()

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password != confirmPassword) {
      setError("Senha não estão compatíveis") 
      return
    }

    try {
      setReq(true)
      await UserServices.create({
        name,
        last_name: lastName,
        email,
        password
      })
      setReq(false)
      navigate('/')
      setError('')
    } catch (error: any) {
      setError(error.response.data.message) 
      setReq(false)
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <div       
        style={{
          display: "flex",
          gap: "40px",
          padding: "20px",
        }}
      >
        <Card 
          style={{
            display: "flex",
            width: "400px",
            flexDirection: "column",
            padding: "10px"
          }}
          variant="outlined"
        >
          <Typography variant="h5" component="h5">
            Cadastrar
          </Typography>
          <Typography variant="h6" component="h6">
            Informações de usuário
          </Typography>
          <Typography style={{ color: "red" }} component="span">
            {error && error}
          </Typography>
          <Box
            component="form"
            onSubmit={createUser}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              label="Nome" 
              id="outlined-basic" 
              variant="outlined" 
              onChange={e => setName(e.target.value)}
            />
            <TextField 
              id="outlined-basic" 
              label="Sobrenome" 
              variant="outlined" 
              onChange={e => setLastName(e.target.value)}
            />
            <TextField 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              onChange={e => setEmail(e.target.value)}
            />
            <TextField 
              id="outlined-basic" 
              label="Senha" 
              variant="outlined"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Confirmar Senha"
              type="password"
              variant="outlined"
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link to={"/login"}>Já possui conta? Login</Link>
              {req ?
              <Button  disabled variant="contained">
                <CircularProgress />
              </Button>
              :
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
              }
            </div>
          </Box>
        </Card>
        <div>
        <img
            width="160%"
            src={charityImage2}
            alt="Charity Hands"
            style={{ borderRadius: "10px" }}
            />
        </div>
      </div>
    </div>
  );
}

export default Register;
