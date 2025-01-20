// src/utils/auth.js

export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return token && user ? { token, user: JSON.parse(user) } : null;
    }
    return null;
};
