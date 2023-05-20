// Необходимо сделать класс денег у которого входным параметром является количество денег.
// Также создать класс для Доллара, Евро и рубля, которые наследуются от денег.
// В качестве параметра конструктор доллара они смогут также принимать не только число,
// но и экземпляр другого класса дочернего от денег - в таком случае, вторым параметром можно будет передать курс конвертации.
// Курс конвертации можно менять с помощью метода.
// Задание нужно сделать 2-мя способами: с помощью ES6 class и с помощью функций.

function Money(amount, rate = 1) {
  this.amount = amount;
  this.rate = rate
}

Money.prototype.get = function () {
  return typeof this.amount === 'number' ?
    this.amount :
    +(this.amount.amount / this.rate).toFixed(2)
}

Money.prototype.setMod = function (value) {
    this.rate = value
    return this
}

function Rub(amount, rate) {
  this.amount = amount
  this.rate = rate
}

Rub.prototype = Money.prototype

function Dollar(amount, rate) {
  this.amount = amount
  this.rate = rate
}

Dollar.prototype = Money.prototype

const rub = new Rub(100);

rub.get(); // 100

const dollar = new Dollar(rub, 75);

dollar.get() // 1.3

// Надо сделать так, чтобы метод setMod можно было "чейнить"
dollar.setMod(80).get() // 1.2

console.log(new Dollar(new Rub(100), 75).get())

