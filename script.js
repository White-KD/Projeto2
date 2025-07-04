function jogoNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;
    do {
        tentativa = parseInt(prompt("🏀 Manda ver! Tenta acertar meu número secreto entre 1 e 10:"));
        if (tentativa < numeroSecreto) {
            alert("🔥 Quase, parceiro! Tenta um número mais alto!");
        } else if (tentativa > numeroSecreto) {
            alert("⛔️ Passou do ponto! Tenta algo mais baixo, MVP!");
        } else {
            alert("💯 BUCKETS! Você acertou na mosca, campeão! 🏆");
        }
    } while (tentativa !== numeroSecreto);
}

function jogoMedia() {
    let total = 0;
    let qtd = parseInt(prompt("📋 Quantas notas vai mandar pro coach analisar hoje?"));
    for (let i = 1; i <= qtd; i++) {
        let nota = parseFloat(prompt(`🎯 Solta a nota ${i}, all-star:`));
        total += nota;
    }
    let media = total / qtd;
    alert(`📊 Sua média tá na régua: ${media.toFixed(2)}! Tá quase virando lenda da liga!`);
}

function somaNumeros() {
    let num1 = parseFloat(prompt("🏀 Manda o primeiro número:"));
    let num2 = parseFloat(prompt("Agora solta o segundo número:"));
    let soma = num1 + num2;
    alert(`🧮 A soma deu: ${soma}. Jogada simples e certeira, estilo bandeja debaixo da cesta!`);
}
