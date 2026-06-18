import { authService } from '../api/authService.js';

export function renderRegister() {
    const container = document.createElement('div');
    container.className = 'container py-24 flex items-center justify-center';
    
    container.innerHTML = `
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
    `;

    setTimeout(() => {
        const form = container.querySelector('#register-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const password = form.querySelector('#password').value;
            
            if (authService.register(name, email, password)) {
                window.history.pushState(null, null, '/dashboard');
                window.dispatchEvent(new Event('popstate'));
            }
        });
    }, 0);

    return container;
}
