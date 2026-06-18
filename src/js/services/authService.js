import { storageOption } from './localStorage.js';

export const authService = {
    isAuthenticated: () => !!storageOption.get('user_token'),
    login: (token) => storageOption.set('user_token', token),
    logout: () => storageOption.remove('user_token')
};
