// ***
/*
const jsSkill = {
  knowsJs() {
    return true;
  },
};

const engDegree = {
  hasDegree() {
    return true;
  },
};

const backendSkill = {
  knowsBackend() {
    return true;
  },
};

const jsEngineer = Object.assign({}, jsSkill, engDegree);
const fullstackEngineer = Object.assign({}, jsSkill, backendSkill, engDegree);

console.dir(jsEngineer);
console.dir(fullstackEngineer);
console.dir(fullstackEngineer.knowsJs());
console.dir(fullstackEngineer.knowsBackend());
console.dir(fullstackEngineer.hasDegree());
*/

// *** Factory function with closure
/*
let Car = function (color) {
  let moving = false;

  return Object.assign(
    {},
    {
      color: color,
      drive() {
        moving = true;
        return this;
      },
      isMoving() {
        return moving;
      },
    }
  );
};

let redCar = Car("red");
console.dir(redCar.drive().isMoving());
*/

const humanFactory = function (obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },
    isCrying() {
      return isCrying;
    },
  });
};

const flyFactory = function (obj) {
  let isFlying = false;

  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return isFlying;
    },
  });
};

const superman = humanFactory(flyFactory({}));

console.log(superman.fly().cry().isCrying());
console.log(superman.isFlying());
