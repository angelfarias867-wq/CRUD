const require = require('express');
const {programacion} = require('../datos/cursos').InfoCursos;
const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

router

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje);
    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    res.send(JSON.stringify(resultado));
});