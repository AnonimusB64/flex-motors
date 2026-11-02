import { oficina, sobre } from '../data/oficina.js';

export function criarSobre() {
  const section = document.createElement('section');
  section.id = 'sobre';
  section.className = 'section section-sobre';
  section.innerHTML = `
    <div class="container sobre-grid">
      <figure class="sobre-image-wrap">
        <img src="/images/mecanico-motor.jpg" alt="Mecânico avaliando componentes do motor, foto ilustrativa" width="1280" height="960" loading="lazy" decoding="async" />
        <figcaption>Imagem ilustrativa · manutenção automotiva</figcaption>
        <span class="sobre-years"><strong>14+</strong><span>anos de<br />experiência</span></span>
      </figure>
      <div class="sobre-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> Sobre a Flex Motors</p>
        <h2 class="section-title">Conhecimento para cuidar do que <span>move você.</span></h2>
        ${sobre.paragrafos.map((paragrafo) => `<p class="section-intro">${paragrafo}</p>`).join('')}
        <a class="text-link" href="#contato">Conheça a oficina <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>`;
  return section;
}