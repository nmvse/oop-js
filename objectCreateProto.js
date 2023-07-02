// Необходимо написать аналог Object.create с использованием __proto__

// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.

const objectCreate = (proto, {...args}) => {
  let obj = {};
  for (let arg in args) {
   const values = args[arg];
    for (let key in values) {
      obj[arg] = values[key]
    }
  }
  obj.__proto__ = proto;
  return obj
}

objectCreate({a: 1}, {
    test: {
      value: 'test'
    }
})

