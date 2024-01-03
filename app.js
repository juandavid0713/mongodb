const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursos')
    .then(() => { console.log("conectado a mongodb") })
    .catch(err => console.log("no se pudo conectar", err));


const cursoSchema = new mongoose.Schema({ 
    name: String, 
    autor: String, 
    etiquetas: Array, 
    fecha: { type: Date, default: Date.now }, 
    publicado: Boolean });

const Curso = mongoose.model('Curso', cursoSchema);

async function crearCurso() {
    const curso = new Curso({
        nombre:"node js",
        autor:"david",
        etiquetas:["back","desarrollo web"],
        publicado:true
    });
    const result = await curso.save();
    console.log(result);
}

//crearCurso();

async function listarCursos() {
  const cursos = await Curso.find();
  console.log(cursos);
}
listarCursos();
