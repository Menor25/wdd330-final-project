import { PropertyCard } from '../components/PropertyCard.js';

export function renderHome() {
    const container = document.createElement('div');
    
    // Hero Section
    const hero = document.createElement('section');
    hero.className = 'hero-section';
    hero.innerHTML = `
        <div class="container text-center">
            <h1 class="text-display-lg hero-title">SafeRent NG</h1>
            <p class="text-body-lg hero-subtitle">Protecting Nigerian Renters from Apartment Scams. Your vigilant shield against rental fraud.</p>
            <div class="hero-actions">
                <div class="search-box">
                    <span class="material-symbols-outlined icon">search</span>
                    <input class="text-body-md" placeholder="Search Apartment / Agent / Phone Number..." type="text"/>
                    <button class="text-label-bold">Search</button>
                </div>
                <button class="btn btn-outline-error text-label-bold">
                    <span class="material-symbols-outlined">report</span>
                    Report a Scam
                </button>
            </div>
        </div>
    `;
    container.appendChild(hero);

    // Stats Section
    const stats = document.createElement('section');
    stats.className = 'stats-section';
    stats.innerHTML = `
        <div class="container grid md-grid-cols-3 text-center">
            <div class="stat-item">
                <span class="text-display-lg text-primary">1,240+</span>
                <span class="text-label-bold text-on-surface-variant">Total Verified Agents</span>
            </div>
            <div class="stat-item">
                <span class="text-display-lg text-primary">850+</span>
                <span class="text-label-bold text-on-surface-variant">Scams Prevented</span>
            </div>
            <div class="stat-item">
                <span class="text-display-lg text-primary">5,000+</span>
                <span class="text-label-bold text-on-surface-variant">Community Reports</span>
            </div>
        </div>
    `;
    container.appendChild(stats);

    // Recently Verified Properties
    const recentVerified = document.createElement('section');
    recentVerified.className = 'container py-24';
    
    const verifiedData = [
        { title: '4-Bedroom Duplex', location: 'Chevron Drive, Lekki', price: '₦8,000,000/yr', status: 'verified', image: 'images/property-01.png' },
        { title: 'Self Contain', location: 'Surulere, Lagos', price: '₦600,000/yr', status: 'verified', image: 'images/property-02.png' },
        { title: '2-Bedroom Flat', location: 'Wuse 2, Abuja', price: '₦3,500,000/yr', status: 'verified', image: 'images/property-03.png' },
        { title: '3-Bedroom Apartment', location: 'GRA Phase 2, Port Harcourt', price: '₦4,200,000/yr', status: 'verified', image: 'images/property-04.png' }
    ];

    recentVerified.innerHTML = `
        <div class="flex justify-between items-end mb-12">
            <div>
                <h2 class="text-headline-md text-on-surface">Recently Verified Properties</h2>
                <p class="text-body-md text-on-surface-variant mt-sm">Safe and verified listings by trusted agents.</p>
            </div>
            <a href="/verify" data-link class="text-label-bold text-primary hover:underline">View Map</a>
        </div>
        <div class="grid md-grid-cols-4 gap-gutter">
            ${verifiedData.map(prop => PropertyCard(prop)).join('')}
        </div>
    `;
    container.appendChild(recentVerified);

    // Alerts Section
    const alerts = document.createElement('section');
    alerts.className = 'bg-surface-container-low py-24';
    alerts.innerHTML = `
        <div class="container">
            <div class="mb-12">
                <h2 class="text-headline-md text-on-surface">High Risk Alerts</h2>
                <p class="text-body-md text-on-surface-variant">Recently reported fraudulent listings and known scam patterns. Exercise extreme caution.</p>
            </div>
            <div class="flex flex-col gap-md">
                <!-- We will use ReportCard component logic here instead of duplicating it, but for now just raw HTML to fix classes -->
                <div class="bg-surface-container-lowest border-error py-base px-stack-lg rounded-xl flex md-flex-row flex-col justify-between items-center gap-gutter">
                    <div class="flex items-center gap-lg">
                        <div class="w-12 h-12 bg-error-container text-error rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">warning</span>
                        </div>
                        <div>
                            <h4 class="text-headline-sm text-error">Fake Agent: "Prince Real Estate"</h4>
                            <p class="text-body-sm text-on-surface-variant">Multiple reports of advance payment fraud for a non-existent property in Gwarinpa, Abuja.</p>
                            <span class="text-label-sm text-on-surface-variant block mt-1">REPORTED 2 HOURS AGO</span>
                        </div>
                    </div>
                    <div class="bg-error text-label-sm py-2 px-stack-lg rounded">SCAM ALERT</div>
                </div>
                 <div class="bg-surface-container-lowest border-error py-base px-stack-lg rounded-xl flex flex-col md-flex-row justify-between items-center gap-gutter">
                    <div class="flex items-center gap-lg">
                    <div class="w-12 h-12 bg-error-container text-error rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">warning</span>
                    </div>
                    <div>
                    <h4 class="text-headline-sm text-error">Suspect Phone Number: +234 812 345 6789</h4>
                    <p class="text-body-sm text-on-surface-variant">Associated with "too-good-to-be-true" listings on Facebook Marketplace across Lagos State.</p>
                    <span class="text-label-sm text-on-surface-variant block mt-1">REPORTED YESTERDAY</span>
                    </div>
                    </div>
                    <div class="bg-error text-label-sm py-2 px-stack-lg rounded">SCAM ALERT</div>
                </div>
            </div>
        </div>
    `;
    container.appendChild(alerts);

    // How It Works
    const howItWorks = document.createElement('section');
    howItWorks.className = 'how-it-works container';
    howItWorks.innerHTML = `
        <h2 class="text-headline-md text-center mb-12">Your Path to a Safe Rental</h2>
        <div class="grid md-grid-cols-3 gap-lg text-center">
            <div class="step-item">
                <div class="step-icon-container">
                    <span class="material-symbols-outlined">search</span>
                </div>
                <h3 class="text-headline-sm mb-sm">1. Search</h3>
                <p class="text-body-md text-on-surface-variant">Enter an address, agent name, or phone number to check our verified database.</p>
            </div>
            <div class="step-item">
                <div class="step-icon-container">
                    <span class="material-symbols-outlined">verified</span>
                </div>
                <h3 class="text-headline-sm mb-sm">2. Verify</h3>
                <p class="text-body-md text-on-surface-variant">Check the risk score and trust badges. Read community reviews and agent history.</p>
            </div>
            <div class="step-item">
                <div class="step-icon-container">
                    <span class="material-symbols-outlined">gavel</span>
                </div>
                <h3 class="text-headline-sm mb-sm">3. Decide</h3>
                <p class="text-body-md text-on-surface-variant">Proceed with confidence or report a scam to protect others in the community.</p>
            </div>
        </div>
    `;
    container.appendChild(howItWorks);

    return container;
}
