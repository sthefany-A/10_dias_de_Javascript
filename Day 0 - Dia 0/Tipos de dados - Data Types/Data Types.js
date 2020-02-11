/**
* As variáveis 'firstInteger', 'firstDecimal' e 'firstString' são declaradas para você - não as modifique.
* Imprima três linhas:
* 1. A soma de 'firstInteger' e a representação numérica de 'secondInteger'.
* 2. A soma de 'firstDecimal' e a representação numérica de 'secondDecimal'.
* 3. A concatenação de 'firstString' e 'secondString' ('firstString' deve ser a primeira).
*
* Parâmetro (s):
secondInteger - A representação em string de um número inteiro.
secondDecimal - A representação de string de um número de ponto flutuante.
secondString - Uma string que consiste em uma ou mais palavras separadas por espaço.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declara uma variável chamada 'firstInteger' e inicializa com o valor inteiro 4.
    const firstInteger = 4;
    
    // Declara uma variável chamada 'firstDecimal' e inicializa com o valor de ponto flutuante 4.0.
    const firstDecimal = 4.0;
    
    // Declare uma variável chamada 'firstString' e inicialize com a string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Escreva o código que usa console.log para imprimir a soma do 'firstInteger' e 'secondInteger' (convertido em um tipo Number) em uma nova linha.
    console.log(firstInteger + Number(secondInteger));
  
   
    // Escreva o código que usa console.log para imprimir a soma de 'firstDecimal' e 'secondDecimal' (convertido em um tipo Number) em uma nova linha.
    console.log(firstDecimal + Number(secondDecimal));
    
    
    // Escreva o código que usa console.log para imprimir a concatenação de 'firstString' e 'secondString' em uma nova linha. A variável 'firstString' deve ser impressa primeiro.    
    console.log(firstString.concat(secondString));
    
}

