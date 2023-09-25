// O QUE SÃO VETORES E ARRAYS.

// COMO DECLARAR UM ARRAY
// DEVE SER DECLARADO ENTRE COLCHENTES []
    let array = ['string', 1, true];

    console.log(array);

// COMO UM ARRAY PODE GUARDAR DIFERENTES VALORES, ICLUSIVE OUTROS ARRAYS    
    let array_dois = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];

// COMO ACESSAR O INDICE DE UM ARRAY 
    console.log(array[0]);


// MANIPULANDO UM ARRAY

// forEach - REALIZA UMA FUNÇÃO PARA CADA ITEM DO ARRAY
    array.forEach(function(item, index){console.log(item, index);})

// push -  ADICIONA ITEM NO FINAL DO ARRAY   
    array.push('novo item');
    console.log(array);

// pop - REMOVE O ÚLTIMO ITEM DO ARRAY
    array.pop();
    console.log(array);

//shift - REMOVE O PRIMEIRO ITEM DO ARRAY
    array.shift();
    console.log(array);    

//unshift - ADICIONA ITEM NO INÍCIO DO ARRAY
    array.unshift('novo item');
    console.log(array);

//indexOf - RETORNA O ÍNDICE DE UM ITEM DO ARRAY
    console.log(array.indexOf(true));

//splice - REMOVE OU SUBSTITUI INTEM POR ÍNDICE
    array.splice(0, 3);
    console.log(array); 

//slice - RETORNA UMA PARTE DE UM ARRAY EXISTENTE
    let novoArray = array.slice(0, 3);
    console.log(novoArray);   


// OBJETOS

// COMO DECLARAR UM OBJETO
// DEVE SER DECLARADO ENTRE CHAVES "{}";
    let object = { propriedade1: 'valor1', propriedade2: 'valor2' }
    console.log(object); 

// ASSIM COMO ARRAYS, AS PROPRIEDADES DE OBJETOS PODEM GUARDAR QUALQUER VALOR    
    let object_dois = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };

// COMO ACESSAR PROPRIEDADES DE OBJETOS
    // USANDO PONTO "."
    console.log(object.objectInterno); 

// MANIPULANDO OBJETO
// DESESTRUTURANDO OBJETO    
    let string = object.string;
    let number = object.number;
    let boolean = object.boolean; 

// DESESTRUTURANDO USANDO CHAVES
    let { string_dois, number_dois, boolean_dois } = object;
    console.log(string, number, boolean);
   






