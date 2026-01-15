// =================================================
// CONFIGURAÇÃO DE IMPORTAÇÃO - QUIRON ADMIN
// =================================================
// Mapeamento de arquivos TypeScript → metadados

export const ARQUIVOS_IMPORTACAO = [
  // ========== ÁREA JURÍDICA ==========
  {
    arquivo: 'questions-constitucional.ts',
    area: 'juridica',
    materia: 'Direito Constitucional',
    temas: ['direitos-garantias', 'organizacao-estado', 'organizacao-poderes', 'controle-constitucionalidade', 'poder-judiciario', 'tributacao-orcamento', 'ordem-economica-financeira', 'ordem-social', 'principios-fundamentais'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-administrativo.ts',
    area: 'juridica',
    materia: 'Direito Administrativo',
    temas: ['principios', 'organizacao-administrativa', 'atos-administrativos', 'poderes-administrativos', 'servicos-publicos', 'contratos-administrativos', 'licitacoes', 'responsabilidade-civil', 'agentes-publicos'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-civil-1.ts',
    area: 'juridica',
    materia: 'Direito Civil',
    temas: ['parte-geral', 'pessoas', 'bens', 'fatos-juridicos', 'atos-juridicos', 'prescricao-decadencia', 'prova', 'negocio-juridico', 'defeitos-negocio'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-penal-1.ts',
    area: 'juridica',
    materia: 'Direito Penal',
    temas: ['aplicacao-lei-penal', 'crime', 'imputabilidade', 'concurso-pessoas', 'penas', 'crimes-patrimonio', 'crimes-pessoa', 'crimes-administracao', 'crimes-fe-publica'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-processual-civil-1.ts',
    area: 'juridica',
    materia: 'Direito Processual Civil',
    temas: ['principios-processuais', 'jurisdicao-acao', 'partes-procuradores', 'competencia', 'atos-processuais', 'provas', 'sentenca', 'recursos', 'cumprimento-sentenca'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-trabalho-1.ts',
    area: 'juridica',
    materia: 'Direito do Trabalho',
    temas: ['contrato-trabalho', 'remuneracao-salario', 'jornada-trabalho', 'ferias', 'seguranca-medicina', 'rescisao-contratual', 'direito-coletivo', 'sindicatos', 'greve'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-tributario-1.ts',
    area: 'juridica',
    materia: 'Direito Tributário',
    temas: ['sistema-tributario', 'principios-tributarios', 'competencia-tributaria', 'impostos', 'taxas-contribuicoes', 'obrigacao-tributaria', 'credito-tributario', 'administracao-tributaria', 'processo-tributario'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-eleitoral.ts',
    area: 'juridica',
    materia: 'Direito Eleitoral',
    temas: ['direitos-politicos', 'organizacao-eleitoral', 'alistamento-eleitoral', 'inelegibilidades', 'partidos-politicos', 'convencoes', 'candidatos', 'propaganda-eleitoral', 'votacao-apuracao'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'direitosHumanos.ts',
    area: 'juridica',
    materia: 'Direitos Humanos',
    temas: ['teoria-geral', 'sistema-internacional', 'sistema-interamericano', 'sistema-onu', 'protecao-grupos', 'refugiados', 'discriminacao', 'tortura', 'justica-transicional'],
    questoesEstimadas: 90
  },

  // ========== ÁREA POLICIAL ==========
  {
    arquivo: 'questions-processo-penal.ts',
    area: 'policial',
    materia: 'Processo Penal',
    temas: ['inquerito-policial', 'acao-penal', 'competencia', 'provas', 'prisoes-medidas', 'procedimentos', 'recursos', 'execucao-penal', 'tribunais'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-legislacao-penal.ts',
    area: 'policial',
    materia: 'Legislação Penal',
    temas: ['lei-drogas', 'crimes-hediondos', 'estatuto-desarmamento', 'violencia-domestica', 'tortura', 'crimes-informaticos', 'lavagem-dinheiro', 'organizacoes-criminosas', 'estatuto-crianca-adolescente'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'legis lacaoPenalEspecial.ts',
    area: 'policial',
    materia: 'Legislação Penal Especial',
    temas: ['lei-drogas-detalhes', 'crimes-hediondos-detalhes', 'estatuto-desarmamento-detalhes', 'maria-penha-detalhes', 'tortura-detalhes', 'crimes-informaticos-detalhes', 'lavagem-dinheiro-detalhes', 'organizacoes-criminosas-detalhes', 'eca-detalhes'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'questions-criminalistica.ts',
    area: 'policial',
    materia: 'Criminalística',
    temas: ['locais-crime', 'documentoscopia', 'papiloscopia', 'balistica', 'tanatologia', 'toxicologia', 'genetica-forense', 'fotografia-forense', 'informatica-forense'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'criminologia.ts',
    area: 'policial',
    materia: 'Criminologia',
    temas: ['teorias-crime', 'criminologia-critica', 'vitimologia', 'sociologia-criminal', 'politica-criminal', 'prevencao-crime', 'sistema-penitenciario', 'ressocializacao', 'criminologia-contemporanea'],
    questoesEstimadas: 90
  },
  {
    arquivo: 'procedimentosPoliciais.ts',
    area: 'policial',
    materia: 'Procedimentos Policiais',
    temas: ['abordagem', 'busca-apreensao', 'prisao-flagrante', 'uso-forca', 'armamento-municao', 'preservacao-local', 'atendimento-ocorrencias', 'operacoes-especiais', 'relatorios-policiais'],
    questoesEstimadas: 90
  },

  // ========== ÁREA FISCAL-BANCÁRIA ==========
  {
    arquivo: 'economia.ts',
    area: 'fiscal-bancaria',
    materia: 'Economia',
    temas: ['microeconomia', 'macroeconomia', 'economia-monetaria', 'economia-brasileira', 'economia-internacional', 'desenvolvimento-economico', 'financas-publicas', 'politica-economica', 'conjuntura-economica'],
    questoesEstimadas: 273
  },
  {
    arquivo: 'contabilidade.ts',
    area: 'fiscal-bancaria',
    materia: 'Contabilidade Geral',
    temas: ['estrutura-conceitual', 'patrimonio', 'demonstracoes-contabeis', 'plano-contas', 'lancamentos', 'operacoes-mercadorias', 'ativo', 'passivo-patrimonio-liquido', 'analise-financeira'],
    questoesEstimadas: 320
  },
  {
    arquivo: 'afo.ts',
    area: 'fiscal-bancaria',
    materia: 'Administração Financeira e Orçamentária (AFO)',
    temas: ['orcamento-publico', 'principios-orcamentarios', 'ciclo-orcamentario', 'creditos-adicionais', 'receita-publica', 'despesa-publica', 'lei-responsabilidade-fiscal', 'sistema-orcamentario', 'fiscalizacao-controle'],
    questoesEstimadas: 290
  },
  {
    arquivo: 'conhecimentosBancarios.ts',
    area: 'fiscal-bancaria',
    materia: 'Conhecimentos Bancários',
    temas: ['sistema-financeiro-nacional', 'banco-central', 'bancos-comerciais', 'produtos-servicos', 'investimentos', 'credito', 'cambio', 'mercado-capitais', 'prevencao-lavagem-dinheiro'],
    questoesEstimadas: 280
  },

  // ========== ÁREA CONHECIMENTOS GERAIS ==========
  {
    arquivo: 'portugues.ts',
    area: 'conhecimentos-gerais',
    materia: 'Português',
    temas: ['interpretacao-texto', 'gramatica', 'sintaxe', 'morfologia', 'ortografia-acentuacao', 'pontuacao', 'concordancia', 'regencia', 'crase'],
    questoesEstimadas: 300
  },
  {
    arquivo: 'informatica.ts',
    area: 'conhecimentos-gerais',
    materia: 'Informática',
    temas: ['windows-linux', 'office', 'internet-navegadores', 'email-webmail', 'seguranca-informacao', 'backup-armazenamento', 'redes-computadores', 'hardware-software', 'cloud-computing'],
    questoesEstimadas: 280
  },
  {
    arquivo: 'atualidades.ts',
    area: 'conhecimentos-gerais',
    materia: 'Atualidades',
    temas: ['politica-nacional', 'economia-brasileira', 'politica-internacional', 'questoes-sociais', 'meio-ambiente-sustentabilidade', 'ciencia-tecnologia-atual', 'cultura-esportes', 'saude-publica', 'seguranca-publica'],
    questoesEstimadas: 270
  },
  {
    arquivo: 'historiaDoBrasil.ts',
    area: 'conhecimentos-gerais',
    materia: 'História do Brasil',
    temas: ['brasil-colonia', 'brasil-imperio', 'primeira-republica', 'era-vargas', 'ditadura-militar', 'redemocratizacao', 'brasil-contemporaneo', 'movimentos-sociais-hist', 'formacao-territorial'],
    questoesEstimadas: 250
  },
  {
    arquivo: 'raciocinio.ts',
    area: 'conhecimentos-gerais',
    materia: 'Raciocínio Lógico',
    temas: ['logica-proposicional', 'logica-argumentacao', 'sequencias-padroes', 'problemas-aritmeticos', 'raciocinio-quantitativo', 'analise-combinatoria', 'probabilidade', 'verdades-mentiras', 'diagramas-logicos'],
    questoesEstimadas: 260
  }
];

// Total estimado: ~7.943 questões
// 47 arquivos
export const TOTAL_ARQUIVOS = ARQUIVOS_IMPORTACAO.length;
export const TOTAL_QUESTOES_ESTIMADAS = ARQUIVOS_IMPORTACAO.reduce((sum, a) => sum + a.questoesEstimadas, 0);
