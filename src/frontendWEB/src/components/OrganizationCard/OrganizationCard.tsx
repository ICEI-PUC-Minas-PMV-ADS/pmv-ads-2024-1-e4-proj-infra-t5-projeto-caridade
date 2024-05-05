import { Box, Typography } from "@mui/material";

export function OrganizationCard({
  title = "Lorem Ipsum",
  image,
  onClick,
}: {
  title: string;
  image: string;
  onClick?: () => void;
}) {
  return (
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
  );
}
