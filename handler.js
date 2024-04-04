'use strict';

const swapiController = require('./src/controller/swapiController');
const dynamoController = require('./src/controller/dynamoController');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.create = async (event) => {
  // DESCOMENTAR PARA GRABAR EN DYNAMODB
  // const respDynamo =  await swapiController.RegistrarUsuario(JSON.parse(event.body));
  const resp = await swapiController.RegistrarUsuario(JSON.parse(event.body));

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Usuario creado correctamente'
    })
  };
};

module.exports.read = async (event) => {

  // DESCOMENTAR PARA LISTAR DE DYNAMODB
  // const { id } = event.pathParameters;
  // const respDynamo = await dynamoController.ListarUsuario (id);

  const resp = await swapiController.ListarUsuario();
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Usuario creado correctamente',
      data: resp
    })
  };
};

module.exports.readSwapi = async (event) => {
  const { id } = event.pathParameters;
  const resp = await swapiController.ListarPeople(id);
  return {
    statusCode: 201,    
    body: JSON.stringify({
      message: 'Listado de people swapi correctamente',
      data: resp.data
    })
  };
}