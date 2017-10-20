function sayHello(name){
  console.log('Hello ' + name);
}

function sayGoodby(name) {
  console.log('sayGoodby ' + name);
}

module.exports.sayHello = sayHello
exports.sayGoodby = sayGoodby