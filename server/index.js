const express = require('express');
const cors = require('cors');
const app = express();
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
var session = require('express-session');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const {
    getPosts,
    createPosts,
    login,
    register,
    getBitcoin,
    createPic,
    getPic,
    getAvalanche,
    getEthereum,
    getShiba,
    getDoge,
    getCardano,
    getXrp,
    getSolana,
    getPolkadot,
    getBinanceCoin
    
} = require('../controllers/controller')

app.get(`/api/posts`, getPosts)
app.post(`/api/posts`, createPosts)
app.post(`/api/login`, login)
app.post(`/api/register`, register)
app.post(`/api/account`, createPic)
app.get(`/api/account`, getPic)


async() => {
  let data = await CoinGeckoClient.ping();
  console.log(data)
}


//coin calls below
app.get(`/api/bitcoin`, getBitcoin)
app.post(`/api/bitcoin`, createPosts)
app.get(`/api/avalanche`, getAvalanche)
app.post(`/api/avalanche`, createPosts)
app.get(`/api/ethereum`, getEthereum)
app.post(`/api/ethereum`, createPosts)
app.get(`/api/shiba`, getShiba)
app.post(`/api/shiba`, createPosts)
app.get(`/api/doge`, getDoge)
app.post(`/api/doge`, createPosts)
app.get(`/api/cardano`, getCardano)
app.post(`/api/cardano`, createPosts)
app.get(`/api/xrp`, getXrp)
app.post(`/api/xrp`, createPosts)
app.get(`/api/solana`, getSolana)
app.post(`/api/solana`, createPosts)
app.get(`/api/polkadot`, getPolkadot)
app.post(`/api/polkadot`, createPosts)
app.get(`/api/binanceCoin`, getBinanceCoin)
app.post(`/api/binanceCoin`, createPosts)



app.listen(2000, () => console.log('Running on port 2000'))

