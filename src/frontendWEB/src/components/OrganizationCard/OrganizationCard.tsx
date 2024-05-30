import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function OrganizationCard({
  title = "Lorem Ipsum",
  image,
  onClick,
  id,
}: {
  title: string;
  image: string;
  onClick?: () => void;
  id?: string;
}) {
  return (
    <Link to={`/organization?organization_id=${id}`}>
      <Box maxWidth={300} onClick={onClick}>
        <img
          src={image}
          alt="Charity Hands"
          style={{ borderRadius: "10px", objectFit: "cover" }}
          width="100%"
          height="100%"
        />
        <Typography variant="h6" align="right">
          {title}
        </Typography>
      </Box>
    </Link>
  );
}
