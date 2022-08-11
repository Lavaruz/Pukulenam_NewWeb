const express = require('express')
const app = express()
const path = require('path')
const Parser = require('rss-parser');
const parser = new Parser();

let latestLink = ''

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

async function getLatestLink(){
    let feed = await parser.parseURL('https://newsletter.pukulenam.id/campaigns-rss?a=gMUkVEEzvMQh1VqoNTyvyUBkHbxXA2&i=1');
    return feed.items[0].link
};

app.get('/', async(req,res) => {
    res.render('index',{
        latestLink: latestLink
    })
    latestLink = await getLatestLink()
})

async function startServer(){
    app.listen(3000, ()=> console.log('Runing at port 3000'))
}
startServer()







