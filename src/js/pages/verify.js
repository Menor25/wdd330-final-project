export function renderVerify() {
    const container = document.createElement('div');
    container.className = 'container py-24';
    container.innerHTML = `
        <h1 class="text-headline-md mb-md">Verification Map</h1>
        <p class="text-body-md text-on-surface-variant mb-lg">Visualizing real estate safety across regions.</p>
        
        <div class="bg-surface-container-highest border-variant rounded-xl flex items-center justify-center overflow-hidden" style="width: 100%; height: 500px; position: relative;">
             <!-- Map UI Elements -->
             <div class="bg-surface-container-lowest rounded flex flex-col gap-sm" style="position: absolute; top: 1rem; left: 1rem; padding: 0.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                <button class="bg-surface hover:bg-surface-variant flex items-center justify-center rounded" style="width: 2rem; height: 2rem;"><span class="material-symbols-outlined">add</span></button>
                <button class="bg-surface hover:bg-surface-variant flex items-center justify-center rounded" style="width: 2rem; height: 2rem;"><span class="material-symbols-outlined">remove</span></button>
             </div>

             <!-- Mock Map Markers -->
             <div class="flex items-center flex-col" style="position: absolute; top: 33%; left: 25%; cursor: pointer;">
                 <div class="bg-secondary text-white rounded-full p-sm" style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                     <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">location_on</span>
                 </div>
                 <div class="bg-surface-container-lowest border-variant text-label-sm font-label-bold rounded" style="padding: 0.25rem 0.5rem; margin-top: 0.25rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">Verified Agent Hub</div>
             </div>

             <div class="flex items-center flex-col" style="position: absolute; top: 50%; right: 33%; cursor: pointer;">
                 <div class="bg-error text-white rounded-full p-sm" style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                     <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">close</span>
                 </div>
                 <div class="bg-surface-container-lowest text-error border-error text-label-sm font-label-bold rounded" style="border: 1px solid var(--color-error); padding: 0.25rem 0.5rem; margin-top: 0.25rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">Scam Hotspot</div>
             </div>
             
             <div class="flex items-center flex-col" style="position: absolute; bottom: 25%; left: 50%; cursor: pointer;">
                 <div class="bg-amber-500 text-white rounded-full p-sm" style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                     <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">warning</span>
                 </div>
                 <div class="bg-surface-container-lowest border-variant text-label-sm font-label-bold rounded" style="padding: 0.25rem 0.5rem; margin-top: 0.25rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">Unverified Area</div>
             </div>

        </div>
    `;
    return container;
}
