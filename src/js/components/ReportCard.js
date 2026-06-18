export function ReportCard(report) {
    return `
        <div class="bg-surface-container-lowest border-error py-base px-stack-lg rounded-xl flex flex-col md-flex-row justify-between items-center gap-gutter">
            <div class="flex items-center gap-lg">
                <div class="w-12 h-12 bg-error-container text-error rounded-full flex items-center justify-center flex-shrink-0" style="width: 3rem; height: 3rem;">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">warning</span>
                </div>
                <div>
                    <h4 class="text-headline-sm text-error">${report.title}</h4>
                    <p class="text-body-sm text-on-surface-variant">${report.description}</p>
                    <span class="text-label-sm block mt-lg text-on-surface-variant uppercase inline-block">${report.timeReported}</span>
                </div>
            </div>
            <div class="bg-error text-label-sm py-2 px-stack-lg rounded">SCAM ALERT</div>
        </div>
    `;
}


