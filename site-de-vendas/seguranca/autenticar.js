export default function verificarLogin (requisicao, resposta, proximo) {
    if(requisicao?.session?.autenticado) {
        proximo();
    } else {
        resposta.redirect('/login.html')
    }
}