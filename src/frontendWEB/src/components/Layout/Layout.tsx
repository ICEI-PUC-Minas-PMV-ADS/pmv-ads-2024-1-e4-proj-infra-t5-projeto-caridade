import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Box, Container } from "@mui/material";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Box height="100dvh">
      <Header />
      <Container sx={{ height: "100%", width: "100vw" }}>{children}</Container>
      <Footer />
    </Box>
  );
}
