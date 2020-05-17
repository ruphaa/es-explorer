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
            input: `<span style="color: var(--light-blue)">const number = 42;</span><br>
                    <span style="color: var(--light-blue)">const list = [1,2,3]</span><br>
                    try {<br>
                    &nbsp;&nbsp;&nbsp;&nbspnumber = 99;<br>
                    } catch (err) {<br>
                    &nbsp;&nbsp;&nbsp;&nbspconsole.log(err);<br>
                    }<br>
                    console.log(number)<br>
                    list[3] = 4;<br>
                    console.log(list)
                      `,
            output: `TypeError: Assignment to constant variable.<br>
                    42<br>
                    [1,2,3,4]<br>
                    `,
          },
          {
            label: "let",
            value: "let",
            desc:
              "let enables you to define values. They have block scope({}). These variables are not hoisted or cannot be used before declaration",
            link: "https://wesbos.com/let-vs-const",
            input: `function printVariables(iAmAwesome) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--pink)">let x = 2;</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(iAmAwesome) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--pink)">let x = 50;</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(x)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log(x)<br>
                    }`,
            output: `50<br>
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
            input: `function showMeSomething(a, <span style="color: var(--green)">b = 'Chuck Norris is god'</span>) {<br>
                    &nbsp;&nbsp;&nbsp;&nbspconsole.log(a, b)<br>
                    }<br>
                    console.log(showMeSomething(2, 'Cool cool cool'))<br>
                    console.log(showMeSomething(2))`,
            output: `2 Cool cool cool<br>
                    2 Chuck Norris is god`,
          },
          {
            label: "Arrow functions",
            value: "Arrow functions",
            desc:
              "An arrow function is an alternative way to a regular function expression, it is a simpler way to define a function. Few exceptions - it doesn't have its own bindings to this, arguments, super....",
            link: "https://javascript.info/arrow-functions-basics",
            input: `<span style="color: var(--dust-yellow)">const multiple(a, b) => a*b</span><br>
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
              "let tag = 'Awesome'<br>" + "console.log(`Javascript is ${tag}`)",
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
            input: `let <span style="color: var(--pink)">[firstName, lastName] = ["Harry", "Potter"]</span><br>
                    console.log(firstName, lastName)<br>
                    <br>
                    //swap variables without using extra variable<br>
                    let a = 4, b = 5;<br>
                    <span style="color: var(--pink)">[a, b] = [b, a]</span><br>
                    console.log('Swap results', a, b)`,
            output: `Harry Potter<br>
                    Swap results 5 4`,
          },
          {
            label: "object",
            value: "object",
            desc:
              "Object destructuring is a powerful JS expression to extract data out into a distinct variables.",
            link: "https://javascript.info/destructuring-assignment",
            input: `let options = { <br>
                    &nbsp;&nbsp;&nbsp;&nbspheight: 100,<br>
                    &nbsp;&nbsp;&nbsp;&nbspwidth: 200,<br>
                    &nbsp;&nbsp;&nbsp;&nbspshape: "Rectangle"<br>
                    }<br>
                    <span style="color: var(--medium-blue)">let {height, width, shape} = options;</span><br>
                    console.log('Height', height)<br>
                    console.log('Width', width)<br>
                    console.log('Shape', shape)`,
            output: `Height 100<br>
                     Width 200<br>
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
            input: `const food = "🍕🍔🌭🍟🌮"<br>
                    console.log('Food as an array', <span style="color: var(--bright-green)">Array.from</span>(food))`,
            output: `Food as an array ['🍕', '🍔', '🌭', '🍟', '🌮']`,
          },
          {
            label: "Array.of()",
            value: "Array.of()",
            desc:
              "The 'of' method accepts arguments and returns a new array with the individual arguments as entries to the new Array instance",
            link:
              "https://www.hackerearth.com/practice/notes/hemanth12/es6-array-methods/",
            input: `const monkeys = <span style="color: var(--orange)">Array.of</span>('🙈', '🙉', '🙊')<br>
                    console.log(monkeys)`,
            output: `['🙈', '🙉', '🙊']`,
          },
          {
            label: "Array.copyWithin()",
            value: "Array.copyWithin()",
            desc:
              "This is an interesting addition to ES6 array methods, like the name implies, it copies the values inside an array itself. First argument is the target index position in the array where it's value will be overriden, second arguement is the index from where the values has to be copied. It can accept 3 arguments.",
            link: "https://vegibit.com/new-array-functions-in-es6/",
            input: `let prices = [500, 600, 700, 800, 900, 1000, 1500];<br>
                    prices.<span style="color: var(--golden-yellow)">copyWithin(2, 0, 3)</span>;<br>
                    console.log(prices);<br>`,
            output: `[ 500, 600, 500, 600, 700, 1000, 1500 ]`,
          },
          {
            label: "Array.entries()",
            value: "Array.entries()",
            desc:
              "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array[MDN]",
            link:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries",
            input: `const array1 = ['a', 'b', 'c'];<br>
                    const iterator1 = <span style="color: var(--pink-sandal)">array1.entries()</span>;<br>
                    <br>
                    console.log(<span style="color: var(--pink-sandal)">iterator1.next().value</span>);<br>
                    <br>
                    console.log(<span style="color: var(--pink-sandal)">iterator1.next().value</span>);`,
            output: `[0, "a"]<br>
                     [1, "b"]`,
          },
          {
            label: "Array.fill()",
            value: "Array.fill()",
            desc:
              "The fill method fills all the elements of an array from a start index to an end index with a static value. The start and end index values are optional. The default of start is zero and the default of end is this.length",
            link: "https://vegibit.com/new-array-functions-in-es6/",
            input: `console.log('Fill fruits with Pizza', ['🍎','🍓','🍉'].fill('🍕'))<br>
                    console.log([1, 2, 3].fill(4, 1, 2))`,
            output: `Fill fruits with Pizza (3) ["🍕", "🍕", "🍕"]<br>
                    [1, 4, 3]`,
          },
          {
            label: "Array.find()",
            value: "Array.find()",
            desc:
              "This method aceepts a conditional function as a callback, which when satisfied returns the first element that is found. If not element satifies the condition, it returns undefined.",
            link: "https://vegibit.com/new-array-functions-in-es6/",
            input: `const fruits = [<br>
                    &emsp;{name: 'apples', quantity: 2},<br>
                    &emsp;{name: 'bananas', quantity: 0},<br>
                    &emsp;{name: 'watermelon', quantity: 5}<br>
                    ]<br>
                    <br>
                    console.log(fruits.<span style="color: var(--golden-yellow)">find(fruit => fruit.name === 'watermelon')</span>);<br>`,
            output: `{ name: 'watermelon', quantity: 5 }`,
          },
          {
            label: "Array.findIndex()",
            value: "Array.findIndex()",
            desc:
              "This method accepts a testing function as a callback and returns the index of the first element found satisfying the condition and returns undefined if not found",
            link:
              "https://www.hackerearth.com/practice/notes/hemanth12/es6-array-methods/",
            input: `const fruits = [{<br>
                    &emsp;{name: 'apples', quantity: 2},<br>
                    &emsp;{name: 'bananas', quantity: 0},<br>
                    &emsp;{name: 'watermelon', quantity: 5}<br>
                    }]<br>
                    <br>
                    console.log(fruits.<span style="color: var(--golden-yellow)">findIndex(fruit => fruit.name === 'watermelon')</span>);<br>`,
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
              'let animals = ["🐴", "🐮", "🐤 ", "🐳"]<br>' +
              'let names = ["Harry", "Coco", "Chuck", "Boo boo"] <br>' +
              "let index = 0<br>" +
              "<br>" +
              "for(animal of animals) {<br>" +
              "&emsp; console.log(`${names[index]} the ${animal}`)<br>" +
              "&emsp; index ++ <br>" +
              "}",
            output: `Harry the 🐴 <br>
                    Coco the 🐮<br>
                    Chuck the 🐤 <br>
                    Boo boo the 🐳`,
          },
          {
            label: "for...in",
            value: "for..in",
            desc: "'for...in' is used to iterate over the keys in an object.",
            link: "https://alligator.io/js/for-of-for-in-loops/",
            input:
              'let animals = {🐴: "Harry", 🐮: "Coco", 🐤: "Chuck", 🐳: "Boo boo"}<br>' +
              "<br>" +
              "for(animal in animals) {<br>" +
              "&emsp; console.log(`${animal} ==> ${animals[animal]}`)<br>" +
              "}",
            output: `🐴 ==> Harry<br>
                    🐮==> Coco<br>
                    🐤==> Chuck <br>
                    🐳 ==> Boo boo`,
          },
          {
            label: "some",
            value: "some",
            desc:
              "The Array.prototype.some() method determines whether at least one element of the array matches the given condition. It only returns false if none of the array elements match the condition",
            link:
              "https://mariusschulz.com/blog/the-some-and-every-array-methods-in-javascript",
            input: `const isNegative = (el) => el < 0<br>
                   console.log([-1, 0, 3].<span style="color: var(--dusk-green)">some(isNegative)</span>)<br>
                   console.log([1, 2, 3].<span style="color: var(--dusk-green)">some(isNegative)</span>)`,
            output: `true<br>
                    false`,
          },
          {
            label: "every",
            value: "every",
            desc:
              "The Array.prototype.every() method determines whether all elements of the array satisfy the given condition or callback function",
            link:
              "https://levelup.gitconnected.com/javascript-array-some-vs-every-vs-foreach-knowledge-scoops-81dfe43369c6",
            input: `console.log([-10, 0, 10].<span style="color: var(--dusk-green)">every</span>(x => x >= 0))<br>
                    console.log([1, 2, 3, 4].<span style="color: var(--dusk-green)">every</span>(x => x >= 0))
                   `,
            output: `false<br>
                    true`,
          },
          {
            label: "forEach",
            value: "forEach",
            desc:
              "The forEach() method, as the name suggests, is used to iterate over every element of the array and perform a desired operation with it.",
            link:
              "https://levelup.gitconnected.com/javascript-array-some-vs-every-vs-foreach-knowledge-scoops-81dfe43369c6",
            input: `let arr = [1, 2, 3, 4, 5];<br>
                    arr.forEach((value) => { <br>
                    &emsp;console.log(value); <br>
                    });`,
            output: `1<br>
                    2<br>
                    3<br>
                    4<br>
                    5`,
          },
          {
            label: "map",
            value: "map",
            desc:
              "The array Map is an immutability function takes a callback function iterates through the array, passing the element to the callback function, transforms it and returns a new array.",
            link: "https://www.robinwieruch.de/javascript-map-array",
            input: `const food = ['🥔', '🌽', '🥚'].<span style="color: var(--candy)">map</span>(cook)<br>
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
            input: `const fruits = ['🌭', '🌮', '🍇'].<span style="color: var(--nice-purple)">filter</span>(isFruit)<br>
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
            input: `const reduced = ['🌭', '🌮', '🍔', '🍗', '🍰'].<span style="color: var(--bright-green)">filter</span>(eat)<br>
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
            input: `function <span style="color: var(--light-blue)">myFun(a, b, ...manyMoreArgs)</span> {<br>
                    &emsp;console.log("a", a)<br>
                    &emsp;console.log("b", b)<br>
                    &emsp;console.log("manyMoreArgs", manyMoreArgs)<br>
                    }<br>
                    <br>
                    myFun("one", "two", "three", "four", "five", "six")<br>`,
            output: `a one<br>
                     b two<br>
                     manyMoreArgs [three, four, five, six]<br>`,
          },
          {
            label: "Spread",
            value: "Spread",
            desc:
              "It enables extraction of array or object content as single elements",
            link:
              "https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun",
            input: `var array = ['red', 'blue', 'green']<br>
                    <span style="color: var(--medium-blue)">var copyArr = [...array]</span><br>
                    <br>
                    console.log('Copy ', copyArr)<br>
                    <br>
                    const spock = {spock: '🖖'}<br>
                    const coder = {coder: '👩‍💻'}<br>
                    <br>
                    <span style="color: var(--medium-blue)">const spockCoder = {...spock, ...coder}</span><br>
                    console.log(spockCoder)`,
            output: `['red', 'blue', 'green']<br>
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
            input: `let promise = new Promise(function(resolve, reject) {<br>
                    &emsp;setTimeout(() => resolve("Done!"), 1000);<br>
                    });<br>
                    <br>
                    promise.then(result => console.log(result))<br>
                    &emsp;&emsp;.catch(err => console.log(err)) <br>
                    );`,
            output: `Done &nbsp;&nbsp;&nbsp;&nbsp;// shows "done!" after 1 second`,
          },
          {
            label: "Generators",
            value: "Generators",
            desc:
              "In contrast, a generator is a function that can stop midway and then continue from where it stopped. In simple terms, it's like a function which can return more once, until the process continues and reaches end. The generator function is distinguished using '*'",
            link:
              "https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36",
            input: `const periodicalUpdate = <span style = "color: var(--nice-purple)">function* </span>(param) {<br>
            &emsp;const x = <span style = "color: var(--nice-purple)">yield</span>(param + 4);<br>
            &emsp;const y = <span style = "color: var(--nice-purple)">yield</span>(x / 2);<br>
            &emsp;return (x + y);<br>
            }<br>
            <br>
            const result = periodicalUpdate(4);<br>
            <br>
            console.log(<span style = "color: var(--light-blue)">result.next()</span>)<br>
            console.log(<span style = "color: var(--light-blue)">result.next(8)</span>)<br>
            console.log(<span style = "color: var(--light-blue)">result.next(4)</span>)<br>`,
            output: `{value: 8, done: false}<br>
                    <span style="color: var(--dusk-green)">// User has to pass the value to next - like dependency injection</span><br>
                    {value: 4, done: false}<br> 
                    {value: 12, done: true}<br>
                    <br>
                    <span style="color: var(--dusk-green)">// Once done is true, the generator function has reached its end</span>`,
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
            input: `let id = <span style="color: var(--dust-yellow)">Symbol()</span><br>
                    console.log(typeof id)<br>
                    let a1 = <span style="color: var(--dust-yellow)">Symbol('id')</span><br>
                    let a2 = <span style="color: var(--dust-yellow)">Symbol('id')</span><br>
                    console.log(Symbol(a1) == Symbol(a2))<br>`,
            output: `"symbol"<br>
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
            input: `let obj = {<br>
                    &emsp;code: 'code'<br>
                    }<br>
                    <br>
                    console.log(obj.code + ' - '+ obj.output) <br>
                    <br>
                    let handler = {<br>
                    &emsp;get: function(target, name) {<br>
                    &emsp;&emsp;return name in target ?  // if key exists<br>
                    &emsp;&emsp;&emsp;target[name] :<br>
                    &emsp;&emsp;&emsp;'Key does not exist'<br>
                    &emsp;}<br>
                    }<br>
                    <br>
                    <span style="color: var(--dust-yellow)">let p = new Proxy(obj, handler);</span><br>
                    console.log(p.code + ' - '+ p.output) <br>
                    `,
            output: `code - undefined<br>
                    code - Key does not exist`,
          },
          {
            label: "Enhanced object literals",
            value: "Enhanced object literals",
            desc:
              "Object literals have been even more enhanced to make it flexible to define functions, dynamic property names, and define fields with variable assignment of same name",
            link:
              "https://www.benmvp.com/blog/learning-es6-enhanced-object-literals/",
            input: `const titles = 'First of Her Name, Queen of the Andals and the First Men, Breaker of Chains, Mother of Dragons'<br>
                    const got = {<br>
                    &emsp;name: "Daenerys Stormborn",<br>
                    &emsp;allegiance: "House Targaryen"<br>
                    &emsp;titles,<br>
                    &emsp;toString() {<br>
                    &emsp;&emsp;return 'I'm ' + this.name + ' - ' + this.allegiance + ' - ' + this.titles;<br>
                    &emsp;},<br>
                    &emsp;['got_title_'+1]: "A Song of Ice and Fire"<br>
                    }<br>
                    <br>
                    console.log('Game of thrones ' + got)<br>
                    console.log('The dynamic property is ' + got.got_title_1)`,
            output: `Game of thrones I'm Daenerys Stormborn - House Targaryen - First of Her Name, Queen of the Andals and the First Men, Breaker of Chains, Mother of Dragons<br>
                    <br>        
                    The dynamic property is A Song of Ice and Fire`,
          },
          {
            label: "Sets",
            value: "Sets",
            desc:
              "Set data type represents a set of elements (a collection) and you can iterate through the elements of a set in insertion order. Sets cannot have any duplicate entries.",
            link:
              "https://medium.com/@leonardobrunolima/javascript-tips-set-and-weakset-53be9d264fb1",
            input: `const uniqueValues = <span style="color: var(--dust-yellow)">new Set();</span><br>
                    uniqueValues.add(1)<br>
                    uniqueValues.add(2)<br>
                    uniqueValues.add("test")<br>
                    uniqueValues.add({a: 1, b: 2})<br>
                    <br>
                    console.log('Set has ', uniqueValues)`,
            output: `Set has {<br>
                     &emsp;0: 1,<br>
                     &emsp;1: "test",<br>
                     &emsp;2: {a: 1, b: 2} <br>
                    }`,
          },
          {
            label: "Weak Sets",
            value: "Weak Sets",
            desc:
              "The WeakSet object lets you store weakly held objects in a collection. Eventhough set has a built-in forEach method, we cannot use forEach to iterate over weak sets",
            link:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
            input: `const ws = <span style="color: var(--dust-yellow)">new WeakSet()</span>;<br>
                    const foo = {};<br>
                    const bar = {};<br>
                    ws.add(foo);<br>
                    ws.add(bar);<br>
                    `,
            output: ``,
          },
          {
            label: "Map",
            value: "Map",
            desc:
              "The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value[MDN]",
            link: "https://www.javascripttutorial.net/es6/javascript-map/",
            input: `let map = <span style="color: var(--pink-sandal)">new Map()</span>;<br>
                    map.set('1', 'str1');<br>   
                    map.set(1, 'num1'); <br>    
                    map.set(true, 'bool1');<br>
                    <br>
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
            input: `const weak = <span style="color: var(--shiny-green)">new WeakMap()</span><br>
                    const obj1 = {age: 24}<br>
                    const obj2 = Object.create()<br>
                    weak.set(obj1, 'Confidential')<br>
                    weak.set(obj2, 'Time travel')<br>
                    <br>
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
        input: `class Avenger{<br>
                &emsp;constructor(name){<br>
                &emsp;&emsp;this.name = name;<br>
                &emsp;}<br>
                &emsp;displayAvenger(power){<br>
                &emsp;&emsp;return console.log('Power of '+this.name+ ' - '+ power);<br>
                &emsp;}<br>
                }<br>
                <br>
                const newAvenger = new Avenger('Captain Javascript');<br>
                console.log(newAvenger.displayAvenger('can do anything, even defeat Chuck Norris'));`,
        output: `Power of Captain Javascript - can do anything, even defeat Chuck Norris `,
      },
      {
        label: "Modules(import/export)",
        value: "Modules(import/export)",
        desc:
          "Earlier JS din't support module management system. In ES6 though, JS has introduced 'export' to export variables and functions from a file and 'import' to import methods and variables from another file.",
        link: "https://sambat-tech.netlify.app/modern-javascript-what-new/",
        input: `//variables.js<br>
                export const name = "Perry the platypus"<br>
                <br>
                //main.js<br>
                import { name } from './variables.js'<br>
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
