// ESTRUTURAS CONDICIONAIS

// ESTRUTURAS DE DECISÃO

// IF
    var jogador1 = 0;
    var jogador2 = 1;
    var placar; 

// ANINHANDO IF'S
// IF TÉRNARIO
    jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('os jogadores não são válidos')
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('o jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    }

// USANDO O ELSE IF
    else if (jogador2 > 0 && jogador1 == 0) {
        console.log('o jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    }

 // USANDO ELSE
    else {
        console.log('ninguem marcou ponto');
    } 

// USANDO SWITH CASE
    switch (placar) {
        case placar = jogador1 > jogador2:
            console.log('jogador 1 ganhou');
            break;
        case placar = jogador2 > jogador1:
            console.log('jogador 2 ganhou');
            break;
        default:
            console.log('ninguem marcou ponto')
    }


// ESTRUTURAS DE REPETIÇÃO
    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
    let object = { propriedade1: '12', propriedade2: 'valor2', propriedade3: 'valor3'}

// FOR - EXECUTA ATE QUE SEJA FALSE
    for (let i = 0; i < array.length; i++) {
        console.log(i);
    } 

// FOR/IN - EXECUTA REPETIÇÃO A PARTIR DE UMA PROPRIEDADE 
// COM ARRAY
    for (i in array) {
        console.log(i);
    }

// COM OBJECT
    for (i in object) {
        console.log(i);
    }

// FOR/OF -  EXECUTA REPETIÇÃO A PARTIR DE UM VALOR
// COM ARRAY
    for (i of array) {
        console.log(i);
    }

// COM OBJECT NÃO FUNCIONA, POIS NÃO É ITERÁVEL
    for (i of object.propriedade1) {
        console.log(i);
    } 


// WHILE EXECUTA ENQUANTO FOR VERDADEIRA 
    var a = 0;
    while (a < 10) {
        a++;
        console.log(a)
    } 

// DO - EXECUTA ATÉ QUE SEJA FALSA
    do {
        a++;
        console.log(a);
    } while (a < 10); 