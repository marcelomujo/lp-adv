import heroAdvogadoImg from '../assets/images/hero_advogado_socio_1794595960580.jpg';
import advogadaTributariaImg from '../assets/images/advogada_tributaria_1794595960993.jpg';
import advogadoContenciosoImg from '../assets/images/advogado_contencioso_1794595962131.jpg';
import advogadaSucessoesImg from '../assets/images/advogada_sucessoes_1794595962734.jpg';
import escritorioReuniaoImg from '../assets/images/escritorio_reuniao_1794595963136.jpg';
import escritorioJusticaImg from '../assets/images/escritorio_justica_1794595963493.jpg';
import artigoCorporativoImg from '../assets/images/artigo_corporativo_1794595964566.jpg';
import artigoPatrimonioImg from '../assets/images/artigo_patrimonio_1794595964572.jpg';

export const OFFICE_IMAGES = {
  heroPartner: heroAdvogadoImg,
  boardroom: escritorioReuniaoImg,
  justiceScales: escritorioJusticaImg,
};

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  iconName: string;
  fullOverview: string;
  services: string[];
  documentsRequired: string[];
  preventiveFocus: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  oab: string;
  education: string;
  specialties: string[];
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const INSTITUTIONAL_DATA = {
  name: "Valença & Alencar Advogados",
  legalEntity: "Valença & Alencar Sociedade de Advogados",
  oabSocietyNumber: "OAB/SP nº 28.412",
  phoneDisplay: "(11) 3280-9400",
  phoneRaw: "+551132809400",
  whatsappDisplay: "(11) 98452-1080",
  whatsappRaw: "5511984521080",
  whatsappDefaultMsg: "Olá. Gostaria de solicitar um atendimento institucional com a equipe de Valença & Alencar Advogados.",
  email: "contato@valenca.adv.br",
  hours: "Segunda a Sexta-feira, das 08h30 às 18h30",
  headquarters: {
    city: "São Paulo - SP",
    address: "Av. Brigadeiro Faria Lima, 3477 - 14º andar",
    neighborhood: "Itaim Bibi",
    cep: "04538-133",
    googleMapsQuery: "Av. Brigadeiro Faria Lima, 3477, Itaim Bibi, São Paulo - SP",
  },
  branch: {
    city: "Brasília - DF",
    address: "Setor Bancário Sul (SBS), Quadra 02, Bloco E - Edifício Prime, Sala 804",
    neighborhood: "Asa Sul",
    cep: "70070-120",
    googleMapsQuery: "SBS Quadra 2, Bloco E, Edificio Prime, Brasilia - DF",
  },
  oabEthicsNotice: "Este ambiente digital possui caráter estritamente informativo e institucional, em estrita observância ao Estatuto da Advocacia e da OAB (Lei 8.906/1994), ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não realizamos promessas de resultado ou captação indevida de clientela."
};

