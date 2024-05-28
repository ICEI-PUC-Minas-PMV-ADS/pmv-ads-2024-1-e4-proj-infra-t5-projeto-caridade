import { useState } from "react";
import { MdClose } from "react-icons/md";
import { UserServices } from "../../services/UserServices/UserServices";
import { Box, Button, Input, Typography } from "@mui/material";

interface IProps {
  onClose(): void
  isModalOpen: boolean
}

function Modal(props: IProps) {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    await UserServices.update({
      name,
    });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ffffff",
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: 2,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        width: "400px",
        height: "300px",
        justifyContent: "center",
        gap: "10px",
        textAlign: "center",
      }}
    >
      <MdClose
        style={{
          position: "absolute",
          top: 5,
          right: 5,
        }}
        onClick={props.onClose}
      />
      <Typography variant="h6">Editar perfil</Typography>
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Salvar
      </Button>
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{ color: "red" }} 
      >
        Deletar Conta
      </Button>
    </Box>
  );
}

export default Modal;
