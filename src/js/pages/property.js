import { getPropertyById } from '../api/propertyAPI';

export function renderProperty() {
    const container = document.createElement('div');
    container.className = 'container py-24';
    
    // Get id query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        container.innerHTML = '<p class="text-body-md text-on-surface-variant">Property not found.</p>';
        return container;
    }

    container.innerHTML = '<p class="text-body-md text-on-surface-variant">Loading property details...</p>';

    setTimeout(async () => {
        const property = await getPropertyById(id);
        if (!property) {
            container.innerHTML = '<p class="text-body-md text-on-surface-variant">Property not found.</p>';
            return;
        }

        const statusConfig = {
            'verified': { icon: 'verified_user', class: 'bg-secondary', label: 'Verified Safe' },
            'pending': { icon: 'help', class: 'bg-amber-500', label: 'Investigation Needed' },
            'scam': { icon: 'warning', class: 'bg-error', label: 'Scam Alert' }
        };
        const s = statusConfig[property.status] || statusConfig['pending'];

        container.innerHTML = `
            <div class="mb-lg">
                <a href="/search" data-link class="text-primary hover-underline text-label-bold flex items-center gap-sm w-fit"><span class="material-symbols-outlined" style="font-size: 16px;">arrow_back</span> Back to search</a>
            </div>
            <div class="grid md-grid-cols-12 gap-gutter">
                <div class="md-col-span-8">
                    <div class="rounded-xl overflow-hidden mb-lg" style="height: 400px; background-image: url('${property.image}'); background-size: cover; background-position: center; border: 1px solid var(--color-outline-variant);"></div>
                    
                    <div class="flex justify-between items-start mb-md">
                        <div>
                            <h1 class="text-headline-md mb-sm">${property.title}</h1>
                            <p class="text-body-lg text-on-surface-variant flex items-center gap-sm">
                                <span class="material-symbols-outlined" style="font-size: 20px;">location_on</span> ${property.location}
                            </p>
                        </div>
                        <h2 class="text-display-sm text-primary">${property.price}</h2>
                    </div>

                    <div class="bg-surface-container-low p-lg rounded-xl mb-lg border-variant">
                        <h3 class="text-headline-sm mb-sm">Description</h3>
                        <p class="text-body-md text-on-surface-variant">${property.description}</p>
                    </div>
                </div>

                <div class="md-col-span-4">
                    <div class="bg-surface-container-lowest p-lg rounded-xl border-variant mb-md flex flex-col gap-md">
                        <div class="property-badge ${s.class} w-fit mx-auto" style="position: static; font-size: 16px; padding: 0.5rem 1rem;">
                            <span class="material-symbols-outlined" style="font-size: 20px; font-variation-settings: 'FILL' 1;">${s.icon}</span> <span class="text-label-bold text-white">${s.label}</span>
                        </div>
                        <div class="text-center mt-md">
                            <h4 class="text-title-md">${property.agent}</h4>
                            <p class="text-body-sm text-on-surface-variant mt-sm">Listed Agent</p>
                        </div>
                        
                        <div class="mt-lg flex flex-col gap-sm">
                            <button class="btn btn-primary text-label-bold w-full">Contact Agent</button>
                            <a href="/report" data-link class="btn btn-outline-error text-label-bold w-full text-center">Report Issue</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }, 0);

    return container;
}
