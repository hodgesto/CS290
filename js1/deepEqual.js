var deepEqual = function(foo, bar) {
  for (var val in foo) {
     if (bar[val] === undefined) {
       return false;
     }

     if (bar[val] instanceof Object && foo[val] instanceof Object) {
        if (!deepEqual(bar[val], foo[val])) {
          return false;
        }
     } else if (bar[val] !== foo[val]) {
        return false;
     }
  }
  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
