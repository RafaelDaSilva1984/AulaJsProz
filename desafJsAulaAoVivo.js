let senha = '123';
let userName = 'usuario123';
let isAdmin = true


let novaSenha = 'novaSenha123';
let novoUserName = 'usuario123';
senha = novaSenha

if(novoUserName === userName && senha === novaSenha){
    console.log('Por favor, insira sua nova senha');
}else{
    console.log('Username  / senha Incorreta');
}
if(isAdmin){
    console.log('Bem-vindo(a) à área de administrador');
}else{
    console.log('Você não pode acessar esta parte do sistema');
}