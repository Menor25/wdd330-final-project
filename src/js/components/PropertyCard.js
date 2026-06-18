export function PropertyCard(property) {
    const statusConfig = {
        'verified': { icon: 'verified_user', class: 'bg-secondary', label: 'Verified Safe' },
        'pending': { icon: 'help', class: 'bg-amber-500', label: 'Investigation Needed' },
        'scam': { icon: 'warning', class: 'bg-error', label: 'Scam Alert' }
    };
    const s = statusConfig[property.status] || statusConfig['pending'];

    return `
        <a href="/property?id=${property.id}" data-link class="block h-full outline-none">
            <div class="property-card h-full flex flex-col">
                <div class="property-image-placeholder relative" style="${property.image ? `background-image: url('${property.image}'); background-size: cover; background-position: center;` : ''}">
                    <div class="property-badge ${s.class}">
                        <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">${s.icon}</span> <span class="text-label-sm font-label-bold text-white">${s.label}</span>
                    </div>
                </div>
                <div class="p-lg flex-1 flex flex-col">
                    <h3 class="text-headline-sm mb-sm text-on-surface">${property.title}</h3>
                    <p class="text-body-sm text-on-surface-variant flex items-center gap-sm mb-md flex-1">
                        <span class="material-symbols-outlined" style="font-size: 14px;">location_on</span> ${property.location}
                    </p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-headline-sm text-primary">${property.price}</span>
                    </div>
                </div>
            </div>
        </a>
    `;
}
