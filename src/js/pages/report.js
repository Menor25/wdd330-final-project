export function renderReport() {
    const container = document.createElement('div');
    container.className = 'container py-24';
    container.innerHTML = `
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
    `;
    return container;
}
