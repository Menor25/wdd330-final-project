export function renderSearch() {
    const container = document.createElement('div');
    container.className = 'container py-24';
    container.innerHTML = `
        <h1 class="text-headline-md mb-md">Search Properties</h1>
        <p class="text-body-md text-on-surface-variant mb-lg">Search for properties and verify their legitimacy before making any payments.</p>
        
        <div class="mb-lg">
             <div class="search-box">
                    <span class="material-symbols-outlined icon">search</span>
                    <input class="text-body-md" placeholder="Search Address, Property ID..." type="text"/>
                    <button class="text-label-bold">Search</button>
             </div>
        </div>

        <div class="grid md-grid-cols-4 gap-gutter mt-12 pb-12">
            <!-- Example Verified Card -->
            <div class="property-card">
                <div class="property-image-placeholder">
                    <div class="property-badge bg-secondary">
                        <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">verified_user</span> Verified Safe
                    </div>
                </div>
                <div class="p-lg">
                    <h3 class="text-headline-sm mb-sm">3-Bedroom Flat, Lekki</h3>
                    <p class="text-body-sm text-on-surface-variant mb-md flex items-center gap-sm">
                        <span class="material-symbols-outlined" style="font-size: 14px">location_on</span> Phase 1, Lekki, Lagos
                    </p>
                    <div class="flex justify-between items-center">
                        <span class="text-headline-sm text-primary">₦4,500,000/yr</span>
                        <div class="flex items-center gap-sm text-secondary">
                          <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">verified</span>
                          <span class="text-label-sm font-label-bold">Reg. Agent</span>
                        </div>
                    </div>
                </div>
            </div>
            
             <div class="property-card">
                <div class="property-image-placeholder">
                     <div class="property-badge bg-amber-500">
                        <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">help</span> Investigation Needed
                    </div>
                </div>
                <div class="p-lg">
                    <h3 class="text-headline-sm mb-sm">2-Bedroom Flat, Yaba</h3>
                    <p class="text-body-sm text-on-surface-variant mb-md flex items-center gap-sm">
                        <span class="material-symbols-outlined" style="font-size: 14px">location_on</span> Akoka, Yaba, Lagos
                    </p>
                    <div class="flex justify-between items-center">
                        <span class="text-headline-sm text-primary">₦1,200,000/yr</span>
                        <div class="flex items-center gap-sm text-amber-600">
                            <span class="text-label-sm font-label-bold">Pending Agent</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return container;
}
