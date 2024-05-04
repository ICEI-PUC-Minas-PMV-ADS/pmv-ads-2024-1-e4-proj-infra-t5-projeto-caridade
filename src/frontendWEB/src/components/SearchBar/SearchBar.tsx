import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";

export function SearchBar() {
  return (
    <Box display="flex" justifyContent="space-between">
      <TextField label="Encontrar projetos" fullWidth sx={{ maxWidth: 600 }} />
      <Box display="flex" gap={3}>
        <FormControl sx={{ minWidth: 130 }}>
          <InputLabel id="select-countries">Países</InputLabel>
          <Select labelId="select-countries" label="Países" />
        </FormControl>
        <FormControl sx={{ minWidth: 130 }}>
          <InputLabel id="select-projects">Temas</InputLabel>
          <Select id="select-projects" label="Temas" />
        </FormControl>
        <Button variant="contained">Buscar</Button>
      </Box>
    </Box>
  );
}
