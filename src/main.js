import './styles/main.css';
import { criarNavbar } from './components/navbar.js';
import { criarHero } from './sections/hero.js';
import { criarDiferenciais } from './sections/diferenciais.js';
import { criarServicos } from './sections/servicos.js';
import { criarCambio } from './sections/cambio.js';
import { criarMarcas } from './sections/marcas.js';
import { criarSobre } from './sections/sobre.js';
import { criarContato, criarFooter, criarWhatsappFlutuante } from './sections/contato.js';

const app = document.querySelector('#app');

app.append(
  criarNavbar(),
  criarHero(),
  criarDiferenciais(),
  criarServicos(),
  criarCambio(),
  criarMarcas(),
  criarSobre(),
  criarContato(),
  criarFooter(),
  criarWhatsappFlutuante(),
);