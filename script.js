const tempoInput = document.getElementById('tempo');
const unidadeOrigem = document.getElementById('unidadeOrigem');
const unidadeDestino = document.getElementById('unidadeDestino');
const resultado = document.getElementById('resultado');
const converterBtn = document.getElementById('converterBtn');

function converterTempo() {
    let valor = parseFloat(tempoInput.value);
    if (isNaN(valor)) {
        resultado.textContent = "Por favor, insira um número válido!";
        return;
    }

    // Converter tudo para segundos primeiro
    let valorEmSegundos;
    switch (unidadeOrigem.value) {
        case 'segundos':
            valorEmSegundos = valor;
            break;
        case 'minutos':
            valorEmSegundos = valor * 60;
            break;
        case 'horas':
            valorEmSegundos = valor * 3600;
            break;
    }

    // Converter de segundos para a unidade desejada
    let valorConvertido;
    switch (unidadeDestino.value) {
        case 'segundos':
            valorConvertido = valorEmSegundos;
            break;
        case 'minutos':
            valorConvertido = valorEmSegundos / 60;
            break;
        case 'horas':
            valorConvertido = valorEmSegundos / 3600;
            break;
    }

    resultado.textContent = `Resultado: ${valorConvertido} ${unidadeDestino.value}`;
}

// Evento do botão
converterBtn.addEventListener('click', converterTempo);