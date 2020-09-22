//1) Crie uma função chamada sort que ordene o array abaixo do menor para o maior e retorne um novo array ordenado. var array_to_sort = [9,3,2,19,3,4,10,34,-99,99]
//Não utilize a função sort nativa do ordenamento de arrays

function bubbleSort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }
  return array;
}

var array_to_sort = [9, 3, 2, 19, 3, 4, 10, 34, -99, 99];
bubbleSort(array_to_sort);
console.log(array_to_sort);

//2) Crie uma função que calcule qualquer o fatorial de um número natural e retorne o resultado
let factorial = [];
function factorialCalculator(num) {
  if (num === 0 || num === 1) return 1;
  if (factorial[num] > 0) return factorial[num];
  return (factorial[num] = factorialCalculator(num - 1) * num);
}

console.log(factorialCalculator(3));

//3) Crie uma função que calcule a sequencia de Fibonacci
function fibonacci(num) {
  return num < 1 ? 0 : num <= 2 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));

//4 Crie uma função chamada estatistica que retorne a média aritmética de um array, a moda e
//a mediana. Deve ser retornado como um objeto.
//var dataset = [193,123, 44, 9, 44, 801, 1800, 44, 98, 801, 999, 1780]

function estatistica(dataset) {
  let media,
    mediana,
    sum = 0;
  let moda = [];

  //Media
  for (let cont = 0; cont <= dataset.length - 1; cont++) {
    sum = sum + dataset[cont];
  }
  media = sum / dataset.length;

  //Moda
  let freq = 0,
    freqNum,
    list = [];

  dataset.forEach(function (num) {
    let foundNum = list.find(function (ele) {
      return ele.num == num;
    });

    if (foundNum) {
      foundNum.count++;
      if (foundNum.count > freq) {
        freqNum = num;
        freq = foundNum;
      }
    } else list.push({ num: num, count: 1 });
  });

  moda = freqNum;

  //Mediana
  if (dataset.length % 2 === 0) {
    const somaMediana =
      dataset[dataset.length / 2 - 1] + dataset[dataset.length / 2];
    mediana = somaMediana / 2;
  } else mediana = dataset[(dataset.length - 1) / 2];

  return {
    media,
    moda,
    mediana,
  };
}

var dataset = [193, 123, 44, 9, 44, 801, 1800, 44, 98, 801, 999, 1780];
console.log(estatistica(dataset));

//5 Você está desenvolvendo um game, e pedem para você criar uma função que retornará um
//boleano para identificar se ouve colisão entre dois objetos. Considere que são dois
//quadrados, e você poderá acessar as coordenadas dentro de cada objeto.
//objeto1 = {x1:1, y1:1, x2:2, y2:2} objeto2 = {x1:10, y1:10, x2:11, y2:11}
//A sua função deve receber os dois objetos como parametros e comparar quando alguma das
//coordendas dos objetos se conflitam.

const objeto1 = { x1: 1, y1: 1, x2: 2, y2: 2 };
const objeto2 = { x1: 10, y1: 10, x2: 11, y2: 11 };

function checkCollision(obj1, obj2) {
  if (
    (obj1.x1 === obj2.x1 && obj1.y1 === obj2.y1) ||
    (obj1.x2 === obj2.x2 && obj1.y2 === obj2.y2)
  )
    return "Há colisão";
  else return "Não há colisão";
}

console.log(checkCollision(objeto1, objeto2));
