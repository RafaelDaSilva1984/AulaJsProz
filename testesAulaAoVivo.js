// acesso a arrays
let pessoa = {
    name: "John",
    age: 30,
    altura:1.64,
    comidasFavoritas:['pizza', 'sorvete', 'batinhaF']
}

// acesso com dot notition
let pComida = pessoa.comidasFavoritas;
console.log(pComida); // ['pizza', 'sorvete', 'batinhaF']

let dadosPessoais = 'name: ' + pessoa.name + ', age: ' + pessoa.age + ' anos, height: ' + pessoa.altura + ' metros';
console.log(dadosPessoais); // John301.64