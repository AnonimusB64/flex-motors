import { servicos } from '../data/oficina.js';
import { iconeComoHTML } from '../components/icon.js';

function criarCards(lista) {
  return lista.map((item) => `
    <article class="servico-card">
      <span class="icon-box">${iconeComoHTML(item.icone)}</span>
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </article>`).join('');
}

export function criarServicos() {
  const section = document.createElement('section');
  section.id = 'servicos';
  section.className = 'section section-servicos section-dark';
  section.innerHTML = `
    <div class="container">
      <div class="section-heading section-heading-row">
        <div>
          <p class="eyebrow"><span class="eyebrow-line"></span> Soluções para o seu veículo</p>
          <h2 class="section-title">Serviços com <span>cuidado técnico.</span></h2>
        </div>
        <p class="section-intro">Da transmissão à revisão geral, cada atendimento começa com uma avaliação adequada ao veículo.</p>
      </div>
      <div class="service-group">
        <div class="service-group-heading"><span class="group-number">01</span><h3>Câmbio e transmissão</h3><span class="group-rule"></span></div>
        <div class="servicos-grid">${criarCards(servicos.cambio)}</div>
      </div>
      <div class="service-group">
        <div class="service-group-heading"><span class="group-number">02</span><h3>Mecânica geral</h3><span class="group-rule"></span></div>
        <div class="servicos-grid">${criarCards(servicos.geral)}</div>
      </div>
      <div class="service-photo-callout">
        <div class="service-photo-wrap"><img src="/images/oficina-ilustrativa.jpg" alt="Avaliação de motor com equipamento de manutenção, imagem ilustrativa" width="1280" height="1920" loading="lazy" decoding="async" /><span>Imagem ilustrativa</span></div>
        <div><p class="eyebrow"><span class="eyebrow-line"></span> Diagnóstico com método</p><h3>Entender o problema é o primeiro passo para cuidar bem.</h3><p>A recomendação de serviço depende da avaliação do veículo, do modelo e do ano.</p></div>
        <a class="text-link" href="#contato">Fale com a equipe <span aria-hidden="true">↗</span></a>
      </div>
    </div>`;
  return section;
}