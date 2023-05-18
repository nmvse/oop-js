// Необходимо сделать класс денег у которого входным параметром является количество денег.
// Также создать класс для Доллара, Евро и рубля, которые наследуются от денег.
// В качестве параметра конструктор доллара они смогут также принимать не только число,
// но и экземпляр другого класса дочернего от денег - в таком случае, вторым параметром можно будет передать курс конвертации.
// Курс конвертации можно менять с помощью метода.
// Задание нужно сделать 2-мя способами: с помощью ES6 class и с помощью функций.

function Money(amount) {
  this.amount = amount
}
Money.prototype.get = function () {
  return this.amount
}

function Rub(amount) {
  this.amount = amount
}
Rub.prototype = Money.prototype

function Euro(amount) {
  this.amount = amount
}

Euro.prototype = Money.prototype

function Dollar(currency, amount) {
  this.amount = amount;
  this.currency = currency;
  this.get = function () {
    return +(this.currency.get() / this.amount).toFixed(2)
  }
  this.setMod = function (amount) {
    this.amount = amount;
    return this
  }
}

Dollar.prototype = Money.prototype

const rub = new Rub(100);

const euro = new Euro(85);

rub.get(); // 100
//
const dollar = new Dollar(rub, 75);
//
dollar.get() // 1.3
//
// // Надо сделать так, чтобы метод setMod можно было "чейнить"
dollar.setMod(80).get() // 1.2

