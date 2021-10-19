/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (arg) => {
    return !!arg;
}


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(''));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(true));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(42));
console.log(isTruthy("foo"));
console.log(isTruthy(new Date()));
console.log(isTruthy(-42));
console.log(isTruthy(3.14));
console.log(isTruthy(-3.14));
console.log(isTruthy(Infinity));


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object();
carro.marca = "Ford"
carro.modelo = "Ford-Edge"
carro.placa = "ABC-123"
carro.ano = 2019
carro.cor = "Preto"
carro.quantasPortas = 4
carro.assentos = 4
carro.quantidadePessoas = 0


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (corNova) => {
    carro.cor = corNova;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = _ => carro.cor

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = _ => carro.modelo

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = _ => carro.marca

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = _ => `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = (numeroPessoas) => {
    let reset = carro.quantidadePessoas;
    let cabem = 4 - carro.quantidadePessoas;
    let pessoas = "pessoas";
    if (carro.quantidadePessoas >= 4) {
        return "O carro já está lotado!";
    }
    carro.quantidadePessoas += numeroPessoas;
    if (carro.quantidadePessoas > 5) {
        if (cabem == 1) {
            pessoas = "pessoa";
        }
        carro.quantidadePessoas = reset
        return `Só cabem mais ${cabem} pessoas!`
    }
    return ` temos ${carro.quantidadePessoas} pessoas no carro!`;
}
carro.tirarPessoas = (quantidade) => {
    let reset = carro.quantidadePessoas;
    if (carro.quantidadePessoas <= 0) {
        return `Já não tem ninguém no carro`
    }
    carro.quantidadePessoas -= quantidade
    if (carro.quantidadePessoas < 0) {
        carro.quantidadePessoas = reset
        return "Você não pode tirar mais pessoas!"
    }
    return `Há ${carro.quantidadePessoas} pessoas no carro!`
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor())

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2))

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4))

// Faça o carro encher.
console.log(carro.adicionarPessoas(3))

// Tire 4 pessoas do carro.
console.log(carro.tirarPessoas(4))

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10))

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas)