export const esFeatures = {
  ES6: {
    methods: [
      {
        label: "Keywords",
        value: "Keywords",
        choices: [
          {
            label: "const",
            value: "const",
            desc:
              "const is used to define constant values(block-scoped), const will not allow you to update the variable, but trick here is you can update the value though (for array/object)",
            link:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
            input: `const number = 42;
const list = [1, 2, 3];
try {
  number = 99;
} catch (err) {
  console.log(err);
}
console.log(number);
list[3] = 4;
console.log(list);
                      `,
            output: `TypeError: Assignment to constant variable.
42
[1,2,3,4]
                    `,
          },
          {
            label: "let",
            value: "let",
            desc:
              "let enables you to define values. They have block scope({}). These variables are not hoisted or cannot be used before declaration",
            link: "https://wesbos.com/let-vs-const",
            input: `function printVariables(iAmAwesome) {
  let x = 2;
  if (iAmAwesome) {
    let x = 50;
    console.log(x);
  }
  console.log(x);
}
`,
            output: `50
2`,
          },
        ],
      },
      {
        label: "Functions",
        value: "Functions",
        choices: [
          {
            label: "Default Function Arguments",
            value: "Default Function Arguments",
            desc:
              "This functionality allows you to initialize the named parameters of a function with default values if no value or undefined is passed",
            link:
              "https://www.javascripttutorial.net/es6/javascript-default-parameters/",
            input: `function showMeSomething(a, b = "Chuck Norris is god") {
  console.log(a, b);
}
console.log(showMeSomething(2, "Cool cool cool"));
console.log(showMeSomething(2));
`,
            output: `2 Cool cool cool
2 Chuck Norris is god`,
          },
          {
            label: "Arrow functions",
            value: "Arrow functions",
            desc:
              "An arrow function is an alternative way to a regular function expression, it is a simpler way to define a function. Few exceptions - it doesn't have its own bindings to this, arguments, super....",
            link: "https://javascript.info/arrow-functions-basics",
            input: `const multiple(a, b) => a*b
console.log(multiply(5,3))`,
            output: `15`,
          },
        ],
      },
      {
        label: "Strings",
        value: "Strings",
        choices: [
          {
            label: "Templating string literal",
            value: "Templating string literal",
            desc:
              "Template literals are string literals which allows embedded expressions and multi-line strings. Precisely, it is to replace '+'",
            link:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
            input:
              "let tag = 'Awesome'" + "console.log(`Javascript is ${tag}`)",
            output: `Javascript is Awesome`,
          },
        ],
      },
      {
        label: "Destructuring",
        value: "Destructuring",
        choices: [
          {
            label: "array",
            value: "array",
            desc:
              "Array destructing is a powerful JS Expression to extract data from arrays and assign them to distinct variables",
            link:
              "https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/",
            input: `let [firstName, lastName] = ["Harry", "Potter"]
console.log(firstName, lastName)

//swap variables without using extra variable
let a = 4, b = 5;
[a, b] = [b, a]
console.log('Swap results', a, b)`,
            output: `Harry Potter
Swap results 5 4`,
          },
          {
            label: "object",
            value: "object",
            desc:
              "Object destructuring is a powerful JS expression to extract data out into a distinct variables.",
            link: "https://javascript.info/destructuring-assignment",
            input: `let options = { 
  height: 100,
  width: 200,
  shape: "Rectangle"
}

let {height, width, shape} = options;
console.log('Height', height)
console.log('Width', width)
console.log('Shape', shape)`,
            output: `Height 100
Width 200
Shape Rectangle`,
          },
        ],
      },
      {
        label: "Array",
        value: "Array",
        choices: [
          {
            label: "Array.from()",
            value: "Array.from()",
            desc:
              "The 'Array.from()' method creates a new, shallow-copied Array instance from an array-like or iterable object.(from MDN). This also works well when we query DOM elements with 'document.querySelectorAll('.className')' which returns NodeList, can be converted to Array.",
            link:
              "https://medium.com/mofed/5-new-es6-array-methods-you-should-be-aware-of-c2792423dd9f",
            input: `const food = "🍕🍔🌭🍟🌮"
console.log('Food as an array', Array.from(food))`,
            output: `Food as an array ['🍕', '🍔', '🌭', '🍟', '🌮']`,
          },
          {
            label: "Array.of()",
            value: "Array.of()",
            desc:
              "The 'of' method accepts arguments and returns a new array with the individual arguments as entries to the new Array instance",
            link:
              "https://www.hackerearth.com/practice/notes/hemanth12/es6-array-methods/",
            input: `const monkeys = Array.of('🙈', '🙉', '🙊')
console.log(monkeys)`,
            output: `['🙈', '🙉', '🙊']`,
          },
          {
            label: "Array.copyWithin()",
            value: "Array.copyWithin()",
            desc:
              "This is an interesting addition to ES6 array methods, like the name implies, it copies the values inside an array itself. First argument is the target index position in the array where it's value will be overriden, second arguement is the index from where the values has to be copied. It can accept 3 arguments.",
            link: "https://vegibit.com/new-array-functions-in-es6/",
            input: `let prices = [500, 600, 700, 800, 900, 1000, 1500];
prices.copyWithin(2, 0, 3);
console.log(prices);`,
            output: `[ 500, 600, 500, 600, 700, 1000, 1500 ]`,
          },
          {
            label: "Array.entries()",
            value: "Array.entries()",
            desc:
              "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array[MDN]",
            link:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries",
            input: `const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

console.log(iterator1.next().value);

console.log(iterator1.next().value);`,
            output: `[0, "a"]
[1, "b"]`,
          },
          {
            label: "Array.fill()",
            value: "Array.fill()",
            desc:
              "The fill method fills all the elements of an array from a start index to an end index with a static value. The start and end index values are optional. The default of start is zero and the default of end is this.length",
            link: "https://vegibit.com/new-array-functions-in-es6/",
            input: `console.log('Fill fruits with Pizza', ['🍎','🍓','🍉'].fill('🍕'))
console.log([1, 2, 3].fill(4, 1, 2))`,
            output: `Fill fruits with Pizza (3) ["🍕", "🍕", "🍕"]
[1, 4, 3]`,
          },
          {
            label: "Array.find()",
            value: "Array.find()",
            desc:
              "This method aceepts a conditional function as a callback, which when satisfied returns the first element that is found. If not element satifies the condition, it returns undefined.",
            link: "https://vegibit.com/new-array-functions-in-es6/",
            input: `const fruits = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'watermelon', quantity: 5}
]

console.log(fruits.find(fruit => fruit.name === 'watermelon'));`,
            output: `{ name: 'watermelon', quantity: 5 }`,
          },
          {
            label: "Array.findIndex()",
            value: "Array.findIndex()",
            desc:
              "This method accepts a testing function as a callback and returns the index of the first element found satisfying the condition and returns undefined if not found",
            link:
              "https://www.hackerearth.com/practice/notes/hemanth12/es6-array-methods/",
            input: `const fruits = [{
{name: 'apples', quantity: 2},
{name: 'bananas', quantity: 0},
{name: 'watermelon', quantity: 5}
}]
                    
console.log(fruits.findIndex(fruit => fruit.name === 'watermelon'));`,
            output: `2`,
          },
          {
            label: "for...of",
            value: "for..of",
            desc:
              "'for...of' is used to iterate over the values in an iterable like array or object.",
            link:
              "https://medium.com/@danielmjung/demystifying-the-es6-for-of-loop-9c1a0166d1c6",
            input:
              'let animals = ["🐴", "🐮", "🐤 ", "🐳"]' +
              'let names = ["Harry", "Coco", "Chuck", "Boo boo"] ' +
              "let index = 0" +
              "" +
              "for(animal of animals) {" +
              " console.log(`${names[index]} the ${animal}`)" +
              " index ++ " +
              "}",
            output: `Harry the 🐴 
Coco the 🐮
Chuck the 🐤 
Boo boo the 🐳`,
          },
          {
            label: "for...in",
            value: "for..in",
            desc: "'for...in' is used to iterate over the keys in an object.",
            link: "https://alligator.io/js/for-of-for-in-loops/",
            input:
              'let animals = {🐴: "Harry", 🐮: "Coco", 🐤: "Chuck", 🐳: "Boo boo"}' +
              "" +
              "for(animal in animals) {" +
              " console.log(`${animal} ==> ${animals[animal]}`)" +
              "}",
            output: `🐴 ==> Harry
🐮==> Coco
🐤==> Chuck 
🐳 ==> Boo boo`,
          },
          {
            label: "some",
            value: "some",
            desc:
              "The Array.prototype.some() method determines whether at least one element of the array matches the given condition. It only returns false if none of the array elements match the condition",
            link:
              "https://mariusschulz.com/blog/the-some-and-every-array-methods-in-javascript",
            input: `const isNegative = (el) => el < 0

console.log([-1, 0, 3].some(isNegative))
console.log([1, 2, 3].some(isNegative))`,
            output: `true
false`,
          },
          {
            label: "every",
            value: "every",
            desc:
              "The Array.prototype.every() method determines whether all elements of the array satisfy the given condition or callback function",
            link:
              "https://levelup.gitconnected.com/javascript-array-some-vs-every-vs-foreach-knowledge-scoops-81dfe43369c6",
            input: `console.log([-10, 0, 10].every(x => x >= 0))
console.log([1, 2, 3, 4].every(x => x >= 0))
                   `,
            output: `false
true`,
          },
          {
            label: "forEach",
            value: "forEach",
            desc:
              "The forEach() method, as the name suggests, is used to iterate over every element of the array and perform a desired operation with it.",
            link:
              "https://levelup.gitconnected.com/javascript-array-some-vs-every-vs-foreach-knowledge-scoops-81dfe43369c6",
            input: `let arr = [1, 2, 3, 4, 5];
arr.forEach((value) => { 
  console.log(value); 
});`,
            output: `1
2
3
4
5`,
          },
          {
            label: "map",
            value: "map",
            desc:
              "The array Map is an immutability function takes a callback function iterates through the array, passing the element to the callback function, transforms it and returns a new array.",
            link: "https://www.robinwieruch.de/javascript-map-array",
            input: `const food = ['🥔', '🌽', '🥚'].map(cook)
console.log(food)`,
            output: `['🍟', '🍿', '🍳']`,
          },
          {
            label: "filter",
            value: "filter",
            link:
              "https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/",
            desc:
              "The filter method takes a callback function iterates through an array and returns new array with elements satisfying the callback function",
            input: `const fruits = ['🌭', '🌮', '🍇'].filter(isFruit)
console.log(fruits)`,
            output: `['🍇']`,
          },
          {
            label: "reduce",
            value: "reduce",
            desc:
              "The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.",
            link:
              "https://medium.com/@js_tut/map-filter-and-reduce-animated-7fe391a35a47",
            input: `const reduced = ['🌭', '🌮', '🍔', '🍗', '🍰'].filter(eat)
console.log(reduced)`,
            output: `['💩']`,
          },
        ],
      },
      {
        label: "Operators",
        value: "Operators",
        choices: [
          {
            label: "Rest",
            value: "Rest",
            desc:
              "A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a 'standard' JavaScript array. Only the last parameter can be a 'rest parameter'(as per MDN)",
            link: "https://javascript.info/rest-parameters-spread",
            input: `function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}
                    
myFun("one", "two", "three", "four", "five", "six")`,
            output: `a one
b two
manyMoreArgs ["three", "four", "five", "six"]`,
          },
          {
            label: "Spread",
            value: "Spread",
            desc:
              "It enables extraction of array or object content as single elements",
            link:
              "https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun",
            input: `var array = ['red', 'blue', 'green']
var copyArr = [...array]

console.log('Copy ', copyArr)

const spock = {spock: '🖖'}
const coder = {coder: '👩‍💻'}

const spockCoder = {...spock, ...coder}
console.log(spockCoder)`,
            output: `['red', 'blue', 'green']
{spock: '🖖', coder: '👩‍💻'}`,
          },
        ],
      },
      {
        label: "Async",
        value: "Async",
        choices: [
          {
            label: "Promises",
            value: "Promises",
            desc:
              "The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value[MDN]. States - pending, fulfilled, rejected. 'Promise.prototype' supports to methods .then() and catch(). The promise constructor accepts two parameters - resolve and reject.",
            link:
              "https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a",
            input: `let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result))
       .catch(err => console.log(err)) 
`,
            output: `Done // shows "done!" after 1 second`,
          },
          {
            label: "Generators",
            value: "Generators",
            desc:
              "In contrast, a generator is a function that can stop midway and then continue from where it stopped. In simple terms, it's like a function which can return more once, until the process continues and reaches end. The generator function is distinguished using '*'",
            link:
              "https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36",
            input: `const periodicalUpdate = function* (param) {
  const x = yield(param + 4);
  const y = yield(x / 2);
  return (x + y);
}

const result = periodicalUpdate(4);

console.log(result.next())
console.log(result.next(8))
console.log(result.next(4))`,
            output: `{value: 8, done: false}
// User has to pass the value to next - like dependency injection
{value: 4, done: false} 
{value: 12, done: true}

// Once done is true, the generator function has reached its end`,
          },
        ],
      },
      {
        label: "Data-types",
        value: "Data-types",
        choices: [
          {
            label: "Symbols",
            value: "Symbols",
            desc:
              "Symbol is a new primitive data type. Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values.Once you create a symbol, its value is kept private and for internal use.",
            link: "https://flaviocopes.com/javascript-symbols/",
            input: `let id = Symbol()
console.log(typeof id)

let a1 = Symbol('id')
let a2 = Symbol('id')
console.log(Symbol(a1) == Symbol(a2))`,
            output: `"symbol"
false`,
          },
        ],
      },
      {
        label: "Object",
        value: "Object",
        choices: [
          {
            label: "Proxies",
            value: "Proxies",
            desc:
              "The Proxy object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.)[As per MDN]. Three terms to be defined before proceeding - handler, traps, target.",
            link:
              "https://hackernoon.com/introducing-javascript-es6-proxies-1327419ab413",
            input: `let obj = {
  code: 'code'
}

console.log(obj.code + ' - '+ obj.output) 

let handler = {
  get: function(target, name) {
    return name in target ?  // if key exists
        target[name] :
        'Key does not exist'
  }
}

let p = new Proxy(obj, handler);
console.log(p.code + ' - '+ p.output) 
                    `,
            output: `code - undefined
code - Key does not exist`,
          },
          {
            label: "Enhanced object literals",
            value: "Enhanced object literals",
            desc:
              "Object literals have been even more enhanced to make it flexible to define functions, dynamic property names, and define fields with variable assignment of same name",
            link:
              "https://www.benmvp.com/blog/learning-es6-enhanced-object-literals/",
            input: `const titles = 'First of Her Name, Queen of the Andals and the First Men, Breaker of Chains, Mother of Dragons'
const got = {
  name: "Daenerys Stormborn",
  allegiance: "House Targaryen"
  titles,
  toString() {
    return 'I'm ' + this.name + ' - ' + this.allegiance + ' - ' + this.titles;
  },
  ['got_title_'+1]: "A Song of Ice and Fire"
}

console.log('Game of thrones ' + got)
console.log('The dynamic property is ' + got.got_title_1)`,
            output: `Game of thrones I'm Daenerys Stormborn - House Targaryen - First of Her Name, Queen of the Andals and the First Men, Breaker of Chains, Mother of Dragons
                            
The dynamic property is A Song of Ice and Fire`,
          },
          {
            label: "Sets",
            value: "Sets",
            desc:
              "Set data type represents a set of elements (a collection) and you can iterate through the elements of a set in insertion order. Sets cannot have any duplicate entries.",
            link:
              "https://medium.com/@leonardobrunolima/javascript-tips-set-and-weakset-53be9d264fb1",
            input: `const uniqueValues = new Set();
uniqueValues.add(1)
uniqueValues.add(2)
uniqueValues.add("test")
uniqueValues.add({a: 1, b: 2})

console.log('Set has ', uniqueValues)`,
            output: `Set has {
  0: 1,
  1: "test",
  2: {a: 1, b: 2} 
}`,
          },
          {
            label: "Weak Sets",
            value: "Weak Sets",
            desc:
              "The WeakSet object lets you store weakly held objects in a collection. Eventhough set has a built-in forEach method, we cannot use forEach to iterate over weak sets",
            link:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
            input: `const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);`,
            output: ``,
          },
          {
            label: "Map",
            value: "Map",
            desc:
              "The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value[MDN]",
            link: "https://www.javascripttutorial.net/es6/javascript-map/",
            input: `let map = new Map();
map.set('1', 'str1');   
map.set(1, 'num1');     
map.set(true, 'bool1');

console.log(map.get(1), map.get(true)) `,
            output: `str1 bool1`,
          },
          {
            label: "Weak Map",
            value: "Weak Map",
            desc:
              "The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.[MDN]",
            link:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",
            input: `const weak = new WeakMap()
const obj1 = {age: 24}
const obj2 = Object.create()
weak.set(obj1, 'Confidential')
weak.set(obj2, 'Time travel')

console.log(weak.get(obj1), weak.get(obj2))`,
            output: `Confidential Time travel`,
          },
        ],
      },
      {
        label: "Classes",
        value: "Classes",
        desc:
          "Classes are syntactical sugar over the JavaScript's existing prototypical inheritance. It gives you the feel OOP in JS. Now we can have our very own classes and their constructors.",
        link:
          "https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb",
        input: `class Avenger{
  constructor(name){
    this.name = name;
  }
  displayAvenger(power){
    return console.log('Power of '+this.name+ ' - '+ power);
  }
}

const newAvenger = new Avenger('Captain Javascript');
console.log(newAvenger.displayAvenger('can do anything, even defeat Chuck Norris'));`,
        output: `Power of Captain Javascript - can do anything, even defeat Chuck Norris `,
      },
      {
        label: "Modules(import/export)",
        value: "Modules(import/export)",
        desc:
          "Earlier JS din't support module management system. In ES6 though, JS has introduced 'export' to export variables and functions from a file and 'import' to import methods and variables from another file.",
        link: "https://sambat-tech.netlify.app/modern-javascript-what-new/",
        input: `//variables.js
export const name = "Perry the platypus"

//main.js
import { name } from './variables.js'
console.log(name)`,
        output: `Perry the platypus`,
      },
    ],
  },
  // ES7: {
  //   methods: [],
  // },
  // ES8: {},
  // ES9: {},
  // ES10: {},
  // ES11: {},
};
