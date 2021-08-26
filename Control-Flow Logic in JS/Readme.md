## Logical Operators in JS
### The || operators returns the leftmost "true" value
```javascript
let t = false || 0 || '' || 5 || 'hi' || true;
console.log(t); // 5
```
### The && operators returns the leftmost "false" value:
```javascript
let val = true && 'yes' && 5 && null && false;
console.log(val); // null
```

### Conditional ternary operator ? :
```javascript
console.log((new Date()).getDay() % 2 == 0 ? 
  "even date" : "odd date")
```
(unexpected behavior)[https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/]


### Function sometimes return a string, sometimes return undefined

## IIFE - Immediately-invoked function expression 
```javascript
//this is called "closure (a state is closed inside)" затваряне на стойност
let f = (function () {
  let x = 0;
  return function() { console.log(++x); }
})(); f(); f(); f(); f();
ако изпълним само 'f' резултата ще е 'function() { console.log(++x); }'
скриване на persistant state into the function
```

## Arrow Functions is JS (Lambda)
```
Short Syntax for Anonymous Functions
```
### Aggregate elements
```javascript
function aggregateElements(input) {
  let elements = input.map(Number);
  aggregate(elements, 0, (a, b) => a + b);
  aggregate(elements, 0, (a, b) => a + 1 / b);
  aggregate(elements, '', (a, b) => a + b);
  function aggregate(arr, initVal, func) {
    let val = initVal;
    for (let i = 0; i < arr.length; i++)
      val = func(val, arr[i]);
    console.log(val);
  }
}
aggregateElements([10, 20, 30]); 
```

## Sorting Arrays
```javascript
let nums = [20, 40, 10, 30, 100, 5];
nums.sort(); // Works incorrectly on arrays of numbers !!!
console.log(nums.join('|')); // 10|100|20|30|40|5

nums.sort((a, b) => a-b); // Compare elements as numbers
console.log(nums.join('|')); // 5|10|20|30|40|100


```

