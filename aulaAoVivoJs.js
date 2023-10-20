
const id = 123;
let userName = "Aluno123";
console.log(id, userName);

//alterado novo nome de usuário com let
userName = "aluno456";
console.log(id, userName);

// aletrar o valor da const com o let
let novoId = id;
//console.log(novoId , userName);
novoId = 456;
console.log("Primeiro Id:", id, ",Novo Id com let:", novoId, ",Novo userName:", userName)


const email = "aluno123@gmail.com";
if(email === userName || id === 123){
    console.log(`Deseja mudar Senha ? `, "usaerName", userName , "e id", id);
}else{
    console.log(`Usuário sem autorização`);
}

let idade = 17;
let possuiCnh = true;

if(idade >= 18 && possuiCnh){
    console.log('Pode dirigir', 'idade: ', idade, 'anos e possui Cnh =', possuiCnh);
}else if(possuiCnh) {
    console.log('Você é menor de idade mas tem cnh');
}else{
    console.log('Não pode dirigir');
}
