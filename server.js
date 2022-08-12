const express = require('express')
const app = express()
const path = require('path')
const Parser = require('rss-parser');
const parser = new Parser();

let latestLink = ''
const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

async function getLatestLink(){
    let feed = await parser.parseURL('https://newsletter.pukulenam.id/campaigns-rss?a=gMUkVEEzvMQh1VqoNTyvyUBkHbxXA2&i=1');
    return feed.items[0].link
};

app.get('/', async(req,res) => {
    latestLink = await getLatestLink()
    res.render('index',{
        latestLink: latestLink
    })
})

async function startServer(){
    app.listen(PORT, ()=> console.log(`Runing at port ${PORT}`))
}
startServer()







