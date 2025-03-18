let custos = [ 1200, 900, 400, 500];
let contador = 0; 
let somatorio = 0;
while (contador<custos.length){
    somatorio = somatorio + custos[contador];
    contador = contador + 1;
}
console.log( "o seu custo mensal é de " + somatorio);


let salario = [4000,3800];
contador = 0;
let somatorioSalario = 0;
while (contador<salario.length){
    somatorioSalario = somatorioSalario + salario[contador];
    contador = contador + 1;
}
console.log ("Sua renda mensal é de " + somatorioSalario);


let saldo = somatorioSalario-somatorio
console.log ("seu saldo é de " + saldo)
