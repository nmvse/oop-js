// Необходимо написать аналог Object.create с использованием new function

function objectCreate(proto) {
  objectCreate.prototype = proto
}


new objectCreate({a: 1})