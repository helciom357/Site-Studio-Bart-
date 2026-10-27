// Conteúdo editorial do site. Itens marcados com `placeholder: true` são
// fictícios e devem ser substituídos pelo conteúdo real do estúdio.

export type Professional = {
  slug: string;
  name: string;
  role: string;
  facts: string[];
  photos: string[];
  bio: string[];
  highlights?: { title: string; text: string }[];
};

export const TATTOO_ARTIST: Professional = {
  slug: "vinny",
  name: "Vinny Darian",
  role: "Tatuador",
  facts: ["+20 anos de profissão", "+520 clientes", "3 países"],
  photos: [`${import.meta.env.BASE_URL}images/team/vinny-1.webp`, `${import.meta.env.BASE_URL}images/team/vinny-2.webp`, `${import.meta.env.BASE_URL}images/team/vinny-3.webp`],
  bio: [
    "Vinny Darian é o artista à frente do Estúdio Bartô Tattoo. Com mais de 20 anos de experiência no Brasil e no exterior, trabalha com Comics, Fechamento, Preto e Cinza, Colorido, Fine Line, Geek, Feminino e Floral — sempre com projetos personalizados para cada cliente.",
    "Com passagens por estúdios da Suíça e de Los Angeles, desenvolveu um traço técnico, preciso e altamente detalhado. Especialista em fechamentos e projetos grandes em sessão única (8 a 10 horas), Vinny acumula premiações em convenções de tatuagem que reforçam seu domínio técnico e a qualidade do seu trabalho.",
  ],
  highlights: [
    {
      title: "Passagem por estúdios em Los Angeles",
      text: "Capital mundial do preto e cinza",
    },
    {
      title: "Experiência em estúdios na Suíça",
      text: "Mercado europeu com padrão técnico elevadíssimo",
    },
    {
      title: "Premiações em convenções de tatuagem",
      text: "Reconhecimento técnico fora do Instagram",
    },
    {
      title: "Especialista em sessões de 8–10 horas",
      text: "Projetos grandes com resultado coeso em uma única sessão",
    },
  ],
};

export const BARBERS: Professional[] = [
  {
    slug: "nicolas",
    name: "Nicolas Allyson",
    role: "Barbeiro",
    facts: ["26 anos", "8 anos de profissão"],
    photos: [`${import.meta.env.BASE_URL}images/team/nicolas-1.webp`, `${import.meta.env.BASE_URL}images/team/nicolas-2.webp`],
    bio: [
      "Minha história na barbearia começou no meu próprio bairro, onde passei a observar as barbearias não apenas como um serviço, mas também como uma oportunidade de construir meu próprio caminho e conquistar minha independência financeira.",
      "Fiz o curso de barbeiro e, com o apoio da minha família, ganhei minhas primeiras máquinas. Foi então que comecei a cortar o cabelo de pessoas conhecidas, no banheiro da minha própria casa.",
      "O que começou de forma simples, dentro de casa, se transformou em uma profissão que exerço há 8 anos. Hoje, sigo construindo minha trajetória como barbeiro, levando comigo a mesma vontade de crescer que me fez começar.",
    ],
  },
  {
    slug: "raphael",
    name: "Raphael Navero",
    role: "Barbeiro",
    facts: ["24 anos", "6 anos de profissão"],
    photos: [`${import.meta.env.BASE_URL}images/team/raphael-1.webp`, `${import.meta.env.BASE_URL}images/team/raphael-2.webp`],
    bio: [
      "Minha história na barbearia começou dentro da minha própria família. Venho de uma família que atua no ramo há mais de 20 anos e cresci acompanhando minha mãe e minha tia trabalhando com cortes. Foi convivendo com esse universo desde cedo que nasceu minha paixão pela profissão.",
      "No começo, meus irmãos e primos foram os primeiros a confiar em mim e serviram como parte importante do meu aprendizado. Foi praticando com eles que comecei a transformar aquilo que eu acompanhava dentro de casa em profissão.",
      "Hoje, olhando para trás, tenho orgulho de tudo que construí ao longo desses 6 anos. A barbearia me ensinou, me fez crescer profissionalmente e me proporcionou conhecer muitas pessoas especiais.",
      "E essa história está apenas começando.",
    ],
  },
];

export const TATTOO_STATS = [
  { value: "+20", label: "anos de experiência" },
  { value: "+200", label: "fechamentos realizados" },
  { value: "+520", label: "clientes atendidos" },
  { value: "+3", label: "países com experiência" },
];

