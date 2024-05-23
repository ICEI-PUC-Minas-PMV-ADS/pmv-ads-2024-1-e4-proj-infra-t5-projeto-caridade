import { useEffect, useState } from "react";
import axios from "axios";
import { OrganizationCard, SearchBar } from "../../components";
import { Grid } from "@mui/material";

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
          <Grid item xs={3}>
            <OrganizationCard title={name} image={logoUrl} id={id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Search;
