export const authService = {
    login(email, password) {
        if (email && password) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', email);
            
            // Dispatch a custom event to notify listeners (e.g. Navigation)
            window.dispatchEvent(new Event('authChange'));
            return true;
        }
        return false;
    },
    
    register(name, email, password) {
        if (name && email && password) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name);
            window.dispatchEvent(new Event('authChange'));
            return true;
        }
        return false;
    },
    
    logout() {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        window.dispatchEvent(new Event('authChange'));
    },
    
    isAuthenticated() {
        return localStorage.getItem('isAuthenticated') === 'true';
    },

    getUser() {
        return {
            email: localStorage.getItem('userEmail'),
            name: localStorage.getItem('userName') || 'User'
        };
    }
};