export const INDICATORS = [
  {
    value: "+18 Anos",
    label: "Tradição Jurídica",
    description: "Atuação contínua e sólida no contencioso e consultivo estratégico."
  },
  {
    value: "9 Áreas",
    label: "Prática Integrada",
    description: "Equipes multidisciplinares com foco em soluções de alta complexidade."
  },
  {
    value: "2 Sedes",
    label: "São Paulo & Brasília",
    description: "Presença física nos principais centros econômico e jurisdicional do país."
  },
  {
    value: "100% Ética",
    label: "Conformidade OAB",
    description: "Atendimento pautado pelo Provimento 205/2021 e absoluto sigilo profissional."
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "direito-empresarial",
    number: "01",
    title: "Direito Empresarial & Societário",
    shortDescription: "Assessoria estratégica na estruturação de sociedades, acordos de sócios, governança corporativa, fusões, aquisições e resolução de conflitos societários.",
    iconName: "Briefcase",
    fullOverview: "Apoiamos empresas, fundos e investidores em todas as fases do ciclo de negócios, desde a constituição até reestruturações complexas e operações de M&A. Nosso trabalho prioriza a blindagem de riscos e a continuidade das atividades empresariais.",
    services: [
      "Constituição e reestruturação de sociedades (LTDA, S/A, Holdings)",
      "Elaboração de acordos de sócios e acionistas",
      "Auditoria jurídica (Due Diligence) para fusões e aquisições",
      "Implementação de programas de Governança Corporativa",
      "Dissolução parcial de sociedades e apuração de haveres"
    ],
    documentsRequired: [
      "Contrato Social ou Estatuto consolidado e alterações",
      "Acordos parassociais vigentes",
      "Balanços patrimoniais e DRE dos últimos 3 exercícios",
      "Organograma societário atualizado"
    ],
    preventiveFocus: "Diagnóstico precoce de divergências societárias e estruturação contratual rigorosa para evitar litígios prolongados."
  },
  {
    id: "direito-civil-contratos",
    number: "02",
    title: "Direito Civil & Contratual Estratégico",
    shortDescription: "Elaboração, revisão minuciosa e negociação de contratos complexos, além de representação técnica em disputas cíveis patrimoniais e obrigacionais.",
    iconName: "Scale",
    fullOverview: "Atuação focada no equilíbrio econômico-financeiro dos negócios e na proteção patrimonial de pessoas físicas e jurídicas. Atuamos tanto no contencioso cível estratégico quanto na consultoria preventiva.",
    services: [
      "Redação e negociação de contratos nacionais e internacionais",
      "Ações de cobrança, execução e recuperação de créditos de alta monta",
      "Ações indenizatórias por responsabilidade civil contratual e extracontratual",
      "Mediação e arbitragem em conflitos patrimoniais",
      "Revisão e repactuação de cláusulas contratuais em cenários imprevistos"
    ],
    documentsRequired: [
      "Instrumento contratual completo e seus aditivos",
      "Notificações extrajudiciais e trocas de correspondência formal",
      "Comprovantes de cumprimento de obrigações e pagamentos",
      "Laudos ou pareceres técnicos correlatos"
    ],
    preventiveFocus: "Cláusulas de resolução célere de conflitos, garantias reais bem estruturadas e previsibilidade de penalidades."
  },
  {
    id: "familia-sucessoes",
    number: "03",
    title: "Família & Planejamento Sucessório",
    shortDescription: "Condução humanizada, técnica e discreta de inventários judiciais e extrajudiciais, partilhas de bens, divórcios e estruturação de holdings familiares.",
    iconName: "Users",
    fullOverview: "Tratamos as demandas do Direito de Família e Sucessões com a delicadeza e o rigor ético necessários. Nosso objetivo primordial é a preservação do patrimônio familiar e a pacificação de interesses entre herdeiros.",
    services: [
      "Planejamento sucessório e constituição de holdings patrimoniais familiares",
      "Inventários judiciais e extrajudiciais em cartório",
      "Elaboração de testamentos, doações com cláusulas restritivas e usufruto",
      "Pactos antenupciais e contratos de convivência em união estável",
      "Divórcios consensuais e litigiosos com partilha de ativos de alta complexidade"
    ],
    documentsRequired: [
      "Certidões de nascimento, casamento ou óbito atualizadas",
      "Matrículas atualizadas dos imóveis e extratos de contas/aplicações",
      "Contratos sociais de eventuais participações societárias",
      "Escrituras públicas e testamentos previamente lavrados"
    ],
    preventiveFocus: "Transição intergeracional programada, minimizando custos fiscais (ITCMD) e prevenindo disputas judiciais desgastantes."
  },
  {
    id: "direito-imobiliario",
    number: "04",
    title: "Direito Imobiliário & Negócios Urbanos",
    shortDescription: "Segurança jurídica integral em compra, venda, locação comercial atípica (Built to Suit), incorporações e regularizações fundiárias urbanas e rurais.",
    iconName: "Building2",
    fullOverview: "Ampla experiência na estruturação de negócios imobiliários, assessoria a incorporadoras, investidores e proprietários. Asseguramos a higidez de títulos e mitigamos riscos de evicção ou constrições.",
    services: [
      "Due Diligence imobiliária minuciosa para aquisição e alienação de imóveis",
      "Contratos de locação comercial, residencial e Built to Suit (BTS)",
      "Estruturação jurídica de incorporações imobiliárias e loteamentos",
      "Ações possessórias, renovatórias de locação e revisionais de aluguel",
      "Usucapião judicial e extrajudicial e regularização perante cartórios de registro"
    ],
    documentsRequired: [
      "Matrícula do imóvel com certidão de ônus e ações reipersecutórias",
      "Certidões negativas dos proprietários atuais e antecessores",
      "Projetos aprovados e alvarás municipais (quando aplicável)",
      "Instrumento particular de compromisso de compra e venda"
    ],
    preventiveFocus: "Levantamento prévio exaustivo de riscos civis, fiscais e trabalhistas para blindar adquirentes de boa-fé."
  },
  {
    id: "direito-trabalhista",
    number: "05",
    title: "Direito do Trabalho & Sindical Patronal",
    shortDescription: "Defesa e consultoria para empresas, com foco em auditoria trabalhista preventiva, negociações sindicais e gestão técnica do passivo laboral.",
    iconName: "FileSpreadsheet",
    fullOverview: "Atuação corporativa com foco na adequação às normas trabalhistas, acordos coletivos e jurisprudência dos Tribunais Regionais do Trabalho e do TST. Reduzimos riscos de contingências judiciais.",
    services: [
      "Auditoria preventiva de rotinas trabalhistas e conformidade com a CLT",
      "Assessoria em negociações coletivas com sindicatos da categoria",
      "Contratos de trabalho executivos, vesting e planos de stock options",
      "Defesa estratégica em reclamatórias trabalhistas individuais e coletivas",
      "Acompanhamento de fiscalizações do MTE e inquéritos civis do MPT"
    ],
    documentsRequired: [
      "Acordos e Convenções Coletivas de Trabalho aplicáveis",
      "Cartões de ponto, recibos de pagamento e contratos individuais",
      "Programas de saúde ocupacional (PGR, PCMSO, LTCAT)",
      "Notificação da petição inicial ou intimação do órgão fiscalizador"
    ],
    preventiveFocus: "Políticas internas claras, compliance trabalhista e uniformização de procedimentos para anular pontos de atrito."
  },
  {
    id: "direito-tributario",
    number: "06",
    title: "Direito Tributário & Planejamento Fiscal",
    shortDescription: "Consultoria tributária estratégica, recuperação legítima de créditos, defesa em autos de infração e acompanhamento de impactos da Reforma Tributária.",
    iconName: "Landmark",
    fullOverview: "Análise profunda da legislação fiscal federal, estadual e municipal. Atuamos com extrema segurança técnica perante a Receita Federal, CARF, Secretarias de Fazenda estaduais e Tribunais Superiores.",
    services: [
      "Planejamento tributário preventivo e diagnóstico de oportunidades fiscais",
      "Defesa em autos de infração nas esferas administrativa e judicial",
      "Ações anulatórias de débito fiscal e mandados de segurança tributários",
      "Assessoria na transição para o novo modelo da Reforma Tributária (IBS/CBS)",
      "Obtenção de regimes especiais de tributação e parcelamentos estratégicos"
    ],
    documentsRequired: [
      "Autos de infração ou notificações de lançamento fiscal",
      "Certidões de regularidade fiscal (CND / CPDEN)",
      "Documentos fiscais e escriturações (SPED Fiscal, ECF, EFD)",
      "Contratos objeto de autuação ou questionamento tributário"
    ],
    preventiveFocus: "Interpretação jurisprudencial consolidada dos Tribunais Superiores para evitar contingências surpresa."
  },
  {
    id: "direito-consumidor",
    number: "07",
    title: "Direito do Consumidor Especializado",
    shortDescription: "Consultoria preventiva para relações de consumo complexas, adequação aos parâmetros do CDC e defesa em litígios de alto valor ou coletivos.",
    iconName: "ShieldCheck",
    fullOverview: "Equilíbrio e segurança jurídica nas relações consumeristas. Atuamos na adequação de canais de atendimento, termos de uso, políticas de garantia e defesa em processos administrativos junto ao PROCON e Ministério Público.",
    services: [
      "Revisão técnica de termos de serviço, contratos de adesão e políticas de privacidade",
      "Defesa em ações civis públicas e procedimentos administrativos nos PROCONs",
      "Consultoria para e-commerces e plataformas digitais segundo as normas do CDC",
      "Gestão estratégica de contencioso de massa qualificado",
      "Elaboração de programas de conformidade consumerista e boas práticas"
    ],
    documentsRequired: [
      "Instrumentos contratuais de contratação ou termos de uso vigentes",
      "Registros de SAC, canais de ouvidoria e trocas de e-mail",
      "Notificação ou ato sancionatório de órgãos de defesa do consumidor",
      "Relatórios de atendimento ou histórico de ocorrências"
    ],
    preventiveFocus: "Transparência na comunicação institucional e clareza informativa para evitar penalidades e ações coletivas."
  },
  {
    id: "penal-economico",
    number: "08",
    title: "Direito Penal Econômico & Compliance",
    shortDescription: "Atuação técnica e sigilosa em delitos contra a ordem tributária, sistema financeiro, lavagem de capitais e estruturação de programas de integridade corporativa.",
    iconName: "Gavel",
    fullOverview: "Defesa técnica de pessoas físicas e jurídicas em procedimentos investigatórios e ações penais econômicas, com observância estrita às garantias fundamentais e ao devido processo legal.",
    services: [
      "Defesa em inquéritos policiais e ações penais na Justiça Federal e Estadual",
      "Investigação corporativa interna e auditoria de integridade (Compliance)",
      "Adequação às diretrizes da Lei Anticorrupção (Lei 12.846/2013)",
      "Atuação em crimes contra a ordem econômica, tributária e meio ambiente",
      "Assistência e pareceres técnicos a conselhos de administração e diretorias"
    ],
    documentsRequired: [
      "Cópia integral do inquérito policial ou do processo judicial",
      "Intimações ou notificações recebidas de órgãos persecutórios",
      "Documentos fiscais, contábeis ou bancários vinculados à apuração",
      "Regulamentos internos e códigos de ética da pessoa jurídica"
    ],
    preventiveFocus: "Cultura de integridade interna e controles contábeis rigorosos para prevenir e mitigar responsabilidades penais dos administradores."
  },
  {
    id: "direito-previdenciario",
    number: "09",
    title: "Direito Previdenciário & Regime Geral",
    shortDescription: "Planejamento previdenciário técnico para profissionais e empresários, contagem de tempo de contribuição e consultoria para Regimes Próprios e Complementares.",
    iconName: "BookOpenCheck",
    fullOverview: "Análise atuarial e jurídica detalhada para a identificação do momento ideal e da regra de transição mais vantajosa para aposentadorias de executivos, médicos, engenheiros e empresários.",
    services: [
      "Planejamento Previdenciário personalizado com simulação de cenários pós-Reforma",
      "Averbação de tempo de contribuição especial (insalubridade e periculosidade)",
      "Concessão e revisão técnica de benefícios no INSS e Regimes Próprios (RPPS)",
      "Consultoria em previdência complementar fechada e aberta",
      "Defesa em processos administrativos de cobrança ou revisão pelo INSS"
    ],
    documentsRequired: [
      "Extrato Previdenciário CNIS completo e detalhado",
      "Carteiras de Trabalho (CTPS) e carnês de recolhimento como contribuinte",
      "Perfil Profissiográfico Previdenciário (PPP) e laudos LTCAT (se aplicável)",
      "Certidões de Tempo de Contribuição (CTC) de outros regimes"
    ],
    preventiveFocus: "Planejamento financeiro-previdenciário antecipado para evitar prejuízos decorrentes de regras de transição desfavoráveis."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "marcelo-valenca",
    name: "Dr. Marcelo Valença",
    role: "Sócio Fundador & Coordenador Geral",
    oab: "OAB/SP 184.290 | OAB/DF 42.115",
    education: "Doutor em Direito Comercial pela USP · Especialista em Governança Corporativa pela FGV Direito SP",
    specialties: ["Direito Empresarial", "M&A", "Governança Corporativa", "Contratos Estratégicos"],
    bio: "Com mais de duas décadas dedicadas ao direito empresarial e à assessoria de grupos econômicos, Dr. Marcelo Valença lidera o escritório com foco na prevenção de riscos patrimoniais e no rigor técnico. Membro de comissões especializadas do IASP e autor de artigos sobre governança corporativa.",
    image: heroAdvogadoImg,
    email: "marcelo.valenca@valenca.adv.br",
    linkedin: "https://linkedin.com"
  },
  {
    id: "beatriz-alencar",
    name: "Dra. Beatriz Alencar",
    role: "Sócia Coordenadora de Direito Tributário",
    oab: "OAB/SP 210.543 | OAB/DF 54.120",
    education: "Mestre em Direito Tributário pela PUC-SP · Bacharel em Direito pela Universidade de Brasília (UnB)",
    specialties: ["Direito Tributário", "Planejamento Fiscal", "Reforma Tributária", "Contencioso Administrativo/CARF"],
    bio: "Dra. Beatriz Alencar coordena a área tributária do escritório, com atuação destacada em São Paulo e Brasília. Possui sólida experiência na defesa perante o CARF e na modelagem de estratégias de eficiência fiscal para empresas de médio e grande porte, sempre pautada pela segurança jurídica.",
    image: advogadaTributariaImg,
    email: "beatriz.alencar@valenca.adv.br",
    linkedin: "https://linkedin.com"
  },
  {
    id: "rodrigo-castilho",
    name: "Dr. Rodrigo F. Castilho",
    role: "Sócio de Direito Civil & Contencioso Estratégico",
    oab: "OAB/SP 245.889",
    education: "Pós-graduado em Direito Civil e Processo Civil pela Escola Paulista da Magistratura (EPM) · Graduado pela USP",
    specialties: ["Contencioso Cível Estratégico", "Direito Imobiliário", "Arbitragem", "Recuperação de Créditos"],
    bio: "Especialista na condução de litígios de alta complexidade nos Tribunais de Justiça e Tribunais Superiores (STJ e STF). Dr. Rodrigo Castilho é reconhecido pela precisão na redação de peças processuais e sustentação oral perante os colegiados.",
    image: advogadoContenciosoImg,
    email: "rodrigo.castilho@valenca.adv.br",
    linkedin: "https://linkedin.com"
  },
  {
    id: "camila-mendonca",
    name: "Dra. Camila Mendonça Siqueira",
    role: "Sócia de Família, Sucessões & Gestão Patrimonial",
    oab: "OAB/SP 267.310",
    education: "Especialista em Direito das Sucessões e Planejamento Patrimonial pela FGV Direito SP · Mediadora Certificada",
    specialties: ["Planejamento Sucessório", "Holdings Familiares", "Inventários Complexos", "Mediação Familiar"],
    bio: "Dra. Camila atua na estruturação sucessória de famílias empresárias, aliando profundo conhecimento do direito sucessório a métodos modernos de autocomposição e conciliação, preservando o patrimônio e os laços afetivos.",
    image: advogadaSucessoesImg,
    email: "camila.mendonca@valenca.adv.br",
    linkedin: "https://linkedin.com"
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Primeiro Contato & Triagem Inicial",
    description: "Recepção institucional da consulta através de nossos canais oficiais, com levantamento preliminar do objeto e conferência de conflito de interesses."
  },
  {
    step: "02",
    title: "Diagnóstico & Compreensão da Demanda",
    description: "Reunião confidencial (presencial em nossas sedes ou por videoconferência segura) para o detalhamento dos fatos e alinhamento dos objetivos do cliente."
  },
  {
    step: "03",
    title: "Análise Documental & Levantamento Técnico",
    description: "Exame minucioso da documentação, contratos, registros públicos e precedentes jurisprudenciais consolidados dos Tribunais Superiores."
  },
  {
    step: "04",
    title: "Parecer Estratégico & Plano de Ação",
    description: "Apresentação formal de relatório detalhando as alternativas jurídicas viáveis, riscos mapeados, prazos estimados e proposta de honorários nos moldes da OAB."
  },
  {
    step: "05",
    title: "Acompanhamento Contínuo & Relatórios Transparentes",
    description: "Condução rigorosa da medida acordada, com fornecimento de relatórios periódicos de andamento e disponibilidade permanente do sócio responsável."
  }
];

