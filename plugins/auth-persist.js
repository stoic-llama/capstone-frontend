export default function ({ store, app }) {
    // Only run on client-side
    if (process.client) {
        // When the page loads/refreshes
        window.onNuxtReady(() => {
            // Get token from localStorage
            const token = localStorage.getItem('authToken');
            if (token) {
                store.commit('UPDATE_TOKEN', token);
                
                // Get other user data from localStorage
                const email = localStorage.getItem('userEmail');
                const firstName = localStorage.getItem('userFirstName');
                const lastName = localStorage.getItem('userLastName');
                
                // Update store with user data
                store.commit('UPDATE_EMAIL', email);
                store.commit('UPDATE_FIRST_NAME', firstName);
                store.commit('UPDATE_LAST_NAME', lastName);
            }
        });
    }
} 