const caminhos = {
  tempo: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
  cambio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v10M8 9h.01M16 9h.01M8 15h.01M16 15h.01"/>',
  multimarcas: '<path d="M3 15.5 4.5 9h15l1.5 6.5v3h-3v-2H6v2H3z"/><path d="M6 9l1.5-4h9L18 9M6 12h.01M18 12h.01"/>',
  scanner: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8 7h8M8 11h2m2 0h4M8 15h8M10 18h4"/>',
  transparencia: '<path d="M12 3 19 6v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  qualidade: '<path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9z"/>',
  avaliacao: '<path d="M4 5h16v14H4zM8 9h8M8 13h5"/><path d="m15 16 1.5 1.5L20 14"/>',
  engrenagem: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.5.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.7-1.4-2.4L7.7 15a8 8 0 0 1 0-1.8l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.5-.9l.3-1.8H14l.3 1.8a8 8 0 0 1 1.5.9l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 1.8Z"/>',
  oleo: '<path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
  alerta: '<path d="M12 3 22 20H2z"/><path d="M12 9v5m0 3h.01"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  revisao: '<path d="M4 5h16v14H4zM8 9h8M8 13h5"/><path d="m15 16 1.5 1.5L20 14"/>',
  motor: '<path d="M4 10h3l2-3h6l2 3h3l2 3v5h-4v-2H8v2H4z"/><path d="M9 11h6M2 13v3m20-3v3"/>',
  suspensao: '<path d="M8 3v3l4 2-4 2 4 2-4 2 4 2v3M16 3v3l-4 2 4 2-4 2 4 2-4 2v3"/>',
  freio: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M20.5 12h-3M12 20.5v-3M3.5 12h3"/>',
  eletrica: '<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  ar: '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><circle cx="12" cy="12" r="2"/>',
  temperatura: '<path d="M14 14.8V6a2 2 0 0 0-4 0v8.8a4 4 0 1 0 4 0Z"/><path d="M12 10v7"/>',
  direcao: '<circle cx="12" cy="12" r="8.5"/><path d="M4.5 9h15M12 9v11M8 9l4 4 4-4"/>',
  chave: '<path d="M14 6a5 5 0 1 0-1.5 3.5L21 18v3h-3v-3h-3v-3h-3.5"/><circle cx="7.5" cy="7.5" r=".5"/>',
};

export function criarIcone(nome) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.7');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = caminhos[nome] || caminhos.chave;
  return svg;
}

export function iconeComoHTML(nome) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${caminhos[nome] || caminhos.chave}</svg>`;
}