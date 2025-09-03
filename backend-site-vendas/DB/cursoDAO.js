import Cursos from "../Models/cursos.js"
import conectar from "./conexao.js"

export default class CursoDAO {
    async gravar(cursos) {
        if(cursos instanceof Cursos) {
            const conexao = await conectar();
            const sql = "INSERT INTO cursos(cur_nome, cur_descricao, cur_cargaHoraria, cur_instrutor, cur_nivel, cur_preco, cur_vagasDisponiveis) VALUES(?,?,?,?,?,?,?)";

            const parametros = [
                cursos.nome,
                cursos.descricao,
                cursos.cargaHoraria,
                cursos.instrutor,
                cursos.nivel,
                cursos.preco,
                cursos.vagasDisponiveis
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async alterar(cursos) {
        if(cursos instanceof Cursos) {
            const conexao = await conectar();
            const sql = "UPDATE cursos SET cur_nome = ?, cur_descricao = ?, cur_cargaHoraria = ?, cur_instrutor = ?, cur_nivel = ?, cur_preco = ?, cur_vagasDisponiveis = ? WHERE cur_id = ?";

            const parametros = [
                cursos.nome,
                cursos.descricao,
                cursos.cargaHoraria,
                cursos.instrutor,
                cursos.nivel,
                cursos.preco,
                cursos.vagasDisponiveis,
                cursos.id
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async consultar() {
        const conexao = await conectar();
        const sql = "SELECT * FROM cursos";
        const [registros] = await conexao.query(sql);
        await conexao.release();

        let listaCursos = [];
        for(const registro of registros) {
            const curso = new Cursos(
                registro.cur_id,
                registro.cur_nome,
                registro.cur_descricao,
                registro.cur_cargaHoraria,
                registro.cur_instrutor,
                registro.cur_nivel,
                registro.cur_preco,
                registro.cur_vagasDisponiveis
            );

            listaCursos.push(curso);
        }
        return listaCursos;
    }

    async exclusao(cursos) {
        if(cursos instanceof Cursos) {
            const conexao = await conectar();
            const sql = "DELETE FROM cursos WHERE cur_id = ?";
            const parametros = [cursos.id];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }
}