# CRUD de Cursos

Esto es una api la cual esta construida con **Node.js** y **Express**, la cual permite la gestion de cursos mediante las operaciones del c.r.u.d. (Crea, Leer, Actualizar y Eliminar), 

# Istalacion
1. Clonar este repositorio en tu computador
2. Abrir la terminal estando en la carpeta del proyecto clonado
3. Instalar las dependencias necesarias mediante **"npm install"**
4. Iniciar el Servidor mediante **"node app.js"**

# Endpoints Utilizados
1. **Base URL Programacion:** `/api/cursos/programacion`
2. **Base URL Matematicas:** `/api/cursos/matematicas`

| Método | Endpoint | Descripción | Requisitos y Respuestas |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Devuelve el catálogo completo de cursos de programación. | **Éxito:** `200 OK` |
| **GET** | `/:lenguaje` | Filtra los cursos por lenguaje (ej. `javascript`). | **Error:** `404` si no existe el lenguaje. |
| **GET** | `/:lenguaje/:nivel` | Filtra los cursos por lenguaje y nivel de dificultad (ej. `basico`). | **Error:** `404` si no hay coincidencias. |
| **POST** | `/` | Registra un nuevo curso. | **Body:** JSON con `id` y `titulo`. **Error:** `400` si faltan datos o el ID ya existe. |
| **PUT** | `/:id` | Reemplaza un curso existente por completo. | **Body:** JSON completo. **Error:** `404` si el ID no es encontrado. |
| **PATCH** | `/:id` | Modifica propiedades específicas de un curso. | **Body:** JSON con propiedades a actualizar. **Error:** `404` si el ID no existe. |
| **DELETE** | `/:id` | Elimina un curso del registro basándose en su ID. | **Error:** `404` si el ID no existe. |

## Ejemplos de Solicitudes

`GET http://localhost:3000/api/courses/programming?sort=views`

### DELETE (Delete course)
`DELETE http://localhost:3000/api/courses/mathematics/5`

### POST (Create course)
`POST http://localhost:3000/api/courses/programming`
```json
{
  "id": 8,
  "title": "Learn TailwindCSS",
  "language": "css",
  "views": 25000,
  "level": "beginner"
}
```

### PUT (Modify course in its entirety)
`PUT http://localhost:3000/api/courses/mathematics/2`
```json
{
  "id": 2,
  "titulo": "Calculus pt.6",
  "tema": "calculus",
  "vistas": 543932,
  "nivel": "advanced"
}
```

### PATCH (Update course partially)
`PATCH http://localhost:3000/api/courses/programming/1`
```json
{
  "vistas": 85000
}
```
