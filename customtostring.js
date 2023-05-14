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
