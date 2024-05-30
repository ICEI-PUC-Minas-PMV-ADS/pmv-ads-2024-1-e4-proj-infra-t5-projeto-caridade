import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useMemo, useState } from "react";
import { countries } from "./countries";
import { themes } from "./themes";

export function SearchBar({ onSubmit }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [theme, setTheme] = useState("");

  console.log({ name, country, theme });

  const countriesItems = useMemo(() => {
    return countries.map((country, index) => (
      <MenuItem value={country} key={index}>
        {country}
      </MenuItem>
    ));
  }, []);

  const themesItems = useMemo(() => {
    return themes.map((theme) => (
      <MenuItem value={theme.name} key={theme.id}>
        {theme.name}
      </MenuItem>
    ));
  }, []);

  return (
    <Box display="flex" justifyContent="space-between">
      <TextField
        label="Encontrar projetos"
        fullWidth
        sx={{ maxWidth: 600 }}
        onChange={(e) => setName(e.target.value)}
      />
      <Box display="flex" gap={3}>
        <FormControl sx={{ minWidth: 130 }}>
          <InputLabel id="select-countries">Países</InputLabel>
          <Select
            labelId="select-countries"
            label="Países"
            onChange={(e) => setCountry(e.target.value)}
          >
            {countriesItems}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 130 }}>
          <InputLabel id="select-projects">Temas</InputLabel>
          <Select
            id="select-projects"
            label="Temas"
            onChange={(e) => setTheme(e.target.value)}
          >
            {themesItems}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={() => onSubmit({ name, theme, country })}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
}
