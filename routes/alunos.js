const express = require("express");
const router = express.Router();
const { Aluno } = require("../models");

// Listar alunos
router.get("/", async (req, res) => {
    const alunos = await Aluno.findAll();
    res.render("base", {
        title: "alunos",
        view: "alunos/show",
        alunos,
    });
});

// Formulário para adicionar aluno
router.get("/add", (req, res) => {
    res.render("base", {
        title: "Add Aluno",
        view: "alunos/add",
    });
});

// Adicionar nova aluno
router.post("/add", async (req, res) => {
    await Aluno.create({ nome: req.body.nome });
    res.redirect("/alunos");
});

// Formulário para editar aluno
router.get("/edit/:id", async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id);

    res.render("base", {
        title: "Editar Aluno",
        view: "alunos/edit",
        aluno,
    });
});


// Atualizar aluno
router.post("/edit/:id", async (req, res) => {
    await Aluno.update(
        { nome: req.body.nome },
        {where: { id: req.params.id },}
    );
    res.redirect("/alunos");
});

// Deletar aluno

router.post("/delete/:id", async (req, res) => {
    await Aluno.destroy({ where: { id: req.params.id } });
    res.redirect("/alunos");
});

module.exports = router;