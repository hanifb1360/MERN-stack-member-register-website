import axios from 'axios';

export async function getData (url) {
    let response = await axios.get(url);
    return response.data
}