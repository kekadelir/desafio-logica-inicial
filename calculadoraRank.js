function calculadoraRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível: ${nivel}`;
}

// Loop para múltiplos jogadores
for (let i = 1; i <= 3; i++) {
    let vitorias = parseInt(prompt(`Digite o número de vitórias do jogador ${i}:`));
    let derrotas = parseInt(prompt(`Digite o número de derrotas do jogador ${i}:`));

    let resultado = calculadoraRank(vitorias, derrotas);
    console.log(resultado);
    alert(resultado);
}
