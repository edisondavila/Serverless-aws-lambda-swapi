# Serverless-aws-lambda-swapi

## Endpoints

- **GET - Obtener los personajes desde la SWAPI traducidos a español**
  - URL: [https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/personajes](https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/personajes)

- **POST - Crear un personaje en nuestra base de datos de DynamoDB**
  - URL: [https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users](https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users)
  - Body:
    ```json
    {
        "nombre": "Luke Skywalker",
        "altura": "172",
        "masa": "77",
        "color_cabello": "blond",
        "color_piel": "fair",
        "color_ojos": "blue",
        "cumpleanos": "19BBY",
        "genero": "male",
        "mundo_natal": "https://swapi.dev/api/planets/1/",
        "peliculas": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "especies": [],
        "vehiculos": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "naves_estelares": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "creado": "2014-12-09T13:50:51.644000Z",
        "editado": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    }
    ```

- **GET - Obtener todos los personajes en nuestra base de datos de DynamoDB**
  - URL: [https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users](https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users)

- **GET - Obtener un usuario de nuestra base de datos de DynamoDB con un ID**
  - URL: [https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users/{id}](https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users/{id})

- **PATCH - Actualizar un usuario en nuestra base de datos de DynamoDB con un ID**
  - URL: [https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users/{id}](https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users/{id})
  - Ejemplo del cuerpo (body):
    ```json
    {
        "nombre": "Luke Skywalker",
        "color_cabello": "blond",
        "masa": "77",
        "vehiculos": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "altura": "172",
        "url": "https://swapi.dev/api/people/1/",
        "peliculas": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "naves_estelares": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "cumpleanos": "19BBY",
        "mundo_natal": "https://swapi.dev/api/planets/1/",
        "editado": "2014-12-20T21:17:56.891000Z",
        "color_piel": "fair",
        "especies": [],
        "creado": "2014-12-09T13:50:51.644000Z",
        "pk": "fa3d4748-3514-473b-8846-c2d2f6ad823d",
        "color_ojos": "blue",
        "genero": "female"
    }
    ```

- **DELETE - Eliminar un usuario de la base de datos de DynamoDB**
  - URL: [https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users/{id}](https://faieekn2x7.execute-api.us-east-1.amazonaws.com/dev/users/{id})
