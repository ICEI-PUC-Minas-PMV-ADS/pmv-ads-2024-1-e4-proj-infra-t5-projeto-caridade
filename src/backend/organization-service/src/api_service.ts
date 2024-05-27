import axios from 'axios';

// Configurando uma instância do Axios com base URL e cabeçalhos padrão
const api = axios.create({
  baseURL: 'https://api.globalgiving.org/', // Substitua pela sua API base
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer a6d2b676-00e7-47de-9d87-ccec8b424104`,
    // Adicione outros cabeçalhos conforme necessário
  },
});

// Exportando a instância para ser usada em outras partes do aplicativo
export default api;
