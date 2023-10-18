//Operador and && duas condições true
let maiorIdade = true
let possuiCnh = true
let podeAplicar = maiorIdade && possuiCnh
if(podeAplicar){    
    console.log("Sim, atende requisitos", podeAplicar)
}else{
    console.log("Não atende requisito", podeAplicar)
}
//Operador or || uma condição true
let maiorIdadeOr = false
let possuiCnhOr = false
let podeAplicarOr = maiorIdadeOr || possuiCnhOr
if(podeAplicarOr){    
    console.log("Sim, atende requisiros", podeAplicarOr)
}else{
    console.log("Não, atende requisito", podeAplicarOr)
}
//Operador NOT ! negação inverte resultado
let candidatoRecusado = !podeAplicarOr
console.log('Candidato Recusado', candidatoRecusado)