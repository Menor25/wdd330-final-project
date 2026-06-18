import { renderHome } from './pages/home.js';
import { renderSearch } from './pages/search.js';
import { renderVerify } from './pages/verify.js';
import { renderReport } from './pages/report.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderProperty } from './pages/property.js';
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';

const routes = {
    '/': renderHome,
    '/search': renderSearch,
    '/verify': renderVerify,
    '/report': renderReport,
    '/dashboard': renderDashboard,
    '/property': renderProperty,
    '/login': renderLogin,
    '/register': renderRegister,
};

export function setupRouter() {
    const handleRouteChange = () => {
        const path = window.location.pathname;
        const pageRenderer = routes[path] || renderHome;
        const outlet = document.getElementById('router-outlet');
        if (outlet) {
            outlet.innerHTML = '';
            outlet.appendChild(pageRenderer());
        }
    };

    window.addEventListener('popstate', handleRouteChange);

    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            window.history.pushState(null, null, href);
            handleRouteChange();
        }
    });

    handleRouteChange();
}
