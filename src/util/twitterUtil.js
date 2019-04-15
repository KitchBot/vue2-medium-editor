import axios from 'axios';

const BASE_URL = 'https://publish.twitter.com/oembed';

export default async function (url) {
    const result = await axios({
        method: 'GET',
        url: BASE_URL,
        params: {
            url: url
        }
    })
    console.log(result)
    return result.data.html
}