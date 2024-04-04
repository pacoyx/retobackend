const swapiService = require('../services/swapiService');


exports.RegistrarUsuario = async function (body) {
    console.log("[swapiController] Inicio registro usuario");
    return await swapiService.RegistrarUsuario(body);
}

exports.ListarUsuario = async function () {
    console.log("[swapiController] Inicio listar usuario");
    return await swapiService.ListarUsuario();
}

exports.ListarPeople = async function (id) {
    console.log("[swapiController] Inicio listar people");
    return await swapiService.getPeople(id);
}