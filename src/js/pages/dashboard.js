export function renderDashboard() {
    const container = document.createElement('div');
    container.className = 'container py-24';
    container.innerHTML = `
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
    `;
    return container;
}
