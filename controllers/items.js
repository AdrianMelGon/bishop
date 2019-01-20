const { Router } = require('express');
const axios = require('axios');


const restClashApi = axios.create(
  { baseURL: 'http://www.clashapi.xyz/api/cards' }
  )
  
  
  function getClashInfo() {
    return restClashApi.get()
  }


// let pokeArr = []

// function getPokeApi(pokeId){
//   return axios({
//     url: `https://pokeapi.co/api/v2/pokemon/${pokeId}/`,
//     dataType:'json',
//   }).then(data => {
//     pokeArr.push(data.data.id)
//   }).catch( e  => console.log(e));
// }

// function promPokeInfo(){
//   for(var i = 1; i <= 900; i++){
//     getPokeApi(i)}
//     return pokeArr
// }





module.exports = new Router()
  .get('/', (req, res) => {
    let promClashInfo = new Promise(function (resolve, reject) {
      let clashInfo = getClashInfo()
      resolve(clashInfo)
    })
    promClashInfo.then(function (value) {
      res.send(value.data.map((e) => {
        return {
          name: e.name,
          id: e._id
        }
      })
      )
    })
  })
