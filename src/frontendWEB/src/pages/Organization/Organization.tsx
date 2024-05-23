import { Box, Typography } from "@mui/material";
import { useQueryParams } from "../../hooks";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function Organization() {
  const params = useQueryParams();
  const organizationId = params.get("organization_id");

  const [organization, setOrganization] = useState();

  async function getAllOrganizations() {
    try {
      const response = await api(`/get-by-id/${organizationId}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOrganizations().then((response) =>
      setOrganization(response?.data.organization)
    );
  }, []);

  if (!organization) return <>loading...</>;

  return (
    <Box display="flex">
      <Box alignItems="center" display="flex" height="100%" gap={5}>
        <div>
          <Typography variant="h3" color="#004e63">
            {organization.name}
          </Typography>
          <Box>
            <img
              width="400px"
              src={organization.logoUrl}
              alt="Projeto1"
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </div>
        <Typography variant="h6" mt={2} align="justify">
          {organization.mission}
        </Typography>
      </Box>
    </Box>
  );
}

export default Organization;
