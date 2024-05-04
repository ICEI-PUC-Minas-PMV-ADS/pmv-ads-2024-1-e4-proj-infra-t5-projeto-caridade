import { Box, Typography } from "@mui/material";

export function Institutional() {
  return (
    <Box mt={10}>
      <Typography variant="h4" color="#004E63">
        Quem somos ?
      </Typography>
      <Typography mt={4} align="justify">
        Somos estudantes do quarto período do curso de Análise e Desenvolvimento
        de Sistemas da PUC Minas, e desenvolvemos essa aplicação como requisito
        de aprovação no projeto de "Desenvolvimento de Aplicação Distribuída" do
        Eixo 4.
        <Typography mt={4} align="justify"></Typography>
        Nossa aplicação é um buscador de projetos de caridade que tem como
        objetivo auxiliar na divulgação e busca de informações relativas a
        instituições filantrópicas em âmbito global.
        <Typography mt={4} align="justify"></Typography>A documentação de
        contexto do projeto, bem como código fonte podem ser acessadas{" "}
        <span>
          <a
            target="_blank"
            href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade?tab=readme-ov-file"
          >
            neste link
          </a>
        </span>
        .
      </Typography>
    </Box>
  );
}
