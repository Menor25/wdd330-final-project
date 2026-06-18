import { PropertyCard } from '../components/PropertyCard.js';
import { searchProperties } from '../api/propertyAPI.js';

export function renderSearch() {
    const container = document.createElement('div');
    container.className = 'container py-24';
    
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';

    container.innerHTML = `
        <h1 class="text-headline-md mb-md">Search Properties</h1>
        <p class="text-body-md text-on-surface-variant mb-lg">Search for properties and verify their legitimacy before making any payments.</p>
        
        <div class="mb-lg">
             <form id="search-form" class="search-box">
                    <span class="material-symbols-outlined icon">search</span>
                    <input id="search-input" class="text-body-md border-none outline-none flex-1 py-4" placeholder="Search Address, Property ID, Agent..." type="text" value="${query}" />
                    <button type="submit" class="text-label-bold">Search</button>
             </form>
        </div>

        <div id="results-container" class="grid md-grid-cols-4 gap-gutter mt-12 pb-12">
            <!-- Results will be loaded here -->
            <p class="text-body-md text-on-surface-variant">Loading...</p>
        </div>
    `;

    setTimeout(async () => {
        const form = container.querySelector('#search-form');
        const input = container.querySelector('#search-input');
        const resultsContainer = container.querySelector('#results-container');

        const loadResults = async (q) => {
            const results = await searchProperties(q);
            if (results.length === 0) {
                resultsContainer.innerHTML = '<p class="text-body-md text-on-surface-variant col-span-full">No properties found matching your criteria.</p>';
                return;
            }
            resultsContainer.innerHTML = results.map(p => PropertyCard(p)).join('');
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newVal = input.value.trim();
            window.history.pushState({}, '', '/search' + (newVal ? `?q=${encodeURIComponent(newVal)}` : ''));
            loadResults(newVal);
        });

        await loadResults(query);
    }, 0);

    return container;
}
