import { oficina } from '../data/oficina.js';

const mensagemWhatsApp = encodeURIComponent('Olá! Gostaria de informações sobre os serviços da Flex Motors.');

export function criarContato() {
  const section = document.createElement('section');
  section.id = 'contato';
  section.className = 'section section-contato section-dark';
  const telefone = String(oficina.telefone || '').trim();
  const numero = telefone.replace(/\D/g, '');
  const endereco = String(oficina.endereco || '').trim();
  const mapa = encodeURIComponent('-16.0752071,-47.995174');
  const linkMapa = 'https://www.google.com/maps/dir//Centro+Automotivo+Flex+Motors,+Av.+15+de+Junho,+Qd-09+-+Lt-18+Loja-01+-+Valparaizo+II,+Valpara%C3%ADso+de+Goi%C3%A1s+-+GO,+72870-109/@-16.0686563,-47.9515105,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9359859223c29609:0x37eac74f4dc29b7b!2m2!1d-47.995174!2d-16.0752071?entry=ttu';

  section.innerHTML = `
    <div class="container">
      <div class="contact-banner">
        <div class="contact-copy"><p class="eyebrow"><span class="eyebrow-line"></span> Vamos conversar?</p><h2>Seu veículo precisa de atenção?<br /><span>Conte com a Flex Motors.</span></h2><p>Agende uma avaliação com a nossa equipe.</p></div>
        <a class="btn btn-primary" href="https://wa.me/${oficina.whatsapp}?text=${mensagemWhatsApp}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
      <div class="contact-grid">
        <div class="contact-details">
          <div class="contact-item"><span class="contact-icon">${iconeTelefone()}</span><div><span class="contact-label">Telefone</span><a href="tel:${numero}">${telefone}</a></div></div>
          <div class="contact-item"><span class="contact-icon">${iconeLocal()}</span><div><span class="contact-label">Endereço</span><p>${endereco}</p></div></div>
          <div class="contact-hours"><h3>Horário de funcionamento</h3><dl>${oficina.horario.map((item) => `<div><dt>${item.dia}</dt><dd>${item.hora}</dd></div>`).join('')}</dl></div>
        </div>
        <div class="contact-map-wrap">
          <iframe src="https://www.google.com/maps?q=${mapa}&amp;z=16&amp;output=embed" title="Mapa do Centro Automotivo Flex Motors em Valparaíso de Goiás" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          <a class="map-link" href="${linkMapa}" target="_blank" rel="noopener noreferrer">Abrir localização no Google Maps <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>`;
  return section;
}

function iconeTelefone() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3l-5-2-2 2a13 13 0 0 1-6-6l2-2z"/></svg>';
}

function iconeLocal() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
}

export function criarWhatsappFlutuante() {
  const link = document.createElement('a');
  link.className = 'whatsapp-float';
  link.href = `https://wa.me/${oficina.whatsapp}?text=${mensagemWhatsApp}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Falar com a Flex Motors pelo WhatsApp');
  link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z"/><path d="M9 8.5c.3-.7.6-.7 1-.7h.4c.2 0 .4 0 .5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.6 1 1.4 1.7 2.4 2.2.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.2 1.3-.8 1.7-.5.5-1.2.7-2 .5-1.1-.2-2.4-.8-3.9-2.1-1.6-1.4-2.6-3.1-2.9-4.1-.3-1 .1-1.8.5-2.1Z"/></svg><span>WhatsApp</span>';
  return link;
}

export function criarFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container footer-main"><a href="#inicio" class="logo" aria-label="Flex Motors, início"><img class="logo-image" src="/images/flex-motors-logo.png" alt="" width="1280" height="1280" /></a><p>${new Date().getFullYear()} ${oficina.nome}. Todos os direitos reservados.</p><a href="#inicio" class="back-top">Voltar ao topo ↑</a></div>
    <details class="image-credits container"><summary>Créditos das imagens ilustrativas</summary><ul>
      <li>BMW branca: Mikes Photos (Pexels), <a href="https://commons.wikimedia.org/wiki/File:White_BMW_car_seen_from_front.jpg" target="_blank" rel="noopener noreferrer">CC0 1.0</a>.</li>
      <li>Fiat Cronos: Arthur RPereira, <a href="https://commons.wikimedia.org/wiki/File:Fiat_Cronos_2026_front_end_with_headlights_on.jpg" target="_blank" rel="noopener noreferrer">CC0 1.0</a>.</li>
      <li>Transmissão Aisin: TTTNIS, <a href="https://commons.wikimedia.org/wiki/File:Aisin_TF-60SN_transmission.jpg" target="_blank" rel="noopener noreferrer">CC0 1.0</a>.</li>
      <li>Manutenção com equipamento: Shixart1985, <a href="https://commons.wikimedia.org/wiki/File:Car_maintenance_in_a_garage_with_equipment_for_engine_work_and_a_vehicle_being_serviced.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>.</li>
      <li>Mecânico em motor: Bembety, <a href="https://commons.wikimedia.org/wiki/File:Mechanic_repairing_car_engine.jpg" target="_blank" rel="noopener noreferrer">CC0 1.0</a>.</li>
    </ul></details>`;
  return footer;
}