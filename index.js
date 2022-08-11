const axios = require('axios')

async function reqData(){
    const response = await axios.post('https://newsletter.pukulenam.id/campaigns-rss?a=gMUkVEEzvMQh1VqoNTyvyUBkHbxXA2&i=1')
    console.log(response.data);
}
reqData()