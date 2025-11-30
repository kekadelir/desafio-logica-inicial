let nomeHeroi = "kekas";
let xpHeroi = 1001;

let nivel;
if (xpHeroi < 1000) {
    nivel = "ferro";
} else if (xpHeroi <= 2000) {
    nivel = "bronze";
}else if (xpHeroi <= 5000) {
    nivel = "prata";
} else if (xpHeroi <= 10000) {
    nivel = "ouro";
} else if (xpHeroi <=20000) {
    nivel = "diamante";                
} else if (xpHeroi <= 50000) {
    nivel = "mestre";                
} else if (xpHeroi <= 100000) {
    nivel = "lendario";                
} else {
    nivel = "imortal";                
}
console.log(`O herói ${nomeHeroi} possui ${xpHeroi} pontos de experiência e é do nível ${nivel}.`);

