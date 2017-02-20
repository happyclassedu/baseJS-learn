
const mixin = function(obj, mixins) {
  const newObj = obj;
  newObj.prototype = Object.create(obj.prototype);
  for (let prop in mixins) {
    if(mixins.hasOwnProperty(prop)) {
      newObj.prototype[prop] = mixins[prop];
    }
  }
  return newObj;
}

const BigMixin = {
  fly: () => {
    console.log('I can fly');
  }
};

const Big = function() {
  console.log('new big');
};

const FlyBig = mixin(Big, BigMixin);
console.log(FlyBig);

const flyBig = new FlyBig();
console.log(flyBig); // new big
flyBig.fly();  // I can fly

