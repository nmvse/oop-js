// Необходимо добавить всем строкам в JavaScript метод capitalize, который делает первую букву в строке заглавной

String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1)
}

"foo".capitalize() // Foo

// Недостатки решения: Выбросит ошибку при отсутствии this[0]. Чтобы этого избежать, необходимо воспользоваться оператором опциональной цепочки ?. Если значение будет равно undefined || null - ошибки не будет.

/*
Верное решение:
  String.prototype.capitalize = function () {
    return this[0]?.toUpperCase() + this.slice(1)
  }

  "foo".capitalize() // Foo
*/
