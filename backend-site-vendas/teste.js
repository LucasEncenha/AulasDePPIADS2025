import Cursos from "./Models/cursos.js";

const curso = new Cursos(
    6,
    'Desenvolvimento Node',
    'Este curso abrange os fundamentos e as práticas avançadas de desenvolvimento web, desde HTML e CSS até JavaScript e frameworks modernos. Ideal para quem busca uma carreira na área de tecnologia.',
    150,
    'Fabricio',
    'Intermediario',
    650,
    15
);

//curso.gravar();

// curso.nome = "Desenvolvimento de Sistemas Node"

// curso.alterar();

// const listaCurso = await curso.consultar();

// for(const cur of listaCurso) {
//     console.log(cur.toJSON());
// }

curso.excluir();
console.log("Gravado com sucesso!");