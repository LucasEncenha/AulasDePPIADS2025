import CursoDAO from "../DB/cursoDAO.js";

export default class Cursos {
    #id
    #nome
    #descricao
    #cargaHoraria
    #instrutor
    #nivel
    #preco
    #vagasDisponiveis

    constructor(
        id = "",
        nome = "",
        descricao = "",
        cargaHoraria = "",
        instrutor = "",
        nivel = "",
        preco = "",
        vagasDisponiveis = ""
    ) {
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#cargaHoraria = cargaHoraria;
        this.#instrutor = instrutor;
        this.#nivel = nivel;
        this.#preco =preco;
        this.#vagasDisponiveis = vagasDisponiveis;
    }


    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }

    get descricao() {
        return this.#descricao;
    }
    set descricao(descricao) {
        this.#descricao = descricao;
    }

    get cargaHoraria() {
        return this.#cargaHoraria;
    }
    set cargaHoraria(cargaHoraria) {
        this.#cargaHoraria = cargaHoraria;
    }

    get instrutor() {
        return this.#instrutor;
    }
    set instrutor(instrutor) {
        this.#instrutor = instrutor;
    }

    get nivel() {
        return this.#nivel;
    }
    set nivel(nivel) {
        this.#nivel = nivel;
    }

    get preco() {
        return this.#preco;
    }
    set preco(preco) {
        this.#preco = preco;
    }

    get vagasDisponiveis() {
        return this.#vagasDisponiveis;
    }
    set vagasDisponiveis(vagasDisponiveis) {
        this.#vagasDisponiveis = vagasDisponiveis;
    }


    toString() {
        return `
            ID: ${this.#id},
            Nome: ${this.#nome},
            Descrição: ${this.#descricao},
            Carga Horária: ${this.#cargaHoraria},
            Instrutor: ${this.#instrutor},
            Nivel: ${this.#nivel},
            Preço: ${this.#preco},
            Vagas disponiveis: ${this.#vagasDisponiveis}
        `;
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            descricao: this.#descricao,
            cargaHoraria: this.#cargaHoraria,
            instrutor: this.#instrutor,
            nivel: this.#nivel,
            preco: this.#preco,
            vagasDisponiveis: this.#vagasDisponiveis
        }
    }

    async gravar() {
        const cursoDAO = new CursoDAO();
        await cursoDAO.gravar(this);
    }

    async alterar() {    
        const cursoDAO = new CursoDAO();
        await cursoDAO.alterar(this);
    }

    async excluir() {
        const cursoDAO = new CursoDAO();
        await cursoDAO.exclusao(this);
    }

    async consultar() {
        const cursoDAO = new CursoDAO();
        return await cursoDAO.consultar(this);
    }
}