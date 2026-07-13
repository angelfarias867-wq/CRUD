const require = require('express');
const {programacion} = require('../datos/cursos.js').InfoCursos;
const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(InfoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = InfoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
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
    const resultado = InfoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultado));
});

module.exports = routerProgramacion