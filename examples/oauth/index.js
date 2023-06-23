import express from 'express'
import fetch from 'node-fetch'

const clientID = "6166265e1289de280464"
const clientSecret = "cd404d2df036e1a632f6bcf35e9844ad65a6ae5a"


const app = express()

app.get('/login', async (req, res) => {

    const url = new URL('https://github.com/login/oauth/authorize')

    url.searchParams.set('client_id', clientID)
    url.searchParams.set('redirect_uri', 'http://localhost:3000/callback')
    url.searchParams.set('scope', 'user:email repo')

    res.redirect(url.toString())
})

app.get('/callback', async (req, res) => {
    const code = req.query.code

    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
            client_id: clientID,
            client_secret: clientSecret,
            code: code
        })
    })

    const data = await response.json()

    const accessToken = data.access_token

    const userInfoResponse = await fetch('https://api.github.com/user/emails', {
        headers: {'Authorization': `Bearer ${accessToken}`}
    })

    const userInfo = await userInfoResponse.json()

    res.json(userInfo)
})

app.listen(3000)