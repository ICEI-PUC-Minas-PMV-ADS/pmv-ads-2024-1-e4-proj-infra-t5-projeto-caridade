import { Box, Button, Typography } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      borderBottom="solid 1px"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h4" color="#004e63">
          Charity Finder
        </Typography>
      </Link>
      <Box display="flex" flexDirection="row" alignItems="center" gap={4}>
        <Link to="/login">
          <Button variant="contained">Login</Button>
        </Link>
        <Link to="/search">
          <BsSearch />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
