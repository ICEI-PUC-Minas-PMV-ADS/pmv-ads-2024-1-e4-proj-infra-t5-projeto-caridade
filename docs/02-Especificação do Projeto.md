# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

As **_personas_** que ilustram nosso público-alvo são mostradas nas tabelas a seguir:
| `USUÁRIO` |`MOTIVAÇÕES`| `FRUSTRAÇÕES` | `HOBBIES / APLICATIVOS` |
|----------------------|--------------------|--------------------|------------------------|
|<img width="140" alt="car" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade/assets/108704270/833f7d4b-e5c7-4c40-baaf-fb24851e64c3">
**Carlos Silva,** **35 anos.** Advogado. | Atua Pro Bono para pessoas carentes. |Dificuldade em encontrar novas organizações que atuem em áreas de seu interesse | Ler livros, viajar / Linkedin, Instagram, Facebook, WhatsApp |
|||||
|<img width="140" alt="mar" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade/assets/108704270/7251c8d4-18ee-4a03-be53-2a6d7cfcf627">
**Marcia Ferreira,** **62 anos.** Aposentada. Trabalhava como professora de ensino religioso| Engajar em projetos focados na educação de jovens e adultos.| Dificuldade em lidar com a grande quantidade de informações ao fazer pesquisas no Google a respeito de projetos sociais.| Ler, costura, crochê / WhatsApp, Eduk |
|||||
|<img width="151" alt="mat" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade/assets/108704270/4f518403-7924-48e1-9396-87a69686c67b">
**Matheus Alves ,** **19 anos.** estudante de análise e desenvolvimento de sistemas. | Tem interesse em causas relacionadas à preservação do meio ambiente e defesa de animais|  Não encontrou aplicações que o mantivesse engajado na procura de projetos sociais;	Péssima experiencia de usuário em outras aplicações com propostas similares. |Sair com amigos, jogar online, passar tempo com sua família / Instagram, Steam, TikTok|
|||||
|<img width="194" alt="ana" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade/assets/108704270/c17234fd-0213-4de4-b600-ab4951ff430e">
**Ana Luiza,** **27 anos.** Psicóloga clínica.| Especializar-se no atendimento de mulheres vítimas de qualquer tipo de violência. | Não encontrou aplicações que pudessem catalogar de forma fácil e intuitiva os projetos sociais mais relevantes aos seus interesses. |Assistir filmes, Ir à academia, Praticar yoga / Linkedin, Instagram, Facebook, Pinterest|


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Carlos Silva        | Encontrar projetos sociais         | Obter informações a respeito do escopo de atuação das instituições     |
|Carlos Silva        | Ter um catálogo atualizado dos projetos que me interessam               | Para fazer doações periódicas |
|Marcia Ferreira     | Ter uma lista de instituições de caridade de seu interesse em um só lugar         | Obter informações a respeito da atuação dessas instituições |
|Matheus Alves       | Favoritar projetos sociais focados em meio ambiente              | Encontrar com facilidade as páginas das organizações |
|Matheus Alves       | Poder deixar comentários a respeito das organizações e seus projetos    | Ter notas/resumos a respeito da organização que está ajudando     |
|Ana Luiza           | Saber quanto doou para cada instituição           | Ter um panorama de quais instituições ajudou com mais ou menos frequência |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, foram observadas as necessidades dos usuários bem como características técnicas relevantes à disponibilidade do sistema
### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O usuário pode se cadastrar, fazer login no sistema, e editar informações | ALTA | 
|RF-002| O usuário pode pesquisar por organizações/projetos sociais de acordo com critérios estabelecidos  | ALTA |
|RF-003| O usuário pode favoritar organizações/projetos sociais | ALTA |
|RF-004| Usuário terá acesso às organizações favoritadas em sua página inicial de perfil | ALTA |
|RF-005| O usuário pode clicar em cards com “imagem da organização” favoritada para acessar informações e a página da organização  | ALTA |
|RF-006| Usuário pode registrar a quantidade doada para determinada instituição  | BAIXA |
|RF-007| Usuário verá uma “barra de progresso” indicando o valor doado para cada instituição favoritada por ele  | BAIXA |
|RF-008| Usuário pode acrescentar “comentários” na página da instituição favoritada  | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser publicada em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku)  | ALTA | 
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel  |  ALTA | 
|RNF-003| A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade   |  MÉDIA | 
|RNF-004| A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  |  ALTA | 
|RNF-005| A aplicação deve ser desenvolvida com layout simples, organizado e intuitivo |  ALTA | 
|RNF-006| A aplicação deve se comunicar com um banco de dados para salvar informações cadastrais do usuário  |  ALTA | 
|RNF-007| O sistema deve ter alta disponibilidade  |  MÉDIA | 
|RNF-008| A aplicação deve se comunicar com um banco de dados para salvar informações dos favoritos e valores doados para cada organização |  MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo |
|02| O aplicativo deve ser desenvolvido a partir de uma abordagem arquitetural distribuída  |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho  |


## Diagrama de Casos de Uso

![Diagrama](img/Diagrama-de-uso.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

![Matriz](img/matriz.png)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

<img width="1000" alt="gantchart" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade/assets/108704270/2bfa6962-e10e-4171-8435-4c376bcf2846">


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados.

<img width="1257" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade/assets/108704270/469171e6-f9bb-4786-a343-225832ffe0b1">


## Gestão de Orçamento

<img width="576" alt="orçamento" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-caridade/assets/108704270/324145f2-6555-4055-81eb-7668294db212">

