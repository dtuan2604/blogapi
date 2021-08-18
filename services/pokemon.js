const superagent = require('superagent')
const uniqBy = require('lodash/uniqBy')


const Pokemon = async (req, res, next) => {
  const ids = req.body.ids

  const result = await Promise.all(ids.map(async id =>{
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
      const poke = await superagent.get(url)
      const types = poke.body.types.map(e => {return e.type.name})
      return{
        id: poke.body.id,
        name: poke.body.name, 
        types,
        availability: true,
        img: poke.body.sprites.front_default
      }
    }catch(error){
      console.log(error)
      return{
        id,
        name: 'notfound'
      }
    }
  }))

  const pokeData = uniqBy(result, 'id')
  
  res.status(200).send(pokeData)
  next()
}
module.exports = Pokemon