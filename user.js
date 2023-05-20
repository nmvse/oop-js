// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.has18 = function () {
    return this.age >= 18
  };
  this.sayName = function () {
    return `${this.name} ${this.lastName}`
  }
}

const user = new User('Andrey', 'Kobets', 32);

user.has18() // true

user.sayName() // 'Andrey Kobets'*/

// Недостатки решения: Нет проверки на new.target. Методы лучше добавлять в прототип.

/*
Реализация с помощью class:
  class User {
    constructor(name, surname, age) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }

    sayName() {
      return `${this.name} ${this.surname}`
    }

    has18() {
      return this.age >= 18
    }
  }

  const user = new User('Andrey', 'Kobets', 32);

  user.has18() // true

  user.sayName() // 'Andrey Kobets'*/
