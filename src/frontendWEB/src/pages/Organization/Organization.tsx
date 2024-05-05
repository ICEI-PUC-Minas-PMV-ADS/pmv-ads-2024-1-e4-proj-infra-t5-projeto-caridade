import { Box, Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import projeto1Image from "../../assets/projeto1.jpeg";

function Organization() {
  const { postId } = useParams();

  return (
    <Box display="flex">
      <Box alignItems="center" display="flex" height="100%" gap={5}>
        <div>
          <Typography variant="h3" color="#004e63">
            Projeto 1
          </Typography>
          <Box>
            <img
              width="400px"
              src={projeto1Image}
              alt="Projeto1"
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </div>
        <Typography variant="h6" mt={2} align="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi pariatur.
        </Typography>
      </Box>
    </Box>
  );
}

export default Organization;
