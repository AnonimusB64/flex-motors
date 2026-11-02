import { oficina, sintomasCambio } from '../data/oficina.js';
import { iconeComoHTML } from '../components/icon.js';

export function criarCambio() {
  const section = document.createElement('section');
  section.id = 'cambio';
  section.className = 'section section-cambio';
  const mensagem = encodeURIComponent('Olá! Gostaria de agendar uma avaliação do câmbio automático.');
  section.innerHTML = `
    <div class="container cambio-grid">
      <div class="cambio-image-wrap">
        <img class="cambio-image" src="/images/transmissao-automatica.jpg" alt="Transmissão automática Aisin em corte, mostrando componentes internos" width="1280" height="1253" loading="lazy" decoding="async" />
        <div class="image-stamp"><span>Especialidade</span><strong>AT</strong><span>Câmbio automático</span></div>
        <span class="image-caption">Imagem ilustrativa de transmissão automática</span>
      </div>
      <div class="cambio-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> Especialidade Flex Motors</p>
        <h2 class="section-title">Câmbio automático<br /><span>com atenção técnica.</span></h2>
        <p class="section-intro">Trabalhamos com diagnóstico, manutenção preventiva e reparo de transmissões automáticas. A avaliação identifica os próximos passos para cada veículo.</p>
        <h3 class="symptoms-title">Percebeu algum destes sinais?</h3>
        <ul class="symptoms-list">
          ${sintomasCambio.map((sintoma) => `<li><span class="symptom-check">${iconeComoHTML('alerta')}</span>${sintoma}</li>`).join('')}
        </ul>
        <a class="btn btn-primary" href="https://wa.me/${oficina.whatsapp}?text=${mensagem}" target="_blank" rel="noopener noreferrer">Agendar uma avaliação <span aria-hidden="true">↗</span></a>
      </div>
    </div>`;
  return section;
}