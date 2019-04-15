import axios from 'axios';

const BASE_URL = 'https://api.instagram.com/oembed/';

export default async function (url, hidecaption) {
    const result = await axios({
        method: 'GET',
        url: BASE_URL,
        params: {
            url: url,
            omitscript: true,
            hidecaption: hidecaption,
        }
    })
    return result.data.html
}