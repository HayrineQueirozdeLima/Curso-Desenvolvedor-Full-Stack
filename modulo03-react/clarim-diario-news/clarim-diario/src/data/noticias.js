// Este arquivo funciona como um "banco de dados falso" (mock data): uma
// lista fixa de notícias, direto no código, sem precisar de backend/API.
// É uma técnica muito comum no início de um projeto front-end, para poder
// construir e testar a interface antes de existir uma API de verdade.
// Quando o backend em Spring Boot estiver pronto, essa constante poderia ser
// substituída por uma chamada fetch/axios que busca os dados reais.
export const noticias = [
  {
    id: 1, // usado nas rotas (/materia/1) e como "key" ideal em listas
    categoria: "Ameaças Urbanas",
    titulo: 'Homem-Aranha destrói viaduto e chama de "resgate"',
    resumo:
      "Prejuízo estimado em milhões. Prefeitura estuda enviar a conta ao vigilante mascarado",
    // Texto "lorem ipsum": texto de preenchimento em latim/pseudo-latim,
    // usado como placeholder até existir conteúdo real.
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deserunt lorem nostrud exercitation amet laborum laborum lorem. Ea nulla dolor esse elit ut sunt adipiscing eiusmod qui ut sed deserunt. Dolore est aliqua est qui deserunt nostrud id. Veniam qui incididunt qui eu mollit dolore do in in. Tempor laboris reprehenderit ipsum exercitation officia laborum irure. Fugiat mollit lorem ipsum veniam eu consectetur nulla ipsum elit excepteur sed. Et minim et adipiscing anim ullamco et esse ad commodo minim est sunt aliqua. Magna reprehenderit laborum mollit non laboris voluptate ullamco culpa tempor aute. Consequat elit commodo non qui ullamco ut ut occaecat ut anim reprehenderit minim qui. Ut cillum dolor commodo nisi eu ex laboris elit proident ad. Reprehenderit deserunt veniam deserunt ullamco ullamco nostrud do ut lorem. Adipiscing aliquip consectetur adipiscing aliquip ad dolor veniam ea duis et id. Do sit irure do dolor eu exercitation laborum in. Reprehenderit quis ut quis aute ut id pariatur.",
  },

  {
    id: 2,
    categoria: "Cidade",
    titulo: "Metrô da linha vermelha tem horário estendido no verão",
    resumo:
      "Prejuízo estimaddo em milhões. Prefeitura estuda enviar a conta ao vigilante mascarado",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deserunt lorem nostrud exercitation amet laborum laborum lorem. Ea nulla dolor esse elit ut sunt adipiscing eiusmod qui ut sed deserunt. Dolore est aliqua est qui deserunt nostrud id. Veniam qui incididunt qui eu mollit dolore do in in. Tempor laboris reprehenderit ipsum exercitation officia laborum irure. Fugiat mollit lorem ipsum veniam eu consectetur nulla ipsum elit excepteur sed. Et minim et adipiscing anim ullamco et esse ad commodo minim est sunt aliqua. Magna reprehenderit laborum mollit non laboris voluptate ullamco culpa tempor aute. Consequat elit commodo non qui ullamco ut ut occaecat ut anim reprehenderit minim qui. Ut cillum dolor commodo nisi eu ex laboris elit proident ad. Reprehenderit deserunt veniam deserunt ullamco ullamco nostrud do ut lorem. Adipiscing aliquip consectetur adipiscing aliquip ad dolor veniam ea duis et id. Do sit irure do dolor eu exercitation laborum in. Reprehenderit quis ut quis aute ut id pariatur.",
  },

  {
    id: 3,
    categoria: "Opinião do Editor",
    titulo: "Máscaras escondem rostos e intenções",
    resumo: "Se ele fosse herói de verdade, mostraria a cara. Simples assim.",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deserunt lorem nostrud exercitation amet laborum laborum lorem. Ea nulla dolor esse elit ut sunt adipiscing eiusmod qui ut sed deserunt. Dolore est aliqua est qui deserunt nostrud id. Veniam qui incididunt qui eu mollit dolore do in in. Tempor laboris reprehenderit ipsum exercitation officia laborum irure. Fugiat mollit lorem ipsum veniam eu consectetur nulla ipsum elit excepteur sed. Et minim et adipiscing anim ullamco et esse ad commodo minim est sunt aliqua. Magna reprehenderit laborum mollit non laboris voluptate ullamco culpa tempor aute. Consequat elit commodo non qui ullamco ut ut occaecat ut anim reprehenderit minim qui. Ut cillum dolor commodo nisi eu ex laboris elit proident ad. Reprehenderit deserunt veniam deserunt ullamco ullamco nostrud do ut lorem. Adipiscing aliquip consectetur adipiscing aliquip ad dolor veniam ea duis et id. Do sit irure do dolor eu exercitation laborum in. Reprehenderit quis ut quis aute ut id pariatur.",
  },

  {
    id: 4,
    categoria: "Esportes",
    titulo: "Eddie Brock Lesionado",
    resumo:
      "Eddie Brock, A.K.A Venon (apelido do atleta) está se consultando com Dr. Connors",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deserunt lorem nostrud exercitation amet laborum laborum lorem. Ea nulla dolor esse elit ut sunt adipiscing eiusmod qui ut sed deserunt. Dolore est aliqua est qui deserunt nostrud id. Veniam qui incididunt qui eu mollit dolore do in in. Tempor laboris reprehenderit ipsum exercitation officia laborum irure. Fugiat mollit lorem ipsum veniam eu consectetur nulla ipsum elit excepteur sed. Et minim et adipiscing anim ullamco et esse ad commodo minim est sunt aliqua. Magna reprehenderit laborum mollit non laboris voluptate ullamco culpa tempor aute. Consequat elit commodo non qui ullamco ut ut occaecat ut anim reprehenderit minim qui. Ut cillum dolor commodo nisi eu ex laboris elit proident ad. Reprehenderit deserunt veniam deserunt ullamco ullamco nostrud do ut lorem. Adipiscing aliquip consectetur adipiscing aliquip ad dolor veniam ea duis et id. Do sit irure do dolor eu exercitation laborum in. Reprehenderit quis ut quis aute ut id pariatur.",
  },
];
