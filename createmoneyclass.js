// Необходимо сделать класс денег у которого входным параметром является количество денег.
// Также создать класс для Доллара, Евро и рубля, которые наследуются от денег.
// В качестве параметра конструктор доллара они смогут также принимать не только число,
// но и экземпляр другого класса дочернего от денег - в таком случае, вторым параметром можно будет передать курс конвертации.
// Курс конвертации можно менять с помощью метода.
// Задание нужно сделать 2-мя способами: с помощью ES6 class и с помощью функций.

class Money {
  constructor(amount) {
    this.amount = amount
  }
  get() {
    return this.amount
  }
}

class Rub extends Money {
  constructor(amount) {
    super(amount);
  }
}

class Dollar extends Money {
  constructor(currency, amount) {
    super(amount);
    this.currency = currency
  }

  get() {
    return +(this.currency.get() / this.amount).toFixed(2)
  }

  setMod(amount) {
    this.amount = amount;
    return this
  }
}

class Euro extends Money {
  constructor(amount) {
    super(amount);
  }
}

const rub = new Rub(100);

const euro = new Euro(85);

rub.get(); // 100

const dollar = new Dollar(rub, 75);

dollar.get() // 1.3

// Надо сделать так, чтобы метод setMod можно было "чейнить"
// dollar.setMod(80).get() // 1.2
