import express, { response } from "express";
import verificarLogin from "./seguranca/autenticar.js";
import session from "express-session";

const app = express();
const port = 3000;
const host = '0.0.0.0'; //permite acesso a aplicação vindas de todas as interfaces de rede

//configurar servidor para usar express-session
app.use(session({
    secret: 'meuS3gr3d0',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 15 //15 minutos
    }
}));

app.use(express.urlencoded({extended: true})); //configura o middleware para aceitar o corpo da requisição em um formato URL-encoded

app.post('/login', (requisicao, resposta) => {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;

    if(usuario == 'admin' && senha == 'admin') {
        requisicao.session.autenticado = true;
        resposta.redirect('/menu.html')
    } else {
        resposta.send("<span>Usuário ou senha inválidos!</span> <a href='/login.html'>Tentar novamente</a>")
    }
});

app.get('/logout', (requisicao, resposta) => {
    requisicao.session.destroy();
    resposta.redirect('/login.html');
});

//configura servidor para receber arquivos estaticos
app.use(express.static('public'));

//middlewaare - verificarLogin
app.use(verificarLogin, express.static('private'));

app.listen(port, host, () => {
    console.log(`Neste http://${host}:${port} foi!`);
});