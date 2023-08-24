// VARIAVEIS: LET e CONST + CAMMEL CASE.
let fraseQualquer = 'frase'
fraseQualquer = 'outra frase'
const outraFrase = 'frase 2'
console.log (fraseQualquer);



// TIPOS DE DADOS: STRING.
const nossaString = 'Breno é';
const outraString = "Programador";

// CONCATENAÇÃO DE STRINGS:' ' -> ESPAÇO ENTRE OS VALORES DAS STRINGS.
console.log (nossaString + ' '+ outraString)
// TEMPLATE STRINGS: UTILIZA A CRASE AO INVES DE ASPAS SIMPLES.
console.log (`Voce sabia que o Breno é ${outraString}`)

// TIPO DE DADOS: NUMBER (NUMERO).
const numero = 3;
console.log (numero)

// TIPO DE DADOS: NULL -> Valor nulo.
const valorDaCompra = null;
console.log (typeof valorDaCompra)

//TIPO DE DADOS: UNDEFINED -> Sem valor definido.
let valor;
console.log (typeof valor) //typeof= ver o tipo de dado que foi repassado.

//TIPO DE DADOS: BOOLEAN
const boolean = false;
const formado = true;
const faltosos = '';
// VALORES QUE REPRESENTAM UM FALSE:
// false, 0, NaN (Not a Number), null, undefined, ''.

// VALORES QUE REPRESENTAM UM TRUE:
//STRING COM CARACTER DENTRO(' '), NUMBER DIFERENTE DE 0(1, 0.15, -10).



// FUNÇÕES:    ->    (PARAMETROS)
function primeiraFuncao(message, userName){
    console.log(message, userName);
}
// CHAMADA DA FUNÇÃO -> (ARGUMENTOS DOS PARAMETROS);
primeiraFuncao('Primeira mensagem', 'Breno');
primeiraFuncao('Segunda mensagem', 'Arlete');
primeiraFuncao('Terceira mensagem', 'Megguie');

// FUNÇÃO COM RETORNO E TEMPLATE STRINGS (RETURN)
function segundaFuncao(userName){
    return `${userName} é um programador`
}
console.log(segundaFuncao('Breno'));



// OBJETOS, MÉTODOS, PROPRIEDADES E DOT NOTATION
const Breno = {
                   //PROPRIEDADE/VALOR
    completeName: 'Breno Marques de Carvalho da Silva',
    idade: 26,
               //MÉTODO -> FUNÇÃO ANONIMA
    showMessage: function(){
        alert('Mensagem')
    } 
}
//DOT NOTATION -> P/ ACESSAR A PROPRIEDADE
console.log(Breno.completeName);

//DOT NOTATION -> P/ ACESSAR A FUNÇÃO ANONIMA
console.log(Breno.showMessage());



// ARRAYS: VETOR E MATRIZ.
// [LISTA ÚNICA] -> VETOR.
const arrayVetor = ['Breno', 'Arlete','Megguie'];
//VISUALIZAR O INDEX 1 DA LISTA.
console.log (arrayVetor[1]);

// [LISTA DE OUTRAS LISTAS] -> MATRIZ.
const arrayMatriz = [
    ['Caio', 'Aline'], 
    ['chevrolet', 'Kia'], 
    ['Marinheiro', 'Enfermeira']
];
//VISUALIZAR O INDEX 2 DA MATRIZ.
console.log(arrayMatriz[2]);



// OPERADORES ARITMÉTICOS:
const numero1 = 6;
const numero2 = 2;

const adicao = numero1 + numero2 //8
const subtracao = numero1 - numero2 //4
const multiplicacao = numero1 * numero2 //12
const divisao = numero1 / numero2 //3

console.log(multiplicacao);

//const incremento = numero1++ //7
//const decremento = numero2-- //5
const modulo = 20 % 6 //2 -> EXIBE O RESTO DE UMA DIVISAO.
const exponencial = numero1 ** numero2 // 6 * 6 = 36

console.log(modulo);
console.log(exponencial);



// OPERADORES DE ATRIBUIÇÃO:
//const numero = 6; // PRIMEIRO OPERADOR DE ATRIB. (=)
//const numero = 2;

//const adicao = numero3 += numero4  /numero3 = numero3 + numero4
//const subtracao = numero3 -= numero4  /numero3 = numero3 - numero4
//const multiplicacao = numero3 *= numero4  /numero3 = numero3 * numero4



// OPERADORES DE COMPARAÇÃO:
const numero3 = 7;
const numero4 = 2;
const numero5 = '7';

console.log(numero3 > numero4) // true - MAIOR QUE
console.log(numero3 < numero4) // false - MENOR QUE
console.log(numero3 >= numero4) // true - MAIOR IGUAL
console.log(numero3 <= numero4) // false - MENOR IGUAL
console.log(numero3 == numero4) // false - IGUAL A
console.log(numero3 != numero4) // true - DIFERENTE DE (ANALISA OS VALORES)
console.log(numero3 === numero5) // false - SÃO IDENTICOS (ANALISA SE TEM O MESMO TIPO DE DADO)
console.log(numero3 !== numero5) // true - NÃO SÃO IDENTICOS (ANALISA SE UM É DIFERENTE DO OUTRO POR TIPO DE DADOS)



// OPERADOR TERNÁRIO: 
const numero6 = 7;
const numero7 = 3;

console.log (true ? 'Retorna true' : 'Retorna false') // SIMBOLO TERNÁRIO (? :)
console.log ('' ? 'Retorna true' : 'Retorna false') // RETORNA FALSE POIS É UMA STRING VAZIA ('')

numero6 ? alert('Retorna true') : alert('Retorna false'); // EXEMPLO PRÁTICO



// OPERADORES LÓGICOS E CONDICIONAIS:
// && -> and (TODOS OS VALORES PRECISAM SER TRUE, P/ EXECUTAR O BLOCO)
// || -> or (SE QUALQUER VALOR FOR TRUE, ELE EXECUTA O BLOCO)
// ! -> not ()

const idade = 23
const tipo = 'admin'

if (idade < 29 &&  tipo == 'admin') {
    console.log ('Ele tem mais de 29 anos e é admin (OP. AND)')
}

if (idade < 29 ||  tipo == 'admin') {
    console.log ('Ele tem mais de 29 anos e é admin (OP. OR)')
}

if (!(idade < 29) && !(tipo == 'admin')) {
    console.log ('Ele tem mais de 29 anos e é admin (OP. NOT)')
    // NAO VAI APARECER NO CONSOLE POIS ESTAMOS USANDO O OP. AND (&&) QUE PRECISA DE TODOS OS VALORES TRUE.
}

// ELSE IF - ELSE:
if (idade > 29) {
    console.log('Ele tem mais de 29 anos e é um admin')
} else if (idade > 25) {
    console.log('Ele tem mais de 25 anos e é um admin')
} else {
    console.log('Ele não tem idade minima (ELSE)  ')
}

// SWITCH CASE:
switch (idade) {
    case 20:
        console.log('Ele tem 20 anos');
        break;
    case 21:
        console.log('Ele tem 21 anos');
        break;
    
        default:
            console.log('Ele não tem nenhuma das idades anteriores');
}
















