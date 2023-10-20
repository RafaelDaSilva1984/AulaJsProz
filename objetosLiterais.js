let pessoa = {
    nome: "Rafael",
    idade:20,
    profissao:"Desenvolvedor",
    comidasFavoritas:['BatataFrita', 'apermegiana', 'coka'],
    familia:{
        pai:'Joãozinho',
        mae:'Maria'
    }
}
for(let i = 0; i < pessoa.comidasFavoritas.length; i++){
    console.log(pessoa.nome + 'Gosta de: ' , pessoa.comidasFavoritas[i] , i)
}

