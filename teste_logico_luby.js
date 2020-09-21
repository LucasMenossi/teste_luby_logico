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
