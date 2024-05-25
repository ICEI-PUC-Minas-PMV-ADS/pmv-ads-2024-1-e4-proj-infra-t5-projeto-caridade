import { useEffect, useState } from "react";
import axios from "axios";
import { OrganizationCard, SearchBar } from "../../components";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

function Search() {
  const [organizations, setOrganizations] = useState([]);

  async function getAllOrganizations() {
    try {
      const response = await axios("http://[::1]:4400/get-all");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOrganizations().then((response) => setOrganizations(response?.data));
  }, []);

  return (
    <div>
      <SearchBar />
      <Grid container spacing={2} mt={2}>
        {organizations.map(({ name, logoUrl, id }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
            <Card sx={{ maxWidth: 345, margin: 1, boxShadow: 5 }}>
              <CardMedia
                component="img"
                height="200px"
                image={logoUrl}
                alt={name}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "fill",
                  paddingBottom: "20%",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Search;
