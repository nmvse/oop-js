// Необходимо добавить всем массивам в JavaScript метод filterMap, который принимает 2 функции: фильтр и map

Array.prototype.filterMap = function (filter, map) {
  return this.filter(filter).map(map)
};

[1, 2, 3, 4].filterMap((el) => el > 2, (el) => el ** 2); // [9, 16]

// Недостатки решения: Поверхностная реализация. С т.з. оптимизации, лучше использовать объекты-итераторы.

/*
Верное решение:
  Array.prototype.filterMap = function (filter, map) {
    const res = []

    for (const [i, el] of this.entries()) {
      if (filter(el, i, this)) {
        res.push(map(el, i, this))
      }
    }
    return res
  };

  [1, 2, 3, 4].filterMap((el) => el > 2, (el) => el ** 2); // [9, 16]


Пример объекта-итератора:

let array = ["one", "two", "three"]; // инициализируем переменную, содержащую массив

let iterator = array.entries(); // инициализируем переменную, содержащую объект итератор
console.log(iterator)

for (let item of iterator) { // проходим циклом по объекту
  console.log( item ); // выводим пары ключ/значение
}*/
