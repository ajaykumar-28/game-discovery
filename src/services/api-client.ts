import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2f177854352a4c0fb4debed60f0031d3'
    }
})