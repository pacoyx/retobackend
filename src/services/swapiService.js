const swapiRepo = require('../repository/swapiRepository');
const axios = require('axios');

exports.RegistrarUsuario = function (body) {
    console.log("[swapiService] Inicio registro usuario");
    return new Promise(async (resolve, _) => {
        const resp = await swapiRepo.SP_I_DATA_USER(body);
        return resolve(resp);
    });
}


exports.ListarUsuario = function () {
    console.log("[swapiService] Inicio listar usuario");
    return new Promise(async (resolve, _) => {
        const resp = await swapiRepo.SP_S_DATA_USER();
        return resolve(resp);
    });
}

exports.getPeople = async (id) => {
    console.log("[swapiService] getPeople " + id);
    try {
        const response = await axios.get('https://swapi.py4e.com/api/people/'+id+'/');
        // console.log('response axios =>', response);

        rec = response.data;
        const newJson = 
             {
                "nombre": rec.name,
                "peso": rec.height,
                "masa": rec.mass,
                "color_cabello": rec.hair_color,
                "color_piel": rec.skin_color,
                "color_ojo": rec.eye_color,
                "año_nacimiento": rec.birth_year,
                "genero": rec.gender,
                "mundo_natal": rec.homeworld,
                "peliculas": rec.films,
                "especies": rec.species,
                "vehiculos": rec.vehicles,
                "naves_estelares": rec.starships,
                "creado": rec.created,
                "editado": rec.edited,
                "url": rec.url
            }
        



        return { estado: true, data: newJson };
    } catch (error) {
        console.error('error axios=>', error);
        return { estado: false, data: 'error:' + error };
    }
}