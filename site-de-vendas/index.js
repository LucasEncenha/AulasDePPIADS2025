import express from "express";
import verificarLogin from "./seguranca/autenticar.js";
import session from "express-session";

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(session({
    secret: 'meuS3gr3d0',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 15
    }
}));

app.use(express.urlencoded({extended: true}));

app.post('/login', (requisicao, resposta) => {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;

    if(usuario == 'admin' && senha == 'admin') {
        requisicao.session.autenticado = true;
        resposta.redirect('/index.html')
    } else {
        resposta.send("<span>Usuário ou senha inválidos!</span> <a href='/login.html'>Tentar novamente</a>")
    }
});

app.get('/logout', (requisicao, resposta) => {
    requisicao.session.destroy();
    resposta.redirect('/login.html');
});

app.use(express.static('public'));

app.use(verificarLogin, express.static('private'));

app.listen(port, host, () => {
    console.log(`Neste http://localhost:${port} foi!`);
});