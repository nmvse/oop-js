// Необходимо сделать конкретному массиву метод toString, который возвращает первый элемент .. последний.

const addToString = (array) => {
  return array.length > 1 ? [array[0], array.at(-1)] : array
}

Array.prototype.toString = function () {
  if (this.length === 0) {
    return ''
  }
  return this.length > 1 ? `${this[0]}..${this.at(-1)}` : `${this[0]}`

}
// 1..4
addToString([1, 2, 3, 4]).toString()

// 1
addToString([1]).toString()

//
addToString([]).toString()

// Недостатки решения: Метод реализован для всех массивов, а нам нужно сделать для конкретного. Для учета нескольких случаев эффективнее использовать конструкцию switch.

/*
Верное решение:
  const addToString = (array) => {
    array.toString = function () {
      switch (this.length) {
        case 0: return '';
        case 1: return String(this[0]);
        default: return `${this[0]}..${this.at(-1)}`
      }
    }
    return array
  }
*/
