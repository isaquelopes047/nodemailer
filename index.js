const express = require("express");
const app = express();
const List = require('./ListTo/listContacts')
const {body, validationResult} = require("express-validator");
require('dotenv').config();

const port = 8080;

const path = require('path');
app.use(express.static("views"));

//bodyparser
const bodyParser = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//nodemailer
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLC:true,
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    }
});

app.post("/sendmail", [

    body("to").isEmail().withMessage("Erro de validação"),
    body("frota").isLength({min: 1}).withMessage("Erro de validação"),
    body("Nome").isLength({min: 3}).withMessage("Erro de validação")

], (req, res) => {

    const erros = validationResult(req);
    if(!erros.isEmpty()) {

        return res.status(400).send({error:'Erro no cadastro'});

    }

    const {to, Nome, frota} = req.body;

    const mailConfig = {
        from: "seuNome <seuEmail@email.com>",
        to: to,
        cc: List,
        subject: `ABASTECIMENTO DE ARLA - ${Nome}`,
        html:`
            <p>Olá tudo bem?</p>
            <p>Segue autorização para abastecimento de arla.</p>
            <table border="1">
                <tr>
                    <td><b>Nome</b></td>
                    <td><b>Frota</b></td>
                    <td><b>Quantidade</b></td>
                </tr>
                <tr>
                    <td>${Nome}</td>
                    <td>${frota}</td>
                    <td>40 litros ou 2 galoes</td>
                </tr>
            </table>
            <p>Qualquer duvida por favor responder neste mesmo Email</p>
            <p>Grato pela atenção</p>
        `,
    }

    transporter
        .sendMail(mailConfig)
        .then(() => {
            res.sendFile(path.join(__dirname, "./views/success.html"));
        })
        .catch((error) => {
            console.log(error);
            res.json({
                status: "FAILED",
                message: "Erro"
            })
    })
});

app.get("/enviar", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
})

app.listen(port, (erro) => {
    if(erro) console.log(erro)  
    else console.log(`Servidor aberto em: http://localhost:${port}/enviar`)
})