export const LEGAL_ARTICLES: Article[] = [
  {
    id: "reforma-tributaria-impactos-pme",
    title: "Reforma Tributária e seus Reflexos Contratuais: O que sua Empresa Precisa Rever",
    category: "Direito Tributário",
    readTime: "5 min de leitura",
    date: "28 de Outubro de 2026",
    author: "Dra. Beatriz Alencar",
    image: artigoCorporativoImg,
    imageAlt: "Executivos e consultoria jurídica analisando cláusulas contratuais e impactos tributários",
    summary: "Uma análise dos reflexos da substituição de PIS/Cofins, IPI, ICMS e ISS pelos novos tributos (IBS e CBS) nas cláusulas de reajuste e repasse de preços em contratos de prestação de serviços continuados.",
    content: [
      "A implementação do Imposto sobre Bens e Serviços (IBS) e da Contribuição sobre Bens e Serviços (CBS) demanda uma revisão minuciosa de instrumentos contratuais vigentes, em especial contratos de fornecimento e prestação de serviços com prazo superior a 24 meses.",
      "As cláusulas que regulam a carga tributária incidente e eventual repasse de aumentos imprevistos de alíquota precisam ser expressamente calibradas para evitar onerosidade excessiva ou litígios em torno do equilíbrio econômico-financeiro.",
      "Recomendamos que a diretoria jurídica e financeira realize um mapeamento das compras e vendas, auditando a elasticidade de preços frente aos novos regimes de creditamento financeiro integral."
    ],
    keyTakeaways: [
      "Necessidade de revisão preventiva das cláusulas de alocação de risco tributário.",
      "Adaptação dos sistemas emissores e parametrização do crédito financeiro de IBS/CBS.",
      "Importância de fixar mecanismos contratuais claros de renegociação amigável."
    ]
  },
  {
    id: "planejamento-sucessorio-holding-familiar",
    title: "Planejamento Sucessório via Holding Familiar: Vantagens Jurídicas e Mitigação de Conflitos",
    category: "Família & Sucessões",
    readTime: "6 min de leitura",
    date: "14 de Outubro de 2026",
    author: "Dra. Camila Mendonça Siqueira",
    image: escritorioJusticaImg,
    imageAlt: "Balança da justiça, livros jurídicos clássicos e caneta-tinteiro sobre mesa de escritório",
    summary: "Como a estruturação societária de bens imóveis e participações empresariais em vida protege o patrimônio contra litígios desgastantes e otimiza a sucessão familiar com transparência.",
    content: [
      "O processo de inventário tradicional no Brasil pode se estender por anos e acarretar custos expressivos com custas judiciais, certidões e incidência progressiva do ITCMD. O planejamento sucessório estruturado permite organizar a transmissão em vida.",
      "Por meio da doação de quotas com reserva de usufruto vitalício e cláusulas protetivas (incomunicabilidade, impenhorabilidade, inalienabilidade e reversão), os patriarcas mantêm o controle total e a administração dos bens enquanto vivos.",
      "Ademais, a elaboração de um Acordo de Sócios robusto define com precisão as regras de entrada de genros e noras, poderes de voto e liquidação de quotas, evitando o ingresso de terceiros na sociedade da família."
    ],
    keyTakeaways: [
      "Manutenção da gestão e dos rendimentos pelos patriarcas através de usufruto.",
      "Prevenção eficaz de inventários conflituosos e bloqueio de ativos.",
      "Economia tributária legítima respeitando a legislação de cada estado da federação."
    ]
  },
  {
    id: "resolucao-conflitos-societarios-prevencao",
    title: "Governança Corporativa e Prevenção de Dissoluções Societárias Traumáticas",
    category: "Direito Empresarial",
    readTime: "7 min de leitura",
    date: "02 de Setembro de 2026",
    author: "Dr. Marcelo Valença",
    image: escritorioReuniaoImg,
    imageAlt: "Sala de reuniões executiva de escritório de advocacia em São Paulo",
    summary: "As melhores práticas na redação de cláusulas de Shotgun, Tag Along, Drag Along e mecanismos de apuração de haveres para resguardar a estabilidade e o valor de mercado da sociedade.",
    content: [
      "Divergências na visão estratégica entre sócios fundadores ou investidores são naturais em empresas em crescimento. Todavia, a ausência de um Acordo de Sócios meticuloso pode transformar desavenças operacionais em uma paralisia corporativa completa.",
      "A inclusão de cláusulas contratuais de desempate e mecanismos de compra e venda compulsória confere liquidez e segurança jurídica para a saída amigável de um dos sócios, sem afetar as operações diárias perante clientes, fornecedores e bancos.",
      "A apuração de haveres pelo fluxo de caixa descontado, quando previamente convencionada pelas partes, previne perícias judiciais morosas e avaliações desproporcionais."
    ],
    keyTakeaways: [
      "Acordo de Sócios registrado como ferramenta de governança indispensável.",
      "Previsão contratual de critérios de avaliação da empresa (Valuation).",
      "Cláusulas de mediação prévia antes de qualquer medida judicial."
    ]
  },
  {
    id: "seguranca-juridica-contratos-imobiliarios",
    title: "A Importância da Due Diligence Imobiliária na Aquisição de Ativos Corporativos",
    category: "Direito Imobiliário",
    readTime: "5 min de leitura",
    date: "19 de Agosto de 2026",
    author: "Dr. Rodrigo F. Castilho",
    image: artigoPatrimonioImg,
    imageAlt: "Edifícios corporativos modernos na região da Avenida Faria Lima ao entardecer",
    summary: "Os passos essenciais de auditoria jurídica de certidões cíveis, fiscais e trabalhistas para afastar o risco de fraude contra credores ou evicção na compra de imóveis comerciais.",
    content: [
      "A aquisição de um imóvel de expressivo valor não se resume à análise da matrícula do Cartório de Registro de Imóveis. O princípio da concentração dos atos na matrícula sofre exceções relevantes na jurisprudência trabalhista e tributária.",
      "A auditoria jurídica (Due Diligence) completa examina o histórico de todos os proprietários dos últimos 10 a 20 anos, identificando processos judiciais em curso que possam caracterizar fraude à execução.",
      "Com a consolidação das certidões e análise contratual de riscos, o comprador obtém a comprovação irrefutável de sua boa-fé, blindando a aquisição de qualquer constrição futura."
    ],
    keyTakeaways: [
      "Auditoria jurídica extensiva de antecessores e pessoas jurídicas coligadas.",
      "Verificação de passivos ambientais e restrições urbanísticas municipais.",
      "Garantia de segurança máxima para investimentos patrimoniais de longo prazo."
    ]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Como funciona a primeira consulta com o escritório?",
    answer: "A primeira consulta é conduzida por um dos sócios ou advogados especialistas da área temática correspondente. Realizamos uma sessão diagnóstica com duração média de 60 minutos, na qual compreendemos a demanda, analisamos a documentação prévia enviada e formulamos os caminhos jurídicos cabíveis. O atendimento pode ser presencial em nossas sedes em São Paulo ou Brasília, ou via videoconferência segura para clientes em outros estados e no exterior."
  },
  {
    question: "O escritório atua em outras cidades e estados além de São Paulo e Brasília?",
    answer: "Sim. Em razão da digitalização integral do Poder Judiciário brasileiro (PJe, e-SAJ, Projudi) e das plataformas dos Tribunais Superiores (STJ e STF), realizamos assessoria jurídica consultiva e representação processual em todo o território nacional. Mantemos infraestrutura técnica segura para atendimento a distância com a mesma proximidade e dedicação prestada em nossas sedes."
  },
  {
    question: "Quais documentos devo providenciar antes da reunião inicial?",
    answer: "Para maximizar a precisão do diagnóstico, recomendamos disponibilizar previamente contratos pertinentes, comprovantes de notificações, certidões ou cópia do processo existente (caso já esteja em trâmite). Ao solicitar o agendamento através de nossos canais, nossa equipe fornecerá um checklist objetivo de acordo com a matéria de sua demanda."
  },
  {
    question: "Como são fixados os honorários advocatícios do escritório?",
    answer: "Os honorários são estabelecidos com total transparência e rigor ético, em conformidade com o Código de Ética e Disciplina da OAB e com a Tabela de Honorários da OAB/SP e OAB/DF. Podem ser estruturados por valor fixo institucional (pro labore), mensal para assessoria jurídica continuada (retainer fee), ou com componente de êxito estritamente condicionado aos limites éticos permitidos pelo Provimento 205/2021. Toda contratação é formalizada por instrumento escrito prévio."
  },
  {
    question: "Como é garantido o sigilo profissional e a proteção de dados (LGPD)?",
    answer: "O sigilo das informações confiadas ao advogado é um dever legal inderrogável previsto no Estatuto da Advocacia (Art. 7º, XIX, Lei 8.906/94). Além do sigilo profissional, todos os nossos sistemas, servidores em nuvem e arquivos físicos operam com rigorosa conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), com criptografia de ponta a ponta e controle restrito de acesso aos documentos do cliente."
  },
  {
    question: "Como o cliente acompanha o andamento de suas demandas?",
    answer: "Prezamos pela transparência contínua. Nossos clientes recebem relatórios periódicos em linguagem clara sobre cada movimentação relevante, prazos processuais e decisões judiciais. Além disso, os advogados responsáveis pela pasta permanecem diretamente acessíveis por e-mail, telefone institucional e WhatsApp corporativo durante o horário de expediente."
  }
];
