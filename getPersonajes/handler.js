const axios = require('axios');

const apiPersonajesSW = 'https://swapi.dev/api/people'
const traducciones = {
    name: 'nombre',
    height: 'altura',
    mass: 'masa',
    hair_color: 'color_cabello',
    skin_color: 'color_piel',
    eye_color: 'color_ojos',
    birth_year: 'cumpleanos',
    gender: 'genero',
    homeworld: 'mundo_natal',
    films: 'peliculas',
    species: 'especies',
    vehicles: 'vehiculos',
    starships: 'naves_estelares',
    created: 'creado',
    edited: 'editado',
    url: 'url'
  };

const getPersonajes = async (event, context) => {
    
    try {
        const response = await axios.get(apiPersonajesSW);
        const data = response.data['results']
        console.log(data);

        const objetoTraducido = [];
        for (let index = 0; index < data.length; index++) {
            objetoTraducido.push(traducirClaves(data[index], traducciones))
        }
        
        return {
          statusCode: 200,
          body: JSON.stringify(objetoTraducido)
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Error al consumir la API' })
        };
      }
}

function traducirClaves(objeto, traducciones) {
    return Object.keys(objeto).reduce((nuevoObjeto, clave) => {
      if (traducciones.hasOwnProperty(clave)) {
        nuevoObjeto[traducciones[clave]] = objeto[clave];
      } else {
        nuevoObjeto[clave] = objeto[clave];
      }
      return nuevoObjeto;
    }, {});
  }

module.exports = {
    getPersonajes
}