// Frames dos vídeos do estúdio, rotulados com os estilos do Vinny.
export const PORTFOLIO = [
  { src: `${import.meta.env.BASE_URL}images/tattoo/gladiador.webp`, title: "Gladiador", style: "Fechamento" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/carpa-samurai.webp`, title: "Carpa e samurai", style: "Colorido" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/tigre-mandala.webp`, title: "Tigre e mandala", style: "Fine Line" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/magneto.webp`, title: "Magneto", style: "Comics" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/dama-vendada.webp`, title: "Dama vendada", style: "Preto e Cinza" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/flores.webp`, title: "Flores", style: "Floral" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/itachi.webp`, title: "Itachi", style: "Geek" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/braco-lettering.webp`, title: "Braço escrito", style: "Fechamento" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/mao-e-flores.webp`, title: "Mão e flores", style: "Feminino" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/lobos.webp`, title: "Lobos", style: "Fechamento" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/retrato-colorido.webp`, title: "Retrato colorido", style: "Colorido" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/sol-e-lua.webp`, title: "Sol e lua", style: "Fine Line" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/coringa.webp`, title: "Coringa", style: "Comics" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/cocar.webp`, title: "Cocar", style: "Preto e Cinza" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/onca-costas.webp`, title: "Onça nas costas", style: "Floral" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/aldebaran.webp`, title: "Aldebaran", style: "Geek" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/pra-quem-tem-fe.webp`, title: "Pra quem tem fé", style: "Preto e Cinza" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/leao-e-rosas.webp`, title: "Leão e rosas", style: "Feminino" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/leao.webp`, title: "Leão", style: "Fechamento" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/onca-florida.webp`, title: "Onça florida", style: "Fine Line" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/hera-venenosa.webp`, title: "Hera Venenosa", style: "Comics" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/cristo-e-leao.webp`, title: "Cristo e leão", style: "Preto e Cinza" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/ramo-pulso.webp`, title: "Ramo no pulso", style: "Floral" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/borboletas.webp`, title: "Borboletas", style: "Feminino" },
  { src: `${import.meta.env.BASE_URL}images/tattoo/frase-e-flores.webp`, title: "Frase e flores", style: "Floral" },
];

// Estilos do Vinny Darian, na ordem que ele passou.
export const TATTOO_STYLES = [
  {
    name: "Comics",
    color: "#c0873a",
    text: "Heróis, vilões e quadrinhos na pele, com traço marcado, contraste forte e muita personalidade.",
  },
  {
    name: "Fechamento",
    color: "#334238",
    text: "Braço, perna, peito, costas — projetos de composição que exigem visão do conjunto, em sessões longas e resultado coeso.",
  },
  {
    name: "Preto e Cinza",
    color: "#252622",
    text: "Transições suaves de preto profundo para pele limpa, com volume e luz que parecem fotografia.",
  },
  {
    name: "Colorido",
    color: "#9a4729",
    text: "Saturação que não desbota em dois anos. Exige domínio de pigmento, camadas e cicatrização.",
  },
  {
    name: "Fine Line",
    color: "#8a8f86",
    text: "Traço fino e delicado, ideal para peças menores, escritas e detalhes minimalistas.",
  },
  {
    name: "Geek",
    color: "#3f5866",
    text: "Animes, games, filmes e séries. Personagens e referências da cultura pop, fiéis ao original.",
  },
  {
    name: "Feminino",
    color: "#b4837a",
    text: "Peças delicadas e elegantes que valorizam o corpo: borboletas, flores, mãos e composições leves.",
  },
  {
    name: "Floral",
    color: "#5f725a",
    text: "Rosas, peônias e ramos — do traço fino ao preto e cinza, com composição que acompanha o corpo.",
  },
];

export const TATTOO_PROCESS = [
  {
    title: "Consulta",
    text: "Conversa por WhatsApp ou presencial. Você traz suas referências e conta sua história. Sem compromisso.",
  },
  {
    title: "Rascunho",
    text: "O projeto é criado para o seu corpo. Você vê, opina e aprova antes de marcar qualquer sessão.",
  },
  {
    title: "Sessão",
    text: "Ambiente preparado, pausas planejadas e processo transparente do início ao fim.",
  },
  {
    title: "Cuidado",
    text: "Protocolo completo de pós-tatuagem e acompanhamento da cicatrização.",
  },
];

// Fotos reais da barbearia (sem nome do corte), na ordem do carrossel.
// Fotos 05, 07, 09, 11, 12, 14 e 15 removidas a pedido do cliente (out/2026).
export const HAIRCUT_PHOTOS = ["01", "02", "03", "04", "06", "08", "10", "13"].map(
  (n) => `${import.meta.env.BASE_URL}images/cortes/corte-${n}.webp`,
);

// Tabela oficial da barbearia (sistema de agendamento do Bartô, out/2026).
// `from: true` mostra "a partir de" antes do valor.
export type BarberService = { name: string; desc: string; price: string; from?: boolean };

export const BARBER_SERVICE_GROUPS: { title: string; items: BarberService[] }[] = [
  {
    title: "Cabelo",
    items: [
      { name: "Corte masculino", desc: "Corte com higienização e secagem.", price: "R$ 85" },
      { name: "Máquina geral", desc: "Corte de cabelo com um único pente da máquina.", price: "R$ 60" },
      { name: "Acabamento (pezinho)", desc: "Acabamento do corte de cabelo.", price: "R$ 20" },
      { name: "Corte + sobrancelha", desc: "Corte de cabelo e sobrancelha.", price: "R$ 100" },
      { name: "Corte e barba", desc: "Corte clássico + barbear tradicional.", price: "R$ 155" },
      {
        name: "Hidratação + corte de cabelo",
        desc: "Repõe a umidade dos fios, previne danos e deixa o cabelo macio, brilhante e fácil de pentear.",
        price: "R$ 135",
      },
      {
        name: "Hidratação simples",
        desc: "Repõe a umidade e combate o ressecamento de cabelos ondulados, cacheados, crespos e lisos. Máscaras com D-Pantenol, óleo de oliva, óleo de rícino e manteiga de karité.",
        price: "R$ 50",
      },
      { name: "Aplicação de coloração", desc: "Aplicação de tinta e coloração.", price: "R$ 50", from: true },
      {
        name: "Corte + luzes",
        desc: "Técnica parecida com o reflexo, com mechas coloridas bem mais fininhas.",
        price: "R$ 260",
      },
      {
        name: "Corte + platinado",
        desc: "Fios descoloridos até um tom bem claro, quase branco ou cinza. Visual ousado que pede hidratação e matização para manter a cor.",
        price: "R$ 380",
      },
      {
        name: "Decapagem / descoloração",
        desc: "Remove toda a cor do cabelo, seja a natural ou a de uma coloração.",
        price: "R$ 100",
      },
      { name: "Escova botox", desc: "Botox capilar: alisa e dá brilho aos fios.", price: "R$ 120", from: true },
      {
        name: "Escova progressiva",
        desc: "Para cabelo ondulado e volumoso. Deixa os fios lisos, brilhantes e com movimento; refazer a cada três meses.",
        price: "R$ 120",
        from: true,
      },
    ],
  },
  {
    title: "Barba e bigode",
    items: [
      {
        name: "Barbear tradicional",
        desc: "Assepsia com sabonete antisséptico e creme de barbear, barba na navalha (lâminas descartáveis) e pós-barba.",
        price: "R$ 85",
      },
      {
        name: "Máquina geral e barba",
        desc: "Corte com um único pente da máquina e barba completa.",
        price: "R$ 140",
      },
      {
        name: "Cabelo + barba + sobrancelha",
        desc: "Corte, lavagem e penteado, barbear tradicional caprichado na navalha, toalhas quentes e cremes especiais.",
        price: "R$ 170",
      },
    ],
  },
  {
    title: "Sobrancelha e depilação",
    items: [
      { name: "Sobrancelha", desc: "Alinhamento da sobrancelha.", price: "R$ 20" },
      { name: "Depilação masculina — nariz", desc: "Remoção dos pelos do nariz.", price: "R$ 20" },
      { name: "Depilação masculina — orelhas", desc: "Remoção dos pelos das orelhas.", price: "R$ 20" },
    ],
  },
];

export const LASER_REMOVAL = {
  steps: [
    {
      title: "Avaliação",
      text: "Analisamos cor, profundidade, tamanho e idade da tatuagem para estimar o número de sessões.",
    },
    {
      title: "Disparos",
      text: "O laser fragmenta o pigmento em partículas minúsculas, sem cortar a pele.",
    },
    {
      title: "Eliminação",
      text: "O próprio organismo elimina as partículas aos poucos, entre uma sessão e outra.",
    },
    {
      title: "Intervalo",
      text: "As sessões acontecem a cada 45–60 dias, respeitando a recuperação da pele.",
    },
  ],
  factors: [
    "Cor do pigmento",
    "Profundidade",
    "Tamanho da área",
    "Idade da tatuagem",
    "Tipo de pele",
  ],
};

export const PEELING = {
  benefits: [
    "Controle da oleosidade",
    "Poros visivelmente menores",
    "Pele uniforme e com viço",
    "Efeito imediato — ideal antes de eventos",
    "Sem tempo de recuperação",
  ],
  steps: [
    { title: "Carbono", text: "Uma loção de carbono é aplicada e penetra nos poros." },
    {
      title: "Laser",
      text: "O laser aquece e vaporiza o carbono, levando junto impurezas e células mortas.",
    },
    { title: "Glow", text: "A pele sai limpa, uniforme e iluminada — o famoso efeito Hollywood." },
  ],
};

export const LASER_CARE = [
  "Evite sol na área tratada por pelo menos 30 dias",
  "Use protetor solar FPS 50 diariamente",
  "Não esfregue nem arranque crostas",
  "Mantenha a pele hidratada",
  "Evite academia e calor intenso nas primeiras 24h",
];
