const pool_aurora = require("../db/mysql/auroraConnection");

exports.SP_I_DATA_USER = function (query) {
    console.log("[swapiRepository] Inicio registro usuario");
    return new Promise(async (resolve, _) => {
        const SP_PARAMETERS = [
            query.nombre,
            query.apellido,
            query.area,
            query.puesto,
            query.estado
        ];
        const SP_QUERY = "CALL SP_I_DATA_USER(?,?,?,?,?);";
        try {
            const [rows] = await pool_aurora.queryAsync(
                SP_QUERY,
                SP_PARAMETERS
            );
            if (rows.length > 0) {
                resolve({
                    estado: true,
                    data: rows[0],
                });
            } else {
                resolve({
                    estado: false,
                    data: [],
                });
            }
        } catch (err) {
            console.log("Catch Error InsertDataUser =>", err);
            resolve({
                estado: false,
                data: [],
                error: err,
            });
        }
    });
};


exports.SP_S_DATA_USER = function () {
    console.log("[swapiRepository] Inicio select usuario");
    return new Promise(async (resolve, _) => {
        const SP_PARAMETERS = [];
        const SP_QUERY = "CALL SP_S_DATA_USER();";
        try {
            const [rows] = await pool_aurora.queryAsync(
                SP_QUERY,
                SP_PARAMETERS
            );
            if (rows.length > 0) {
                resolve({
                    estado: true,
                    data: rows[0],
                });
            } else {
                resolve({
                    estado: false,
                    data: [],
                });
            }
        } catch (err) {
            console.log("Catch Error SelectDataUser =>", err);
            resolve({               
                estado: false,
                data: [],
                error: err,
            });
        }
    });
};
