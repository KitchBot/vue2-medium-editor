import axios from 'axios';

const BASE_URL = 'http://www.youtube.com/oembed';

export default async function (url) {
    const result = await axios({
        method: 'GET',
        url: BASE_URL,
        params: {
            url: url,
            format: 'json',
        }
    })
    return result.data.html
}