import axios from 'axios';
axios.defaults.headers.common['X-WP-Nonce'] = wpApiSettings.nonce;

export default {
    settings() {
        return {
            getAll: () => axios.get('/wp-json/wp/v2/settings'),
        }
    },
    users() {
        return {
            getAll: () => axios.get('/wp-json/wp/v2/users'),
        }
    },
}
