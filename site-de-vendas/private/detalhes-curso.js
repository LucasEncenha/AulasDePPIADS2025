document.addEventListener('DOMContentLoaded', () => {
    const quantidade = document.getElementById('quantidade-vagas');
    const valorTotal = document.getElementById('valor-total');
    const vagasDisponiveis = document.getElementById('vagas-disponiveis');

    const stringValor = valorTotal.textContent;

    const preco = parseFloat(stringValor.replace('R$', '').replace(',', '.'));

    const vagas = parseInt(vagasDisponiveis.textContent);

    function calcularValorTotal() {
        let quant = parseInt(quantidade.value);

        if (quant > vagas) {
            quant = vagas;
            quantidade.value = vagas;
        }

        const valor = quant * preco;
        valorTotal.textContent = `R$ ${valor.toFixed(2).replace('.', ',')}`;
    }

    quantidade.addEventListener('input', calcularValorTotal);

    calcularValorTotal();
});