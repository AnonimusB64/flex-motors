export const oficina = {
  nome: 'Centro Automotivo Flex Motors',
  telefone: '(61) 3629-4005',
  whatsapp: '556199028787',
  endereco: 'Avenida 15 de Junho, Quadra 09, Lote 18, Loja 1, Valparaizo II, Valparaíso de Goiás - GO, CEP 72870-109',
  horario: [
    { dia: 'Segunda a sexta', hora: '9h às 17h' },
    { dia: 'Sábado', hora: '9h às 13h' },
    { dia: 'Domingos e feriados', hora: 'Fechado' },
  ],
};

export const diferenciais = [
  { icone: 'tempo', titulo: 'Mais de 14 anos', descricao: 'Experiência no cuidado e na manutenção de veículos.' },
  { icone: 'cambio', titulo: 'Câmbio automático', descricao: 'Diagnóstico e manutenção preventiva e corretiva.' },
  { icone: 'multimarcas', titulo: 'Mecânica multimarcas', descricao: 'Atendimento a veículos nacionais e importados.' },
  { icone: 'scanner', titulo: 'Diagnóstico eletrônico', descricao: 'Leitura técnica para orientar a avaliação do veículo.' },
  { icone: 'transparencia', titulo: 'Orçamento transparente', descricao: 'Explicação clara dos serviços recomendados.' },
  { icone: 'qualidade', titulo: 'Compromisso com qualidade', descricao: 'Cuidado com segurança e durabilidade em cada etapa.' },
  { icone: 'avaliacao', titulo: 'Avaliação responsável', descricao: 'Cada veículo é avaliado conforme modelo e necessidade.' },
];

export const servicos = {
  cambio: [
    { icone: 'scanner', titulo: 'Diagnóstico de câmbio automático', descricao: 'Avaliação dos sintomas e leitura eletrônica da transmissão.' },
    { icone: 'cambio', titulo: 'Reparo e manutenção', descricao: 'Manutenção preventiva e corretiva de transmissões automáticas.' },
    { icone: 'engrenagem', titulo: 'Câmbio CVT e automatizado', descricao: 'Avaliação de sistemas CVT e automatizados conforme o veículo.' },
    { icone: 'oleo', titulo: 'Fluido de transmissão', descricao: 'Verificação e troca do fluido conforme especificação do fabricante.' },
    { icone: 'alerta', titulo: 'Ruídos, trancos e falhas', descricao: 'Investigação de ruídos, patinação, demora ao engatar e alertas.' },
    { icone: 'check', titulo: 'Manutenção preventiva', descricao: 'Cuidados preventivos para apoiar o funcionamento da transmissão.' },
  ],
  geral: [
    { icone: 'revisao', titulo: 'Revisão preventiva e corretiva', descricao: 'Inspeção dos principais sistemas e itens de manutenção.' },
    { icone: 'motor', titulo: 'Motor e componentes', descricao: 'Avaliação de componentes e funcionamento do motor.' },
    { icone: 'suspensao', titulo: 'Suspensão e amortecedores', descricao: 'Verificação de componentes de suspensão e estabilidade.' },
    { icone: 'freio', titulo: 'Freios', descricao: 'Inspeção dos componentes do sistema de frenagem.' },
    { icone: 'scanner', titulo: 'Injeção eletrônica', descricao: 'Diagnóstico e avaliação do sistema de injeção eletrônica.' },
    { icone: 'eletrica', titulo: 'Elétrica automotiva', descricao: 'Verificação dos sistemas elétricos e da bateria.' },
    { icone: 'ar', titulo: 'Ar-condicionado', descricao: 'Avaliação e manutenção do sistema de climatização.' },
    { icone: 'temperatura', titulo: 'Sistema de arrefecimento', descricao: 'Inspeção do sistema de arrefecimento do motor.' },
    { icone: 'oleo', titulo: 'Óleo e filtros', descricao: 'Troca de óleo e filtros conforme a aplicação do veículo.' },
    { icone: 'direcao', titulo: 'Embreagem e direção', descricao: 'Avaliação dos sistemas de embreagem e direção.' },
  ],
};

export const sintomasCambio = [
  'Trancos nas trocas de marcha',
  'Demora para engatar D ou R',
  'Ruídos ou vibrações',
  'Patinação',
  'Vazamentos',
  'Alertas no painel',
];

export const marcas = {
  nacionais: ['Fiat', 'Volkswagen', 'Chevrolet', 'Ford', 'Renault', 'Peugeot', 'Citroën'],
  importadas: ['Toyota', 'Honda', 'Hyundai', 'Kia', 'Nissan', 'Mitsubishi', 'Jeep', 'BMW', 'Mercedes-Benz', 'Audi', 'Volvo', 'Land Rover', 'Porsche', 'BYD', 'CAOA Chery'],
};

export const sobre = {
  paragrafos: [
    'Há mais de 14 anos, o Centro Automotivo Flex Motors atende motoristas em Valparaíso de Goiás.',
    'Com experiência em mecânica multimarcas e especialização em câmbio automático, buscamos oferecer soluções adequadas para cada veículo, com diagnóstico responsável, transparência e compromisso com a qualidade.',
    'Atendemos veículos nacionais e importados, sempre priorizando segurança, confiança e durabilidade. A disponibilidade do serviço é confirmada conforme modelo, ano e avaliação técnica.',
  ],
};
