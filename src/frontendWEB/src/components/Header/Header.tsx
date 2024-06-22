import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { UserServices } from "../../services/UserServices/UserServices";

interface IProps {
  openEditProfile(): void
} 

function Header(props: IProps) {
  const { isUserLogged, loggedUser, user } = useUserContext()

  const logout = async () => {
    UserServices.logout()
  }

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
        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              sx={{ borderRadius: 30 }}
              variant="contained"
              style={{ padding: "10px", display: "flex", gap: 5 }}
              onClick={() => props.openEditProfile()}
            >
              <FaUserAlt /> {user?.name}
            </Button>
            <Button
              sx={{ borderRadius: 30 }}
              variant="contained"
              style={{ padding: "10px", display: "flex", gap: 5 }}
              onClick={() => logout()}
            >
              logout
            </Button>
          </div>
        </div>
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
