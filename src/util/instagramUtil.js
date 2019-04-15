import axios from 'axios';

const BASE_URL = 'https://api.instagram.com/oembed/';

export default async function (url) {
    const result = await axios({
        method: 'GET',
        url: BASE_URL,
        params: {
            url: url,
            omitscript: true,
            hidecaption: true,
            maxwidth: '900'
        }
    })
    return result.data.html
}