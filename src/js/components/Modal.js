export function Modal(title, content) {
    return `
        <div class="flex items-center justify-center p-md" style="position: fixed; inset: 0; z-index: 50; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);">
            <div class="bg-surface-container-lowest rounded-xl border-variant w-full" style="max-width: 28rem; border-width: 1px;">
                <div class="p-lg border-variant flex justify-between items-center" style="border-bottom-width: 1px;">
                    <h2 class="text-headline-sm text-on-surface">${title}</h2>
                    <button class="material-symbols-outlined text-on-surface-variant">close</button>
                </div>
                <div class="p-lg text-body-md text-on-surface-variant">
                    ${content}
                </div>
            </div>
        </div>
    `;
}
