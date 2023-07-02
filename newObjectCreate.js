// Необходимо написать аналог Object.create с использованием new function

function objectCreate(proto) {
  function factory() {}
  factory.prototype = proto;
  return new factory()
}


objectCreate({a: 1})
