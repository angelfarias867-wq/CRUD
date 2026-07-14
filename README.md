# CRUD de Cursos

Esto es una api la cual esta construida con **Node.js** y **Express**, la cual permite la gestion de cursos mediante las operaciones del c.r.u.d. (Crea, Leer, Actualizar y Eliminar), 

# Istalacion
1. Clonar este repositorio en tu computador
2. Abrir la terminal estando en la carpeta del proyecto clonado
3. Instalar las dependencias necesarias mediante **"npm install"**
4. Iniciar el Servidor mediante **"node app.js"**

# Endpoints Utilizados
**Base URL Programacion:** `/api/cursos/programacion`
**Base URL Matematicas:** `/api/cursos/matematicas`

| Método | Endpoint | Descripción | Requisitos y Respuestas |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Retorna el catálogo completo de cursos de programación. | **Éxito:** `200 OK` |
| **GET** | `/:lenguaje` | Filtra los cursos por lenguaje (ej. `javascript`). Permite ordenamiento. | **Query opcional:** `?ordenar=vistas`. **Error:** `404` si no existe el lenguaje. |
| **GET** | `/:lenguaje/:nivel` | Filtra los cursos por lenguaje y nivel de dificultad (ej. `basico`). | **Error:** `404` si no hay coincidencias. |
| **POST** | `/` | Registra un nuevo curso en el sistema. | **Body:** JSON con `id` y `titulo`. **Error:** `400` si faltan datos o el ID ya existe. |
| **PUT** | `/:id` | Reemplaza un curso existente en su totalidad. | **Body:** JSON completo. **Error:** `404` si el ID no es encontrado. |
| **PATCH** | `/:id` | Modifica propiedades específicas de un curso. | **Body:** JSON con las propiedades a actualizar. **Error:** `404` si el ID no existe. |
| **DELETE** | `/:id` | Elimina un curso del registro basándose en su ID. | **Error:** `404` si el ID no existe. |
