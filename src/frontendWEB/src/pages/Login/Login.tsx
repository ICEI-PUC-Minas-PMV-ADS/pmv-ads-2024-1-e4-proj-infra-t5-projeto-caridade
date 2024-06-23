import { Box, Button, Card, TextField, Typography } from "@mui/material";
import charityImage2 from "../../assets/charity2.jpg";
import { useState } from "react";
import { UserServices } from "../../services/UserServices/UserServices";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

function Login() {
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ req, setReq ] = useState(false)
  const navigate = useNavigate()
  const { loggedUser } = useUserContext()

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setReq(true)
    try {
      await UserServices.login({
        email,
        password,
      })
      loggedUser()
      setReq(false)
      navigate('/')
    } catch (error: any) {
      setReq(false)
    }
  } 

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "left",
        gap: "40px",
        padding:"20px",
      }}
    >
      <Box
        component="form"
        onSubmit={signIn}>    
        <Card variant="outlined" style={{width: "400px", padding: "10px"}}>
          <Typography variant="h5" component="h5" style={{ padding: "10px" }}>
            Entrar
          </Typography>
          <Typography variant="body1" component="h1" style={{ padding: "20px" }}>
            Endereço de E-mail
          </Typography>
          <Box 
          display="flex" flexDirection="column" style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic"
              label="email@adress.com"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              />
          </Box>
          {req ?
          <Button
            sx={{ borderRadius: 30 }}
            variant="contained"
            style={{ padding: "10px",  }}
            type="submit"
            disabled
          >
            Login
          </Button>
          :
          <Button
            sx={{ borderRadius: 30 }}
            variant="contained"
            style={{ padding: "10px",  }}
            type="submit"
            >
            Login
          </Button>
          }
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
            type="contained"
            href="/register"
            style={{ padding: "10px" }}
            >
            Criar conta
          </Button>
        </Card>
      </Box>
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
