import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

interface IProps {
  openEditProfile(): void
} 

function Header(props: IProps) {
  const { isUserLogged, loggedUser } = useUserContext()

  useEffect(() => {
    loggedUser()
  },[])

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
        {isUserLogged ? 
          <Button
            sx={{ borderRadius: 30 }}
            variant="contained"
            style={{ padding: "10px", display: "flex", gap: 5 }}
            onClick={() => props.openEditProfile()}
          >
            <FaUserAlt /> name
          </Button>
          :
          <Link to="/login">
            <Button variant="contained">Login</Button>
          </Link>
        }
        <Link to="/search">
          <BsSearch />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
