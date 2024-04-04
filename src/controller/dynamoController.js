const dynamoService = require('../services/dynamoService');

exports.RegistrarUsuario = async function (body) {
    console.log("[dynamoController] Inicio registro usuario");
    return await dynamoService.RegistrarUsuario(body);
}

exports.ListarUsuario = async function (id) {
    console.log("[dynamoController] Inicio listar usuario");
    return await dynamoService.ListarUsuario(id);
}