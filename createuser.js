// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

class User {
  constructor(options) {
   const { fname } = options;
   const { lname } = options;
   const { age } = options;
   this.fname = fname;
   this.lname = lname;
   this.age = age
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

user.sayName() // 'Andrey Kobets'