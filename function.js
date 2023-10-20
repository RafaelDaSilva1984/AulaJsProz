//exemplo 01 Function

function cumprimentar(){
    console.log("Olá, Mundo!")
}
cumprimentar();

//exemplo 02 function Regular
function multiplicar(num1, num2){
    return(num1 * num2);
}
let resultado = multiplicar(3, 7);
console.log("3 x 7 =" ,resultado)

//exemplo 3 function

function fatorial(n){
    if(n === 1){
        return 1;
    }else{
        return n*fatorial(n-1);
    }}
    let n = fatorial (5);
    console.log("Fatorial de 5 = ", n );

// exemplo 4 function regular
     function soma(x, y){
        return x + y;
    }        
    const res = soma (6,8);
    console.log ("A soma é:",res)

// exemplo 5 function anonima
    const somar = function(a, b){
        return (a + b);    
    }        
    console.log(somar(5, 9));

    // exemplo 6 arrow function
    const proximoNum = (n)=> {
        return(n + 1);
    }
    console.log(proximoNum(5))

     // exemplo 7 arrow function opcional
     const proximoNumero = n =>(n + 1);
     console.log(proximoNumero(10))
