import "./styles/styles.css";
import "./styles/mediaqueries.css";
import "./styles/animaciones.css";

import { menuInterfaceInit } from './modules/menu-interface/menu-interface.js'
import { productsSectionInit } from './modules/products-section/products-section.js'
import { cartInit } from './modules/cart/cart.js'
import { scrollEffectsInit } from './modules/scroll-effects/scroll.js'
import { typewriterInit } from './modules/typewriter/typewriter.js'


//Función inicializadora
const init = () => {
  menuInterfaceInit();
  productsSectionInit();
  cartInit();
  scrollEffectsInit();
  typewriterInit();
};

init();
