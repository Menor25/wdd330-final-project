import { authService } from '../api/authService.js';

export function Header() {
    const renderNav = () => {
        const isAuth = authService.isAuthenticated();
        const authAction = isAuth 
            ? `<button id="logout-btn" class="btn btn-outline-error text-label-bold font-label-bold">Logout</button>`
            : `<a href="/login" data-link class="btn btn-primary text-label-bold font-label-bold">Sign In</a>`;

        const html = `
            <header class="navbar bg-surface border-variant" style="border-bottom-width: 1px;">
                <div class="container flex justify-between items-center py-sm">
                    <a href="/" data-link class="nav-logo flex items-center gap-sm outline-none">
                        <span class="material-symbols-outlined text-primary" style="font-size: 2rem;">shield</span>
                        <span class="text-headline-md font-headline-md text-on-surface">SafeRent NG</span>
                    </a>
                    <nav class="nav-links flex gap-lg">
                        <a class="text-label-bold font-label-bold nav-link text-on-surface-variant hover:text-primary transition-colors" href="/" data-link>Search</a>
                        <a class="text-label-bold font-label-bold nav-link text-on-surface-variant hover:text-primary transition-colors" href="/report" data-link>Report Scam</a>
                        <a class="text-label-bold font-label-bold nav-link text-on-surface-variant hover:text-primary transition-colors" href="/verify" data-link>Map</a>
                        <a class="text-label-bold font-label-bold nav-link text-on-surface-variant hover:text-primary transition-colors" href="/dashboard" data-link>Dashboard</a>
                    </nav>
                    <div class="nav-actions flex items-center gap-md">
                        <button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
                        ${authAction}
                    </div>
                </div>
            </header>
        `;

        const container = document.getElementById('nav-container');
        if (container) {
            container.innerHTML = html;
            
            const logoutBtn = container.querySelector('#logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    authService.logout();
                    window.history.pushState(null, null, '/');
                    window.dispatchEvent(new Event('popstate'));
                });
            }
        }
    };

    window.addEventListener('authChange', renderNav);
    renderNav();
}
