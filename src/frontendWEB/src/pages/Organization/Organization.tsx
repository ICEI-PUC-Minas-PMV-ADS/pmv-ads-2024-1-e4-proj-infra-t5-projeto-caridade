import { Box, Typography } from "@mui/material";
import { useQueryParams } from "../../hooks";
import { organization } from "../../services/api";
import { useEffect, useState } from "react";

interface Organization {
  organization: {
    activeProjects: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    countries: { country: string[] };
    country: string;
    ein: string;
    id: number;
    iso3166CountryCode: string;
    logoUrl: string;
    mission: string;
    name: string;
    postal: string;
    state: string;
    themes: { theme: string[] };
    totalProjects: number;
    url: string;
  }
}


function Organization() {
  const [data, setData] = useState<Organization>();
  const params = useQueryParams();
  const organizationId = params.get("organization_id");

  const getOrganization = async () => {
    const response = await organization.get<Organization>(`/get-by-id/${organizationId!}`);
    console.log(response);
    setData(response.data)
  }

  useEffect(() => {
    getOrganization()
  },[])
  

  return (
    <Box display="flex">
      <Box alignItems="center" display="flex" height="100%" gap={5}>
        <div>
          <Typography variant="h3" color="#004e63">
            {data?.organization.name}
          </Typography>
          <Box>
            <img
              width="400px"
              src={data?.organization.logoUrl}
              alt="Projeto1"
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </div>
        <Typography variant="h6" mt={2} align="justify">
          {data?.organization.mission}
        </Typography>
      </Box>
    </Box>
  );
}

export default Organization;
