# Arquitetura da Solução

## Decisões de arquitetura

Diante da proposta do semestre, que tem como pauta principal a contrução de uma aplicação distribuída, e levando em conta os objetivos do projeto destacados nas seções anteriores, a descrição das decisões de arquitetura apresentada abaixo busca elucidar os seguintes pontos:

    - Problema do projeto;
    - Necessidades;
    - Restrições;
    - Resolução;
    - Argumentos.


O problema arquitetural principal a ser resolvido é a construção de uma aplicação distribuída, a qual diferente das arquiteturas abordadas anteriormente funcione de forma isolada, porém com cada um de seus principais componentes trabalhando de maneira cooperativa e orquestrada.

No contexto do projeto aqui descrito, portanto teríamos alguns componentes a serem considerados para o funcionamento desejado do produto final, que são:

    - Aplicação frontend WEB;
    - Aplicação frontend mobile;
    - Aplicação backend;
    - Banco de dados;

Para garantir a operação coordenada da aplicação como um todo, mantendo, no entanto, seus componentes isolados como descrito acima, optou-se pelo uso de uma arquitetura baseada em serviços. Essa abordagem isola cada unidade ou conjunto de funcionalidades com suas devidas responsabilidades, informações e implementações. Além disso dá a liberdade de escolha nas tecnologias para construção de cada um deles, capacidade de manutenção sem afetar o todo e eventual escalabilidade. 

Uma abordagem baseada em serviços oferece diversas vantagens em comparação com uma arquiteura monolítica. No entanto os pontos que foram cruciais para optar-se pelo seu uso foram o isolamento, capacidade de desenvolvimento dividido em equipes sem uma interdependência elevada e manutenção facilitada.

A seguir, assim como nas demais seções, enfatiza-se a arquitetura da solução, compreendendo diagramas detalhados e explicações embasadas nas escolhas de cada tecnologia mencionada. O diagrama de alto nível delineia a estrutura da arquitetura da solução, identificando seus principais atores, conforme apresentado abaixo:

<br>

![Arquitetura da Solução](/docs/img/arquitetura-projeto-caridade.jpg)

<br>


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas


Na elaboração da arquitetura de um projeto, uma fase crucial é a descrição das tecnologias e ferramentas a serem empregadas em sua construção. Essa etapa é essencial, pois contextualiza e esclarece o escopo completo de desenvolvimento no qual os desenvolvedores estarão envolvidos.

Abaixo, apresentamos duas tabelas: a primeira lista as principais tecnologias empregadas no desenvolvimento da aplicação, enquanto a segunda destaca as ferramentas a serem utilizadas para o mesmo propósito.

| Linguagem/Framework  | Finalidade |
| ------------- | ------------- |
| JavaScript  | Linguagem de programação utilizada para o desenvolvimento das aplicações Frontend do projeto tanto no mobile, com a utilização do framework React Native, quanto na Web com a utilização do framework React  |
| C#  | Linguagem de programação utilizada para a codificação da aplicação Backend do projeto, juntamente com o ASP.NET e o Entity Framework  |
| ASP.NET  | Framework utilizado para construção da aplicação Backend  |
| Entity Framework | ORM utilizado para elaboração do mapeamento objeto-relacional facilitando a integração com bancos de dados utilizando ASP.NET|
| Identity | Framework utilizado para criação do fluxo de autenticação no Backend ASP.NET |
| React | Framework de desenvolvimento web utilizado para construção da aplicação WEB |
| React Native | Framework de desenvolvimento mobile utilizado para construção da aplicação móvel do projeto |
 
<br>
<br>

| Ferramenta | Finalidade |
|------------|------------|
| MySQL | Banco de dados para armazenamento dos dados necessários para funcionamento da aplicação |
| Global Giving API | Api externa utilizada para busca de dados relativos as organizações filantrópicas |
| Visual Studio / Visual Studio Code | IDEs utilizadas para o desenvolvimento da aplicação Backend e das aplicações Frontend respectivamente |

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
