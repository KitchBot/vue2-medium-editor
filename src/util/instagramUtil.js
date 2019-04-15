import axios from 'axios';

const BASE_URL = 'https://api.instagram.com/oembed/';

export default async function (url) {
    const result = await axios({
        method: 'GET',
        url: BASE_URL,
        params: {
            url: url,
            omitscript: true,
            hidecaption: false,
            maxwidth: '900'
        }
    })
    console.log(result.data)
    return result.data.html
}