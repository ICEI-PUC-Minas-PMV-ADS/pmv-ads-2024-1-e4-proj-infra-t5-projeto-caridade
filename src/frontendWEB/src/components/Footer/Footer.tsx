import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={4}
      p={2}
      borderTop="solid 1px"
      // position=""
    >
      <Link to="/institutional">
        <p>Quem somos?</p>
      </Link>
      <p>Todos os direitos reservados</p>
    </Box>
  );
}

export default Footer;
