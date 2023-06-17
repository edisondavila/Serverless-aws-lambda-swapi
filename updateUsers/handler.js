const aws = require("aws-sdk")

let dynamoDBClientParams = {}

if (process.env.IS_OFFLINE) {
    dynamoDBClientParams = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
        secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
    }
}
const dynamodb = new aws.DynamoDB.DocumentClient(dynamoDBClientParams)

const updateUsers = async (event, context) => {
    let userId = event.pathParameters.id

    const item = JSON.parse(event.body)

    const params = {
        TableName: 'usersTable',
        Key: {pk: userId},
        UpdateExpression: 'set #nombre = :nombre, #altura = :altura, #masa = :masa, #color_cabello = :color_cabello, #color_piel = :color_piel, #color_ojos = :color_ojos, #cumpleanos = :cumpleanos, #genero = :genero, #mundo_natal = :mundo_natal, #peliculas = :peliculas, #especies = :especies, #vehiculos = :vehiculos, #naves_estelares = :naves_estelares', // Expresión de actualización para establecer los nuevos valores
        ExpressionAttributeNames: {
          '#nombre': 'nombre',
          '#altura': 'altura',
          '#masa': 'masa',
          '#color_cabello': 'color_cabello',
          '#color_piel': 'color_piel',
          '#color_ojos': 'color_ojos',
          '#cumpleanos': 'cumpleanos',
          '#genero': 'genero',
          '#mundo_natal': 'mundo_natal',
          '#peliculas': 'peliculas',
          '#especies': 'especies',
          '#vehiculos': 'vehiculos',
          '#naves_estelares': 'naves_estelares',
        },
        ExpressionAttributeValues: {
          ':nombre': item.nombre,
          ':altura': item.altura,
          ':masa': item.masa,
          ':color_cabello': item.color_cabello,
          ':color_piel': item.color_piel,
          ':color_ojos': item.color_ojos,
          ':cumpleanos': item.cumpleanos,
          ':genero': item.genero,
          ':mundo_natal': item.mundo_natal,
          ':peliculas': item.peliculas,
          ':especies': item.especies,
          ':vehiculos': item.vehiculos,
          ':naves_estelares': item.naves_estelares,
        },
        ReturnValues: 'ALL_NEW'
      };
    
    try {
      return dynamodb.update(params).promise().then(res => {
        console.log(res)        
        return {
            "statusCode": 200,
            "body": JSON.stringify({ message: 'Actualización exitosa','user': res.Attributes })
        }
    })
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error al actualizar el registro' }),
      };
    }
    
}

module.exports = {
    updateUsers
}
