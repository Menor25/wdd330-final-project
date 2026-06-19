(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=JSON.parse(localStorage.getItem(e));return Array.isArray(t)?t:[]}function t(){let t=e(`so-cart`),n=document.querySelector(`.cart-count`);n&&(t&&t.length>0?(n.textContent=t.reduce((e,t)=>e+(t.quantity||1),0),n.classList.remove(`hide`)):n.classList.add(`hide`))}function n(e,t,n,r){t.innerHTML=e,r&&r(n)}async function r(e){let t=await fetch(e);if(!t.ok)throw Error(`Failed to load template at ${e}`);return await t.text()}async function i(){try{let e=await r(`./partials/header.html`),i=await r(`./partials/footer.html`),a=document.querySelector(`#main-header`),o=document.querySelector(`#main-footer`);a&&(n(e,a),t()),o&&n(i,o)}catch(e){console.error(`Error loading templates:`,e)}}function a(){document.addEventListener(`mouseover`,e=>{let t=e.target.closest(`button`);t&&(t.style.transform=`scale(0.98)`)}),document.addEventListener(`mouseout`,e=>{let t=e.target.closest(`button`);t&&(t.style.transform=`scale(1)`)})}function o(e){let t={verified:{icon:`verified_user`,class:`bg-secondary`,label:`Verified Safe`},pending:{icon:`help`,class:`bg-amber-500`,label:`Investigation Needed`},scam:{icon:`warning`,class:`bg-error`,label:`Scam Alert`}},n=t[e.status]||t.pending;return`
        <a href="/property?id=${e.id}" data-link class="block h-full outline-none">
            <div class="property-card h-full flex flex-col">
                <div class="property-image-placeholder relative" style="${e.image?`background-image: url('${e.image}'); background-size: cover; background-position: center;`:``}">
                    <div class="property-badge ${n.class}">
                        <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">${n.icon}</span> <span class="text-label-sm font-label-bold text-white">${n.label}</span>
                    </div>
                </div>
                <div class="p-lg flex-1 flex flex-col">
                    <h3 class="text-headline-sm mb-sm text-on-surface">${e.title}</h3>
                    <p class="text-body-sm text-on-surface-variant flex items-center gap-sm mb-md flex-1">
                        <span class="material-symbols-outlined" style="font-size: 14px;">location_on</span> ${e.location}
                    </p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-headline-sm text-primary">${e.price}</span>
                    </div>
                </div>
            </div>
        </a>
    `}function s(){let e=document.createElement(`div`),t=document.createElement(`section`);t.className=`hero-section`,t.innerHTML=`
        <div class="container text-center">
            <h1 class="text-display-lg hero-title">SafeRent NG</h1>
            <p class="text-body-lg hero-subtitle">Protecting Nigerian Renters from Apartment Scams. Your vigilant shield against rental fraud.</p>
            <div class="hero-actions">
                <form id="home-search-form" class="search-box cursor-pointer hover:border-primary transition-colors">
                    <span class="material-symbols-outlined icon">search</span>
                    <input id="home-search-input" class="text-body-md border-none outline-none flex-1 py-4" placeholder="Search Apartment / Agent / Phone Number..." type="text"/>
                    <button type="submit" class="text-label-bold">Search</button>
                </form>
                <a href="/report" data-link class="btn btn-outline-error text-label-bold">
                    <span class="material-symbols-outlined">report</span>
                    Report a Scam
                </a>
            </div>
        </div>
    `,e.appendChild(t);let n=document.createElement(`section`);setTimeout(()=>{let t=e.querySelector(`#home-search-form`),n=e.querySelector(`#home-search-input`);t&&n&&t.addEventListener(`submit`,e=>{e.preventDefault();let t=n.value.trim();window.location.href=`/search`+(t?`?q=${encodeURIComponent(t)}`:``)})},0),n.className=`stats-section`,n.innerHTML=`
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
    `,e.appendChild(n);let r=document.createElement(`section`);r.className=`container py-24`,r.innerHTML=`
        <div class="flex justify-between items-end mb-12">
            <div>
                <h2 class="text-headline-md text-on-surface">Recently Verified Properties</h2>
                <p class="text-body-md text-on-surface-variant mt-sm">Safe and verified listings by trusted agents.</p>
            </div>
            <a href="/verify" data-link class="text-label-bold text-primary hover:underline">View Map</a>
        </div>
        <div class="grid md-grid-cols-4 gap-gutter">
            ${[{title:`4-Bedroom Duplex`,location:`Chevron Drive, Lekki`,price:`₦8,000,000/yr`,status:`verified`,image:`images/property-01.png`},{title:`Self Contain`,location:`Surulere, Lagos`,price:`₦600,000/yr`,status:`verified`,image:`images/property-02.png`},{title:`2-Bedroom Flat`,location:`Wuse 2, Abuja`,price:`₦3,500,000/yr`,status:`verified`,image:`images/property-03.png`},{title:`3-Bedroom Apartment`,location:`GRA Phase 2, Port Harcourt`,price:`₦4,200,000/yr`,status:`verified`,image:`images/property-04.png`}].map(e=>o(e)).join(``)}
        </div>
    `,e.appendChild(r);let i=document.createElement(`section`);i.className=`bg-surface-container-low py-24`,i.innerHTML=`
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
    `,e.appendChild(i);let a=document.createElement(`section`);return a.className=`how-it-works container`,a.innerHTML=`
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
    `,e.appendChild(a),e}var c=[{id:`1`,title:`4-Bedroom Duplex`,location:`Chevron Drive, Lekki`,price:`₦8,000,000/yr`,status:`verified`,image:`images/property-01.png`,description:`A beautiful and spacious duplex in a highly secured estate with clean water and steady power supply.`,agent:`Prince Properties`},{id:`2`,title:`Self Contain`,location:`Surulere, Lagos`,price:`₦600,000/yr`,status:`verified`,image:`images/property-02.png`,description:`Cozy self-contain with running water and stable electricity.`,agent:`VerifyHomes Ltd`},{id:`3`,title:`2-Bedroom Flat`,location:`Wuse 2, Abuja`,price:`₦3,500,000/yr`,status:`pending`,image:`images/property-03.png`,description:`Modern 2 bedroom flat. Agent is currently undergoing verification. Please proceed with caution.`,agent:`New Age Real Estate`},{id:`4`,title:`3-Bedroom Apartment`,location:`GRA Phase 2, Port Harcourt`,price:`₦4,200,000/yr`,status:`scam`,image:`images/property-04.png`,description:`FLAGGED: Multiple users reported advance fee fraud for this listing. Do not pay any fees before viewing.`,agent:`Unknown`}];async function l(e){return e?(e=e.toLowerCase(),c.filter(t=>t.title.toLowerCase().includes(e)||t.location.toLowerCase().includes(e)||t.agent.toLowerCase().includes(e))):c}async function u(e){return c.find(t=>t.id===e)}function d(){let e=document.createElement(`div`);e.className=`container py-24`;let t=new URLSearchParams(window.location.search).get(`q`)||``;return e.innerHTML=`
        <h1 class="text-headline-md mb-md">Search Properties</h1>
        <p class="text-body-md text-on-surface-variant mb-lg">Search for properties and verify their legitimacy before making any payments.</p>
        
        <div class="mb-lg">
             <form id="search-form" class="search-box">
                    <span class="material-symbols-outlined icon">search</span>
                    <input id="search-input" class="text-body-md border-none outline-none flex-1 py-4" placeholder="Search Address, Property ID, Agent..." type="text" value="${t}" />
                    <button type="submit" class="text-label-bold">Search</button>
             </form>
        </div>

        <div id="results-container" class="grid md-grid-cols-4 gap-gutter mt-12 pb-12">
            <!-- Results will be loaded here -->
            <p class="text-body-md text-on-surface-variant">Loading...</p>
        </div>
    `,setTimeout(async()=>{let n=e.querySelector(`#search-form`),r=e.querySelector(`#search-input`),i=e.querySelector(`#results-container`),a=async e=>{let t=await l(e);if(t.length===0){i.innerHTML=`<p class="text-body-md text-on-surface-variant col-span-full">No properties found matching your criteria.</p>`;return}i.innerHTML=t.map(e=>o(e)).join(``)};n.addEventListener(`submit`,e=>{e.preventDefault();let t=r.value.trim();window.history.pushState({},``,`/search`+(t?`?q=${encodeURIComponent(t)}`:``)),a(t)}),await a(t)},0),e}async function f(){if(window.google&&window.google.maps)return;let e={key:``,v:`weekly`};var t,n,r,i=`The Google Maps JavaScript API`,a=`google`,o=`importLibrary`,s=`__ib__`,c=document,l=window;l=l[a]||(l[a]={});let u=l.maps||={},d=new Set,f=new URLSearchParams,p=()=>t||=new Promise(async(o,l)=>{for(r in await(n=c.createElement(`script`)),f.set(`libraries`,[...d]+``),e)f.set(r.replace(/[A-Z]/g,e=>`_`+e[0].toLowerCase()),e[r]);f.set(`callback`,a+`.maps.`+s),n.src=`https://maps.${a}apis.com/maps/api/js?`+f,u[s]=o,n.onerror=()=>t=l(Error(i+` could not load.`)),n.nonce=c.querySelector(`script[nonce]`)?.nonce||``,c.head.append(n)});u[o]||(u[o]=(e,...t)=>d.add(e)&&p().then(()=>u[o](e,...t)));try{await u[o](`maps`),await u[o](`marker`)}catch(e){console.error(`Error loading Google Maps:`,e)}}function p(){let e=document.createElement(`div`);return e.className=`container py-24`,e.innerHTML=`
        <h1 class="text-headline-md mb-md">Verification Map</h1>
        <p class="text-body-md text-on-surface-variant mb-lg">Visualizing real estate safety across regions.</p>
        
        <div id="map-wrap" class="bg-surface-container-highest border-variant rounded-xl overflow-hidden" style="width: 100%; height: 500px; position: relative;">
             <div id="actual-map" style="width: 100%; height: 100%;"></div>
        </div>
    `,setTimeout(async()=>{{let t=e.querySelector(`#map-wrap`);t&&(t.innerHTML=`
                <div style="display:flex; align-items:center; justify-content:center; height:100%; font-family:sans-serif; text-align:center;">
                    <div style="max-width:520px; padding:2rem;">
                        <h2>Google Maps API Key Required</h2>
                        <p><strong>Step 1:</strong> <a href="https://console.cloud.google.com/google/maps-apis/start" target="_blank" rel="noopener">Get an API Key</a></p>
                        <p><strong>Step 2:</strong> Add your key as a secret in AI Studio with the specific name <code>GOOGLE_MAPS_PLATFORM_KEY</code></p>
                    </div>
                </div>`);return}try{await f();let t=e.querySelector(`#actual-map`);if(!t)return;let n=new window.google.maps.Map(t,{center:{lat:6.5244,lng:3.3792},zoom:12,mapId:`DEMO_MAP_ID`,disableDefaultUI:!1}),r=[{position:{lat:6.4281,lng:3.4219},title:`Verified Agent Hub`,type:`verified`},{position:{lat:6.5,lng:3.36},title:`Scam Hotspot`,type:`scam`},{position:{lat:6.6018,lng:3.3515},title:`Unverified Area`,type:`unverified`}],i=window.google.maps.marker.AdvancedMarkerElement,a=window.google.maps.marker.PinElement;r.forEach(async e=>{let t=new a({background:e.type===`scam`?`#B3261E`:e.type===`verified`?`#4285F4`:`#F59E0B`,borderColor:`#ffffff`,glyphColor:`#ffffff`});new i({map:n,position:e.position,title:e.title,content:t.element})})}catch(e){console.error(`Failed to init map`,e)}},0),e}function m(){let e=document.createElement(`div`);return e.className=`container py-24`,e.innerHTML=`
        <div class="max-w-2xl mx-auto" style="max-width: 42rem;">
            <div class="flex items-center gap-lg mb-md">
                <div class="w-12 h-12 bg-error-container text-error rounded-full flex items-center justify-center flex-shrink-0" style="width: 3rem; height: 3rem;">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">report</span>
                </div>
                <h1 class="text-headline-md">Report a Scam</h1>
            </div>
            <p class="text-body-md text-on-surface-variant mb-lg">Your report helps protect other renters. Please provide as much detail as possible about the fraudulent listing or agent.</p>
            
            <form class="bg-surface-container-lowest p-lg border-variant rounded-xl flex flex-col gap-md">
                
                <div class="flex flex-col gap-sm">
                    <label class="block text-label-bold">Scam Type</label>
                    <select class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;">
                        <option>Advance Fee Fraud</option>
                        <option>Fake Agent / Impersonation</option>
                        <option>Bait and Switch</option>
                        <option>Multiple Payments requested</option>
                        <option>Other</option>
                    </select>
                </div>

                <div class="flex flex-col gap-sm">
                    <label class="block text-label-bold">Property Link or Address</label>
                    <input type="text" class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;" placeholder="e.g. www.example.com/property or 123 Main St">
                </div>

                <div class="flex flex-col gap-sm">
                    <label class="block text-label-bold">Agent Phone Number</label>
                    <input type="tel" class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;" placeholder="+234...">
                </div>

                <div class="flex flex-col gap-sm">
                    <label class="block text-label-bold">Description of Incident</label>
                    <textarea class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem; min-height: 150px;" placeholder="Explain what happened..."></textarea>
                </div>

                <div class="pt-4 mt-lg">
                    <button type="submit" class="w-full btn btn-primary text-label-bold bg-error">Submit Scam Report</button>
                </div>
                <p class="text-label-sm text-on-surface-variant text-center mt-4">All reports are manually reviewed by our security team before publishing.</p>
            </form>
        </div>
    `,e}function h(){let e=document.createElement(`div`);return e.className=`container py-24`,e.innerHTML=`
        <h1 class="text-headline-md mb-md">User Dashboard</h1>
        <p class="text-body-md text-on-surface-variant mb-lg">Manage your settings and view your activity.</p>
        
        <div class="grid md-grid-cols-12 gap-gutter">
            <!-- Sidebar -->
            <div class="md-col-span-3">
                <div class="dashboard-sidebar">
                    <a href="#" class="sidebar-link active">
                         <span class="material-symbols-outlined" style="font-size: 20px;">dashboard</span> <span class="text-label-bold">Overview</span>
                    </a>
                    <a href="#" class="sidebar-link">
                         <span class="material-symbols-outlined" style="font-size: 20px;">bookmark</span> <span class="text-label-bold">Saved Properties</span>
                    </a>
                    <a href="#" class="sidebar-link">
                         <span class="material-symbols-outlined" style="font-size: 20px;">history</span> <span class="text-label-bold">Search History</span>
                    </a>
                    <a href="#" class="sidebar-link">
                         <span class="material-symbols-outlined" style="font-size: 20px;">settings</span> <span class="text-label-bold">Settings</span>
                    </a>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="md-col-span-9 flex flex-col gap-gutter">
                
                <div class="dashboard-card">
                     <h2 class="text-headline-sm mb-4">Welcome back, User</h2>
                     <p class="text-body-sm text-on-surface-variant">Here is a summary of your recent interactions.</p>
                </div>

                <div class="grid md-grid-cols-2">
                     <div class="dashboard-card">
                        <div class="flex items-center gap-sm mb-4">
                            <span class="material-symbols-outlined text-primary">bookmark</span>
                            <h3 class="text-headline-sm">Saved Properties</h3>
                        </div>
                        <p class="text-body-sm text-on-surface-variant">You have 2 saved properties to review.</p>
                     </div>

                     <div class="dashboard-card">
                        <div class="flex items-center gap-sm mb-4">
                            <span class="material-symbols-outlined text-error">report</span>
                            <h3 class="text-headline-sm">My Reports</h3>
                        </div>
                        <p class="text-body-sm text-on-surface-variant">No active scam reports submitted.</p>
                     </div>
                </div>

            </div>
        </div>
    `,e}function g(){let e=document.createElement(`div`);e.className=`container py-24`;let t=new URLSearchParams(window.location.search).get(`id`);return t?(e.innerHTML=`<p class="text-body-md text-on-surface-variant">Loading property details...</p>`,setTimeout(async()=>{let n=await u(t);if(!n){e.innerHTML=`<p class="text-body-md text-on-surface-variant">Property not found.</p>`;return}let r={verified:{icon:`verified_user`,class:`bg-secondary`,label:`Verified Safe`},pending:{icon:`help`,class:`bg-amber-500`,label:`Investigation Needed`},scam:{icon:`warning`,class:`bg-error`,label:`Scam Alert`}},i=r[n.status]||r.pending;e.innerHTML=`
            <div class="mb-lg">
                <a href="/search" data-link class="text-primary hover-underline text-label-bold flex items-center gap-sm w-fit"><span class="material-symbols-outlined" style="font-size: 16px;">arrow_back</span> Back to search</a>
            </div>
            <div class="grid md-grid-cols-12 gap-gutter">
                <div class="md-col-span-8">
                    <div class="rounded-xl overflow-hidden mb-lg" style="height: 400px; background-image: url('${n.image}'); background-size: cover; background-position: center; border: 1px solid var(--color-outline-variant);"></div>
                    
                    <div class="flex justify-between items-start mb-md">
                        <div>
                            <h1 class="text-headline-md mb-sm">${n.title}</h1>
                            <p class="text-body-lg text-on-surface-variant flex items-center gap-sm">
                                <span class="material-symbols-outlined" style="font-size: 20px;">location_on</span> ${n.location}
                            </p>
                        </div>
                        <h2 class="text-display-sm text-primary">${n.price}</h2>
                    </div>

                    <div class="bg-surface-container-low p-lg rounded-xl mb-lg border-variant">
                        <h3 class="text-headline-sm mb-sm">Description</h3>
                        <p class="text-body-md text-on-surface-variant">${n.description}</p>
                    </div>
                </div>

                <div class="md-col-span-4">
                    <div class="bg-surface-container-lowest p-lg rounded-xl border-variant mb-md flex flex-col gap-md">
                        <div class="property-badge ${i.class} w-fit mx-auto" style="position: static; font-size: 16px; padding: 0.5rem 1rem;">
                            <span class="material-symbols-outlined" style="font-size: 20px; font-variation-settings: 'FILL' 1;">${i.icon}</span> <span class="text-label-bold text-white">${i.label}</span>
                        </div>
                        <div class="text-center mt-md">
                            <h4 class="text-title-md">${n.agent}</h4>
                            <p class="text-body-sm text-on-surface-variant mt-sm">Listed Agent</p>
                        </div>
                        
                        <div class="mt-lg flex flex-col gap-sm">
                            <button class="btn btn-primary text-label-bold w-full">Contact Agent</button>
                            <a href="/report" data-link class="btn btn-outline-error text-label-bold w-full text-center">Report Issue</a>
                        </div>
                    </div>
                </div>
            </div>
        `},0),e):(e.innerHTML=`<p class="text-body-md text-on-surface-variant">Property not found.</p>`,e)}var _={login(e,t){return e&&t?(localStorage.setItem(`isAuthenticated`,`true`),localStorage.setItem(`userEmail`,e),window.dispatchEvent(new Event(`authChange`)),!0):!1},register(e,t,n){return e&&t&&n?(localStorage.setItem(`isAuthenticated`,`true`),localStorage.setItem(`userEmail`,t),localStorage.setItem(`userName`,e),window.dispatchEvent(new Event(`authChange`)),!0):!1},logout(){localStorage.removeItem(`isAuthenticated`),localStorage.removeItem(`userEmail`),localStorage.removeItem(`userName`),window.dispatchEvent(new Event(`authChange`))},isAuthenticated(){return localStorage.getItem(`isAuthenticated`)===`true`},getUser(){return{email:localStorage.getItem(`userEmail`),name:localStorage.getItem(`userName`)||`User`}}};function v(){let e=document.createElement(`div`);return e.className=`container py-24 flex items-center justify-center`,e.innerHTML=`
        <div class="bg-surface-container-lowest p-lg rounded-xl border-variant w-full" style="max-width: 24rem;">
            <div class="text-center mb-lg">
                <div class="flex items-center justify-center gap-sm mb-sm text-primary">
                    <span class="material-symbols-outlined" style="font-size: 2rem;">shield</span>
                </div>
                <h1 class="text-headline-md">Welcome Back</h1>
                <p class="text-body-md text-on-surface-variant mt-1">Sign in to your account</p>
            </div>
            
            <form id="login-form" class="flex flex-col gap-md">
                <div class="flex flex-col gap-sm">
                    <label class="text-label-bold">Email</label>
                    <input type="email" id="email" class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;" required />
                </div>
                
                <div class="flex flex-col gap-sm">
                    <label class="text-label-bold">Password</label>
                    <input type="password" id="password" class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;" required />
                </div>
                
                <button type="submit" class="btn btn-primary text-label-bold w-full mt-sm">Sign In</button>
            </form>
            
            <p class="text-body-sm text-center mt-lg text-on-surface-variant">
                Don't have an account? <a href="/register" data-link class="text-primary hover:underline text-label-bold">Sign up</a>
            </p>
        </div>
    `,setTimeout(()=>{let t=e.querySelector(`#login-form`);t.addEventListener(`submit`,e=>{e.preventDefault();let n=t.querySelector(`#email`).value,r=t.querySelector(`#password`).value;_.login(n,r)&&(window.history.pushState(null,null,`/dashboard`),window.dispatchEvent(new Event(`popstate`)))})},0),e}function y(){let e=document.createElement(`div`);return e.className=`container py-24 flex items-center justify-center`,e.innerHTML=`
        <div class="bg-surface-container-lowest p-lg rounded-xl border-variant w-full" style="max-width: 24rem;">
            <div class="text-center mb-lg">
                <div class="flex items-center justify-center gap-sm mb-sm text-primary">
                    <span class="material-symbols-outlined" style="font-size: 2rem;">shield</span>
                </div>
                <h1 class="text-headline-md">Create Account</h1>
                <p class="text-body-md text-on-surface-variant mt-1">Join SafeRent NG</p>
            </div>
            
            <form id="register-form" class="flex flex-col gap-md">
                <div class="flex flex-col gap-sm">
                    <label class="text-label-bold">Full Name</label>
                    <input type="text" id="name" class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;" required />
                </div>

                <div class="flex flex-col gap-sm">
                    <label class="text-label-bold">Email</label>
                    <input type="email" id="email" class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;" required />
                </div>
                
                <div class="flex flex-col gap-sm">
                    <label class="text-label-bold">Password</label>
                    <input type="password" id="password" class="w-full p-md border rounded outline-none search-box" style="padding: 0.75rem;" required />
                </div>
                
                <button type="submit" class="btn btn-primary text-label-bold w-full mt-sm">Sign Up</button>
            </form>
            
            <p class="text-body-sm text-center mt-lg text-on-surface-variant">
                Already have an account? <a href="/login" data-link class="text-primary hover:underline text-label-bold">Sign in</a>
            </p>
        </div>
    `,setTimeout(()=>{let t=e.querySelector(`#register-form`);t.addEventListener(`submit`,e=>{e.preventDefault();let n=t.querySelector(`#name`).value,r=t.querySelector(`#email`).value,i=t.querySelector(`#password`).value;_.register(n,r,i)&&(window.history.pushState(null,null,`/dashboard`),window.dispatchEvent(new Event(`popstate`)))})},0),e}var b={"/":s,"/search":d,"/verify":p,"/report":m,"/dashboard":h,"/property":g,"/login":v,"/register":y};function x(){let e=()=>{let e=b[window.location.pathname]||s,t=document.getElementById(`router-outlet`);t&&(t.innerHTML=``,t.appendChild(e()))};window.addEventListener(`popstate`,e),document.body.addEventListener(`click`,t=>{if(t.target.matches(`[data-link]`)){t.preventDefault();let n=t.target.getAttribute(`href`);window.history.pushState(null,null,n),e()}}),e()}function S(){let e=()=>{let e=`
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
                        ${_.isAuthenticated()?`<button id="logout-btn" class="btn btn-outline-error text-label-bold font-label-bold">Logout</button>`:`<a href="/login" data-link class="btn btn-primary text-label-bold font-label-bold">Sign In</a>`}
                    </div>
                </div>
            </header>
        `,t=document.getElementById(`nav-container`);if(t){t.innerHTML=e;let n=t.querySelector(`#logout-btn`);n&&n.addEventListener(`click`,()=>{_.logout(),window.history.pushState(null,null,`/`),window.dispatchEvent(new Event(`popstate`))})}};window.addEventListener(`authChange`,e),e()}function C(){return`
        <footer class="footer">
            <div class="container grid md-grid-cols-4 gap-gutter mb-lg">
            <div class="md-col-span-1">
                <div class="flex items-center gap-base mb-md">
                    <span class="text-headline-sm font-headline-sm text-primary">SafeRent NG</span>
                </div>
                <p class="text-body-sm text-on-surface-variant">Vigilant and professional rental protection for Nigerians.</p>
            </div>
            <div>
                <h5 class="text-label-bold text-on-surface mb-md block">Quick Links</h5>
                <ul class="footer-links">
                    <li><a class="text-body-sm text-on-surface-variant" href="#">About Us</a></li>
                    <li><a class="text-body-sm text-on-surface-variant" href="#">Agent Verification</a></li>
                    <li><a class="text-body-sm text-on-surface-variant" href="#">Contact Support</a></li>
                </ul>
            </div>
            <div>
                <h5 class="text-label-bold text-on-surface mb-md block">Legal</h5>
                <ul class="footer-links">
                    <li><a class="text-body-sm text-on-surface-variant" href="#">Terms of Service</a></li>
                    <li><a class="text-body-sm text-on-surface-variant" href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h5 class="text-label-bold text-on-surface mb-md block">Newsletter</h5>
                <p class="text-body-sm text-on-surface-variant mb-md">Stay informed about new scam alerts.</p>
                <div class="newsletter-box">
                    <input class="text-label-sm" placeholder="Email" type="email"/>
                    <button class="text-label-bold">Join</button>
                </div>
            </div>
        </div>
        <div class="container text-center pt-md border-variant" style="border-top-width: 1px;">
            <p class="text-label-sm text-on-surface-variant pt-base">© 2024 SafeRent NG. Protecting Nigerian Renters.</p>
        </div>
        </footer>
        `}async function w(){await i(),a()}w(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`app`),t=document.createElement(`div`);t.id=`nav-container`,e.appendChild(t),S();let n=document.createElement(`main`);n.id=`router-outlet`,n.className=`pt-20`,e.appendChild(n),e.innerHTML+=C(),x(),document.querySelectorAll(`button`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{e.style.transform=`scale(0.98)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=`scale(1)`})})});