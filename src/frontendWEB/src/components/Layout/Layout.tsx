import { ReactNode, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Box, Container } from "@mui/material";
import Modal from "../Modal";

export function Layout({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openEditProfile = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <Box height="100dvh">
      <Header openEditProfile={openEditProfile} />
      <Container sx={{ height: "100%", padding: 8 }}>{children}</Container>
      {isModalOpen &&
        <Modal isModalOpen={isModalOpen} onClose={closeModal}/>
      }
      <Footer />
    </Box>
  );
}
