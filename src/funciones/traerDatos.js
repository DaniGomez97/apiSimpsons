import React from 'react'

import axios from 'axios'

const traerDatos = async(setter) => {
  try{
    const peticion = await axios.get('https://apisimpsons.fly.dev/api/personajes?limit=100&page=1')
      setter(peticion.data.docs)

  }catch (error){console.log("Error", error)}   
}

export default traerDatos