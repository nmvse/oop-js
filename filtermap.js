// Необходимо добавить все массивам в JavaScript метод filterMap, который принимает 2 функции: фильтр и map

Array.prototype.filterMap = function (filter, map) {
  return this.filter(filter).map(map)
};

[1, 2, 3, 4].filterMap((el) => el > 2, (el) => el ** 2); // [9, 16]