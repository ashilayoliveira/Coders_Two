// Solicitar ao usuário que informe o primeiro número
var numero1 = prompt("Informe o primeiro número:");

// Converter o valor fornecido para um número
numero1 = parseFloat(numero1);

// Solicitar ao usuário que informe o segundo número
var numero2 = prompt("Informe o segundo número:");

// Converter o valor fornecido para um número
numero2 = parseFloat(numero2);

// Verificar qual número é maior
if (numero1 > numero2) {
    alert("O maior número é: " + numero1);
} else if (numero2 > numero1) {
    alert("O maior número é: " + numero2);
} else {
    alert("Os números são iguais: " + numero1);
}

// Solicitar ao usuário que informe um valor
var valor = prompt("Informe um valor:");

// Converter o valor fornecido para um número
valor = parseFloat(valor);

if (valor > 0) {
    alert("O valor informado é positivo.");
} else if (valor < 0) {
    alert("O valor informado é negativo.");
} else {
    alert("O valor informado é zero.");
}

// Solicitar ao usuário que informe os 3 valores
var valor1 = parseFloat(prompt("Informe o primeiro valor:"));
var valor2 = parseFloat(prompt("Informe o segundo valor:"));
var valor3 = parseFloat(prompt("Informe o terceiro valor:"));

// Verificar qual valor é o maior
if (valor1 > valor2 && valor1 > valor3) {
    alert("O maior valor é: " + valor1);
} else if (valor2 > valor1 && valor2 > valor3) {
    alert("O maior valor é: " + valor2);
} else {
    alert("O maior valor é: " + valor3);
}

// Solicitar ao usuário que informe os 3 valores
var valor1 = parseFloat(prompt("Informe o primeiro valor:"));
var valor2 = parseFloat(prompt("Informe o segundo valor:"));
var valor3 = parseFloat(prompt("Informe o terceiro valor:"));

// Encontrar o menor valor
var menorValor = Math.min(valor1, valor2, valor3);

// Calcular a soma dos 2 maiores valores
var somaDosMaiores = valor1 + valor2 + valor3 - menorValor;

// Exibir a soma dos 2 maiores valores
alert("A soma dos 2 maiores valores é: " + somaDosMaiores);

// Solicitar ao usuário que informe os 4 valores
var valor1 = parseFloat(prompt("Informe o primeiro valor:"));
var valor2 = parseFloat(prompt("Informe o segundo valor:"));
var valor3 = parseFloat(prompt("Informe o terceiro valor:"));
var valor4 = parseFloat(prompt("Informe o quarto valor:"));

// Encontrar o maior valor entre os 4
var maiorValor = Math.max(valor1, valor2, valor3, valor4);

// Exibir o primeiro valor, o último valor e o maior valor
alert("Primeiro valor: " + valor1);
alert("Último valor: " + valor4);
alert("Maior valor: " + maiorValor);

var soma = 0;
var valores = [];

for (var i = 1; i <= 6; i++) {
    var numero = parseFloat(prompt("Informe o " + i + "º número:"));
    valores.push(numero);

    if (numero < 72) {
        soma += numero;
    }
}

console.log("Valores informados pelo usuário: " + valores.join(", "));
console.log("Soma dos valores inferiores a 72: " + soma);

var soma = 0;

for (var i = 1; i <= 4; i++) {
    var numero = parseFloat(prompt("Informe o " + i + "º número:"));
    
    if (numero >= 0 && numero < 10) {
        soma += numero;
    } else {
        alert("Os números devem estar entre 0 e 10. Por favor, tente novamente.");
        break; // Encerra o programa se um número estiver fora do intervalo
    }
}

if (soma > 0) {
    var media = soma / 4;

    if (media > 5) {
        alert("Você passou no teste.");
    } else {
        alert("Tente novamente.");
    }
}

// Solicitar ao usuário que informe o ano de nascimento
var anoNascimento = parseInt(prompt("Informe o ano de nascimento:"));

// Obter o ano atual
var anoAtual = new Date().getFullYear();

// Calcular a idade da pessoa
var idade = anoAtual - anoNascimento;

// Verificar se a pessoa pode votar
if (idade >= 16) {
    console.log("Você pode votar este ano!");
} else {
    console.log("Desculpe, você não pode votar este ano. A idade mínima para votar é 16 anos.");
}

// Solicitar a altura em metros
var altura = parseFloat(prompt("Informe a altura em metros:"));

// Solicitar o sexo (1 para feminino, 2 para masculino)
var sexo = parseInt(prompt("Informe o sexo (1 para feminino, 2 para masculino):"));

// Inicializar a variável de peso ideal
var pesoIdeal = 0;

if (sexo === 1) { // Sexo feminino
    pesoIdeal = (62.2 * altura) - 44.7;
} else if (sexo === 2) { // Sexo masculino
    pesoIdeal = (72.7 * altura) - 58;
} else {
    console.log("Sexo não reconhecido. Use 1 para feminino ou 2 para masculino.");
}

if (pesoIdeal > 0) {
    console.log("O peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
} else {
    console.log("Não é possível calcular o peso ideal com base nas informações fornecidas.");
}

// Solicitar ao usuário que informe os dois valores inteiros
var valor1 = parseInt(prompt("Informe o primeiro valor:"));
var valor2 = parseInt(prompt("Informe o segundo valor:"));

// Solicitar a operação desejada
var operacao = parseInt(prompt("Escolha a operação desejada:\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));

// Inicializar a variável para armazenar o resultado
var resultado = 0;

// Realizar a operação com base na escolha do usuário
switch (operacao) {
    case 1: // Adição
        resultado = valor1 + valor2;
        break;
    case 2: // Subtração
        resultado = valor1 - valor2;
        break;
    case 3: // Divisão
        resultado = valor1 / valor2;
        break;
    case 4: // Multiplicação
        resultado = valor1 * valor2;
        break;
    default:
        console.log("Operação não reconhecida. Use 1, 2, 3 ou 4.");
}

if (resultado !== 0) {
    console.log("O resultado da operação é: " + resultado);
}

