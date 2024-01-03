const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursos')
    .then(() => { console.log("conectado a mongodb") })
    .catch(err => console.log("no se pudo conectar", err));


const cursoSchema = new mongoose.Schema({
    name: String,
    autor: String,
    etiquetas: Array,
    fecha: { type: Date, default: Date.now },
    publicado: Boolean
});

const Curso = mongoose.model('Curso', cursoSchema);

async function crearCurso() {
    const curso = new Curso({
        nombre: "node js",
        autor: "david",
        etiquetas: ["back", "desarrollo web"],
        publicado: true
    });
    const result = await curso.save();
    console.log(result);
}

//crearCurso();

async function listarCursos() {
    const cursos = await Curso.find();
    console.log(cursos);
}
//listarCursos();

async function actualizarCurso(id) {
    const curso = await Curso.findById(id);
    if (!curso) {
        console.log("curso no existe");
        return;
    }
    //curso.autor = "mateo"
    curso.set({
        autor: "mateo"
    })
    await curso.save();
}

//actualizarCurso("659555e9ac46b2d08b39afb2");

async function actualizarCurso2(id) {
    const res = await Curso.findByIdAndUpdate(id, {
        autor: "luis",
        publicado: false
    });
    console.log(res);
}

actualizarCurso2("659555e9ac46b2d08b39afb2");
