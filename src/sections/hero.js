import { oficina } from '../data/oficina.js';

export function criarHero() {
  const section = document.createElement('section');
  section.id = 'inicio';
  section.className = 'hero';
  const mensagem = encodeURIComponent('Olá! Gostaria de informações sobre os serviços da Flex Motors.');

  section.innerHTML = `
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> Centro automotivo em Valparaíso de Goiás</p>
        <h1>Cuidado completo.<br /><span>Precisão em cada marcha.</span></h1>
        <p class="hero-lead">Mais de 14 anos de experiência. Especialistas em câmbio automático e mecânica multimarcas.</p>
        <p class="hero-description">Atendimento para veículos nacionais e importados, com diagnóstico responsável e cuidado para cada veículo.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="https://wa.me/${oficina.whatsapp}?text=${mensagem}" target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp <span aria-hidden="true">↗</span></a>
          <a class="btn btn-ghost" href="#servicos">Conhecer nossos serviços <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-meta"><span>Valparaíso de Goiás · GO</span><span>Seg–Sex 9h–17h <i></i> Sáb 9h–13h</span></div>
      </div>
      <div class="hero-visual" aria-label="Fotos ilustrativas de uma BMW branca e um Fiat Cronos">
        <figure class="hero-car hero-car-bmw">
          <img src="/images/hero-bmw-branca.jpg" alt="BMW Série 3 branca vista de frente, foto ilustrativa" width="3936" height="2216" fetchpriority="high" decoding="async" />
          <figcaption><span>Importados</span><strong>BMW</strong></figcaption>
        </figure>
        <figure class="hero-car hero-car-cronos">
          <img src="/images/hero-fiat-cronos.jpg" alt="Fiat Cronos grafite fotografado de frente, foto ilustrativa" width="1268" height="951" decoding="async" />
          <figcaption><span>Nacionais</span><strong>FIAT CRONOS</strong></figcaption>
        </figure>
        <span class="hero-visual-note">Imagens ilustrativas</span>
      </div>
    </div>
    <a class="scroll-cue" href="#diferenciais" aria-label="Rolar para os diferenciais"><span></span></a>`;
  return section;
}