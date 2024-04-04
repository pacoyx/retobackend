const dynamoRepo = require('../repository/dynamoRepository');

exports.RegistrarUsuario = (body) => {
    console.log("[dynamoService] Inicio registro usuario");
    return new Promise(async (resolve, _) => {
        const resp = await dynamoRepo.SP_I_DATA_USER_ITEM(body);
        return resolve(resp);
    });
}

exports.ListarUsuario = (id) => {
    console.log("[dynamoService] Inicio listar usuario");
    return new Promise(async (resolve, _) => {
        const resp = await dynamoRepo.SP_S_DATA_USER_ITEM(id);
        return resolve(resp);
    });
}