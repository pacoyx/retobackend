
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.SP_I_DATA_USER_ITEM = async (query) => {
    console.log("[dynamoRepository] Inicio registro usuario");
    const { id, name, email } = query;

    const params = {
        TableName: 'users',
        Item: {
            id,
            name,
            email
        }
    };

    try {
        await dynamoDb.put(params).promise();
        resolve({
            estado: true
        });
    } catch (error) {
        resolve({
            estado: false
        });
    }

}

exports.SP_S_DATA_USER_ITEM = async (id) => {
    console.log("[dynamoRepository] Inicio listar usuario");
    const params = {
        TableName: 'users',
        Key: {
          id
        }
      };
    
      const user = await dynamoDb.get(params).promise();
    
      if (!user.Item) {
        return {
          estado: false,
          body: JSON.stringify({
            message: 'User not found'
          })
        };
      }
    
      return {
        estado: true,
        data: JSON.stringify(user.Item)
      };
}