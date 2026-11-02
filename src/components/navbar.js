import { oficina } from '../data/oficina.js';

export function criarNavbar() {
  const header = document.createElement('header');
  header.className = 'navbar';
  header.innerHTML = `
    <div class="container nav-inner">
      <a href="#inicio" class="logo" aria-label="Flex Motors, início">
        <img class="logo-image" src="/images/flex-motors-logo.png" alt="" width="1280" height="1280" />
      </a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-principal">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links" id="nav-principal" aria-label="Navegação principal">
        <a href="#diferenciais">Diferenciais</a>
        <a href="#servicos">Serviços</a>
        <a href="#cambio">Câmbio automático</a>
        <a href="#marcas">Marcas</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        <a class="nav-cta" href="https://wa.me/${oficina.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de informações sobre os serviços da Flex Motors.')}" target="_blank" rel="noopener noreferrer">Agendar atendimento <span aria-hidden="true">↗</span></a>
      </nav>
    </div>`;

  const botao = header.querySelector('.menu-toggle');
  const nav = header.querySelector('.nav-links');
  const definirMenuAberto = (aberto) => {
    nav.classList.toggle('aberto', aberto);
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  };

  botao.addEventListener('click', () => definirMenuAberto(!nav.classList.contains('aberto')));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => definirMenuAberto(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') definirMenuAberto(false);
  });

  return header;
}