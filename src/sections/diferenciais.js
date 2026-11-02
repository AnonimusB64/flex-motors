import { diferenciais } from '../data/oficina.js';
import { iconeComoHTML } from '../components/icon.js';

export function criarDiferenciais() {
  const section = document.createElement('section');
  section.id = 'diferenciais';
  section.className = 'section section-diferenciais';
  section.innerHTML = `
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow"><span class="eyebrow-line"></span> Por que a Flex Motors</p>
        <h2 class="section-title">Experiência que <span>faz diferença.</span></h2>
      </div>
      <div class="diferenciais-grid">
        ${diferenciais.map((item, index) => `
          <article class="diferencial-card">
            <span class="diferencial-index">0${index + 1}</span>
            <span class="icon-box">${iconeComoHTML(item.icone)}</span>
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
          </article>`).join('')}
      </div>
    </div>`;
  return section;
}