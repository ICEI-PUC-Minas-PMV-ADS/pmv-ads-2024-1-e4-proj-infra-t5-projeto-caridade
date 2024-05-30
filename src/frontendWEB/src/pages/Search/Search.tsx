import { SearchBar } from "../../components";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks";

function Search() {
  const { data: organizations, isPending } = useFetch({ url: "/get-all" });

  if (isPending) return <>loading...</>;

  return (
    <div>
      <SearchBar />
      <Grid container spacing={2} mt={2}>
        {organizations &&
          organizations.map(({ name, logoUrl, id }) => (
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
                  <Link to={`/organization?organization_id=${id}`}>
                    <Button variant="outlined" size="small">
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Search;
