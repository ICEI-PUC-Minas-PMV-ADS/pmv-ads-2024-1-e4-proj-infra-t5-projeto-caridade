import { Box, Typography } from "@mui/material";
import { useFetch, useQueryParams } from "../../hooks";

function Organization() {
  const params = useQueryParams();
  const organizationId = params.get("organization_id");

  const { data: organizationData } = useFetch({
    url: `/get-by-id/${organizationId}`,
  });

  if (!organizationData) return <>loading...</>;

  return (
    <Box display="flex">
      <Box alignItems="center" display="flex" height="100%" gap={5}>
        <div>
          <Typography variant="h3" color="#004e63">
            {organizationData.organization.name}
          </Typography>
          <Box>
            <img
              width="400px"
              src={organizationData.organization.logoUrl}
              alt="Projeto1"
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </div>
        <Typography variant="h6" mt={2} align="justify">
          {organizationData.organization.mission}
        </Typography>
      </Box>
    </Box>
  );
}

export default Organization;
