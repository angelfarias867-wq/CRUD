const express = require('express');
const app = express();

const { InfoCursos} = require('./datos/cursos');

//Routing
const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas');
app.use('/api/cursos/matematicas', routerMatematicas);

//Routing
app.get ('/', (req, res) => {
    res.send('Mi primer servidor con express');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(InfoCursos));
});

//programacion
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(InfoCursos.programacion));
});

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
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

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultado = InfoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultado));
});

//matematicas
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(InfoCursos.matematicas));
});

app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = InfoCursos.matematicas.filter(curso => curso.tema === tema);
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultados));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});