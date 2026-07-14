const express = require('express');
const routerProgramacion = express.Router();
const { infoCursos } = require("../datos/cursos.js");
const programacion = infoCursos.programacion;


//Middleware 
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});
 //GET
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje);
    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    
    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultado.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultado));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultado));
});

//POST
routerProgramacion.post('/', (req, res) => {
    let nuevoCurso = req.body;
    programacion.push(nuevoCurso);
    res.send(JSON.stringify(nuevoCurso));
});

//PUT
routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0) {
        programacion[indice]=cursoActualizado;
    }
    res.send(JSON.stringify(programacion));
});

//PATCH
routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0) {
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);
    }
    res.send(JSON.stringify(programacion));
})

//DELETE
routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0) {
        programacion.splice(indice, 1);
    }
    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion