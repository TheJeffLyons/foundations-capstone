const req = require("express/lib/request");
const posts = require('../db.json');
const users = require('../user.json');
const bcrypt = require(`bcrypt`);
const proPic = require('../profilePic.json')
var where = require("lodash.where");
var session = require('express-session');
let globalId = 8
let globalUserId = 2
let globalPicId = 2

module.exports = {
    getPosts: (req, res) => res.status(200).send(posts),
    getPic: (req, res) => res.status(200).send(proPic),

    createPosts: (req, res) => {
        let { message, coin, photo, userName, proPic } = req.body
        let newPosts = {
            id: globalId,
            message,
            photo,
            coin,
            userName,
            proPic
          }

       posts.push(newPosts)
        globalId++
        console.log(message)
        console.log(posts)
        
    },

    createPic: (req, res) => {
      let { pic } = req.body
      let newPosts = {
          id: globalPicId,
          pic
        }

     proPic.unshift(newPosts)
      globalPicId++
      
      console.log(proPic)
      
  },

    login: (req, res) => {
        const { email, password } = req.body
        
        for (let i = 0; i < users.length; i++) {
          if (users[i].email === email) {
            const authenticated = bcrypt.compareSync(password, users[i].passwordHash)

            if (authenticated) {
              let userToReturn = {...users[i]}
              delete userToReturn.passwordHash
               res.status(200).send(userToReturn)             
            }
            
          }
          console.log(users)
        }
        res.status(400).send("User not found.")
        
      },
  
      register: (req, res) => {
        const { userName, firstName, lastName, email, password } = req.body
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        let user = {
          id: globalUserId, 
          userName, 
          firstName,
          lastName,
          email,
          passwordHash
        }
        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.passwordHash
        res.status(200).send(userToReturn)
        globalUserId++
        console.log(users)
    },

      getBitcoin: (req, res) =>{
        const result = where(posts, {"coin": "bitcoin"}); 
        res.status(200).send(result)
   },

      getAvalanche: (req, res) =>{
        const result = where(posts, {"coin": "avalanche"}); 
        res.status(200).send(result)
 },

      getEthereum: (req, res) =>{
        const result = where(posts, {"coin": "ethereum"}); 
        res.status(200).send(result)
},
      getShiba: (req, res) =>{
        const result = where(posts, {"coin": "shiba"}); 
        res.status(200).send(result)
},
getDoge: (req, res) =>{
  const result = where(posts, {"coin": "doge"}); 
  res.status(200).send(result)
},

getCardano: (req, res) =>{
  const result = where(posts, {"coin": "cardano"}); 
  res.status(200).send(result)
},

getXrp: (req, res) =>{
  const result = where(posts, {"coin": "xrp"}); 
  res.status(200).send(result)
},

getSolana: (req, res) =>{
  const result = where(posts, {"coin": "solana"}); 
  res.status(200).send(result)
},

getPolkadot: (req, res) =>{
  const result = where(posts, {"coin": "polkadot"}); 
  res.status(200).send(result)
},

getBinanceCoin: (req, res) =>{
  const result = where(posts, {"coin": "binanceCoin"}); 
  res.status(200).send(result)
},


}
