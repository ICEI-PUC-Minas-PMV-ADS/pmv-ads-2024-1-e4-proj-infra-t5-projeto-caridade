import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import charityImage from "../../assets/charity.jpeg";

function Home() {
  return (
    <Box display="flex">
      <Box height="100%">
        <Typography variant="h4" color="#004e63">
          Encontre projetos que te engajam!
        </Typography>
        <Typography variant="h6" mt={2}>
          Buscador de projetos de caridade que tem como objetivo auxiliar na
          divulgação e busca de informações relativas a instituições
          filantrópicas em âmbito global.
        </Typography>
        <Box mt={3}>
          <Link to="/register">
            <Button variant="contained">Criar conta</Button>
          </Link>
        </Box>
      </Box>
      <Box>
        <img
          src={charityImage}
          alt="Charity Hands"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
}

export default Home;
