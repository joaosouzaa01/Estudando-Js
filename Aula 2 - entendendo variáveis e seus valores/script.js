        // TIPOS PRIMITIVOS
        // BOOLEAN
            var boolean = false;
                console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

        // NUNBER
            var numero = 1;
                console.log(`A variável ${numero} tem o tipo ${typeof(numero)}`);

        // STRING
            var nome = 'diana';
                console.log(`A variável ${nome} tem o tipo ${typeof(nome)}`);

        // FUNCTION
            var funcao = function(){};
                console.log(`A variável ${funcao} tem o tipo ${typeof(funcao)}`);


        // COMO DECLARAR

        // var; // variável global ou local - valor inicial nulo

        // let; // variavel local de bloco - valor inicial nulo

        // const; // variável local de bloco - valor inicial obrigatório */

        
        // USANDO 'VAR' GLOBAL
            var nome = 'diana';
            var nome = 'Diana';

        // USANDO 'VAR' LOCAL
            function nomeDaFuncao() {
                var sobrenome = 'Martine';
                console.log(sobrenome);
            }

                console.log(nome);
                nomeDaFuncao(); 

        // AS PROPRIEDADES DE VAR SE APLICAM A LET, MAS POR CONVENÇÃO USAMOS LET NO ESCOPO LOCAL

        // USANDO CONST
            const constante = 'constante';
        // VALOR NÃO PODE SER ALTERADO */



        // ATRIBUIÇÃO
            var atribuicao = 'diana';

        // COMPARAÇÃO
            var comparacao = "0" == 0;
            console.log(comparacao);

        // COMPARAÇÃO IDENTICA
            var comparacaoIdentica = "0" === 0;
            console.log(comparacaoIdentica); 

        // OPERADORES ARITMÉTICOS

        // ADIÇÃO '+'
            var adicao = 1 + 1;
            console.log(adicao);

        // SUBTRAÇÃO '-'
            var subtracao = 2 - 1;
            console.log(subtracao);

        // MULTIPLICAÇÃO '*'
            var multiplicacao = 2 * 3;
            console.log(multiplicacao);

        // DIVISÃO REAL '/'
            var divisaoReal = 6 / 2;
            console.log(divisaoReal);

        // DIVISÃO INTEIRA '%'
            var divisaoInteira = 5 % 2;
            console.log(divisaoInteira);;

        // POTENCIAÇÃO '**'
            var potenciacao = 2**10;
            console.log(potenciacao); 


    // OPERADORES RELACIONAIS
            
        // MAIOR QUE '>'
        var maiorQue = 5 > 2;
        console.log(maiorQue);
        
        // MENOR QUE '<'
        var menorQue = 5 < 2;
        console.log(menorQue);
        
        // MAIOR OU IGUAL '>='
        var maiorOuIgual = 5 >= 2;
        console.log(maiorOuIgual);
        
        // MENOR OU IGUAL '<='
        var menorOuIgual = 5 <= 2;
        console.log(menorOuIgual); 


    // OPERADORES LÓGICOS

        // && - TODOS OS VALORES DEVEM SER TRUE
            var e = true && true;
            console.log(e);

        // || - SOMENTE UM VALOR DEVE SER TRUE
            var ou = true || false;
            console.log(ou);

        // ! - INVERTE OS VALORES
            var nao = !true;
            console.log(nao); 