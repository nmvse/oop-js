// Необходимо написать аналог Object.create с использованием Object.setPrototypeOf

const objectCreate = (proto) => {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj
}

objectCreate({a: 1})
