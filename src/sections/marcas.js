import { marcas } from '../data/oficina.js';

function marcasHtml(lista) {
  return lista.map((marca) => `<span class="brand-wordmark">${marca}</span>`).join('');
}

export function criarMarcas() {
  const section = document.createElement('section');
  section.id = 'marcas';
  section.className = 'section section-marcas section-dark';
  section.innerHTML = `
    <div class="container">
      <div class="section-heading section-heading-centered">
        <p class="eyebrow"><span class="eyebrow-line"></span> Atendimento multimarcas</p>
        <h2 class="section-title">Nacionais e <span>importados.</span></h2>
        <p class="section-intro">Experiência com diferentes fabricantes e sistemas automotivos.</p>
      </div>
      <div class="brand-groups">
        <div class="brand-group"><h3>Marcas nacionais</h3><div class="brand-list">${marcasHtml(marcas.nacionais)}</div></div>
        <div class="brand-group"><h3>Importadas e premium</h3><div class="brand-list">${marcasHtml(marcas.importadas)}</div></div>
      </div>
      <p class="brand-disclaimer">A compatibilidade e a disponibilidade do serviço são confirmadas conforme modelo, ano e avaliação técnica. Consulte a equipe sobre o seu veículo.</p>
    </div>`;
  return section;
}