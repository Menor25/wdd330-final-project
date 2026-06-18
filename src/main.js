import { loadHeaderFooter, uiEffects } from "./js/utils/utils.mjs";
import './css/style.css';
import { setupRouter } from './js/router.js';
import { Header } from './js/components/Header.js';
import { Footer } from './js/components/Footer.js';

async function init() {
  await loadHeaderFooter();
  uiEffects();
}

init();



document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Add Navigation container
    const navContainer = document.createElement('div');
    navContainer.id = 'nav-container';
    app.appendChild(navContainer);

    
    // Add Navigation
    Header();
    
    // Add router outlet
    const main = document.createElement('main');
    main.id = 'router-outlet';
    main.className = 'pt-20';
    app.appendChild(main);

    app.innerHTML += Footer();
    
    // Add Footer
    // const footer = document.createElement('footer');
    // footer.className = 'footer';
    // footer.innerHTML = `
        
    // `;
    // app.appendChild(footer);

    setupRouter();
    
    // Add micro-interactions
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(0.98)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
