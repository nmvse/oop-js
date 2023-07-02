// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

function User(options) {
  const { fname } = options;
  const { lname } = options;
  const { age } = options
  this.name = fname;
  this.lastName = lname;
  this.age = age;
  this.has18 = function () {
    return this.age >= 18
  };
  this.sayName = function () {
    return `${this.name} ${this.lastName}`
  }
}

const user = new User({
  fname: 'Andrey',
  lname: 'Kobets',
  age: 32
});

user.has18() // true

user.sayName() // 'Andrey Kobets'

// Недостатки решения: Можно реализовать проще - через Object.assign(this, options)

/*
Реализация с помощью class:
  class User {
    constructor(options) {
     Object.assign(this, options)
    }

    sayName() {
      return `${this.fname} ${this.lname}`
    }

    has18() {
      return this.age >= 18 ? true : false
    }
  }

  const user = new User({
    fname: 'Andrey',
    lname: 'Kobets',
    age: 32
  });

  user.has18() // true

  user.sayName() // 'Andrey Kobets'*/
