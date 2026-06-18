import { loadGoogleMaps } from '../api/geoAPI.js';

export function renderVerify() {
    const container = document.createElement('div');
    container.className = 'container py-24';
    container.innerHTML = `
        <h1 class="text-headline-md mb-md">Verification Map</h1>
        <p class="text-body-md text-on-surface-variant mb-lg">Visualizing real estate safety across regions.</p>
        
        <div id="map-wrap" class="bg-surface-container-highest border-variant rounded-xl overflow-hidden" style="width: 100%; height: 500px; position: relative;">
             <div id="actual-map" style="width: 100%; height: 100%;"></div>
        </div>
    `;

    // Initialize Map
    setTimeout(async () => {
        const apiKey = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
        if (!apiKey) {
            const mapWrap = container.querySelector('#map-wrap');
            if (mapWrap) {
                mapWrap.innerHTML = `
                <div style="display:flex; align-items:center; justify-content:center; height:100%; font-family:sans-serif; text-align:center;">
                    <div style="max-width:520px; padding:2rem;">
                        <h2>Google Maps API Key Required</h2>
                        <p><strong>Step 1:</strong> <a href="https://console.cloud.google.com/google/maps-apis/start" target="_blank" rel="noopener">Get an API Key</a></p>
                        <p><strong>Step 2:</strong> Add your key as a secret in AI Studio with the specific name <code>GOOGLE_MAPS_PLATFORM_KEY</code></p>
                    </div>
                </div>`;
            }
            return;
        }

        try {
            await loadGoogleMaps();
            
            const mapElement = container.querySelector('#actual-map');
            if (!mapElement) return;

            const map = new window.google.maps.Map(mapElement, {
                center: { lat: 6.5244, lng: 3.3792 }, // Default to Lagos, Nigeria
                zoom: 12,
                mapId: 'DEMO_MAP_ID', // Replace with your actual Map ID if needed
                disableDefaultUI: false,
            });

            const markers = [
                { position: { lat: 6.4281, lng: 3.4219 }, title: 'Verified Agent Hub', type: 'verified' },
                { position: { lat: 6.5000, lng: 3.3600 }, title: 'Scam Hotspot', type: 'scam' },
                { position: { lat: 6.6018, lng: 3.3515 }, title: 'Unverified Area', type: 'unverified' }
            ];

            const AdvancedMarkerElement = window.google.maps.marker.AdvancedMarkerElement;
            const PinElement = window.google.maps.marker.PinElement;

            markers.forEach(async (mk) => {
                const pin = new PinElement({
                    background: mk.type === 'scam' ? '#B3261E' : mk.type === 'verified' ? '#4285F4' : '#F59E0B',
                    borderColor: '#ffffff',
                    glyphColor: '#ffffff',
                });

                new AdvancedMarkerElement({
                    map,
                    position: mk.position,
                    title: mk.title,
                    content: pin.element
                });
            });

        } catch (error) {
            console.error('Failed to init map', error);
        }
    }, 0);

    return container;
}
