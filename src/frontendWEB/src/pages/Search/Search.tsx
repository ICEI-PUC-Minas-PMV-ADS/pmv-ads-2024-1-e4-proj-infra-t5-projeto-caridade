import { useMemo } from "react";
import { OrganizationCard, SearchBar } from "../../components";
import charityImage from "../../assets/charity.jpeg";
import { Grid } from "@mui/material";

const ORGANIZATIONS_MOCK = [
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
  { title: "projeto 1", image: charityImage },
];
function Search() {
  const renderOrganizations = useMemo(() => {
    return ORGANIZATIONS_MOCK.map(({ title, image }) => (
      <Grid item xs={3}>
        <OrganizationCard title={title} image={image} />
      </Grid>
    ));
  }, []);

  return (
    <div>
      <SearchBar />
      <Grid container spacing={2} mt={2}>
        {renderOrganizations}
      </Grid>
    </div>
  );
}

export default Search;
