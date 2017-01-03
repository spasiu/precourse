# Objects

JavaScript is a multi-paradigm language, combining tools for [imperative](https://en.wikipedia.org/wiki/Imperative_programming), [functional](https://en.wikipedia.org/wiki/Functional_programming), and [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) programming. _FYI, the style of programming we'll learn to use during our course is best described as [procedural](https://en.wikipedia.org/wiki/Procedural_programming)._

Up until now we've covered the _imperative_ (variable declarations, if, and for statements) and _functional_ (ternary expressions, functions, recursion, and callbacks AKA higher order functions) aspects of programming with JavaScript. However, JavaScript is a fundamentally _object-oriented_ language.

Every data type that we have worked with (numbers, booleans, strings, arrays, dictionaries, functions) is an object.

<aside>
Functions are a data type in JavaScript.
</aside>

## WTF is an object?

An object is the combination of data and logic. Up until now we have treated data as inert, something to be operated on and passed to functions, but objects have something called methods. Methods are special functions that reference the values of the data stored in the object.

you can call a method with _dot notation_ `object.method(arguments)`. The period between `object` and `method` is the _dot_ in _dot_ notation.

Because all of the data types we've been working with are objects, they all have a bunch of built-in methods and special properties.

All objects have `toString` and `valueOf` methods.

`valueOf` just returns the value of the object, which isn't very exciting, but `toString` turns things into strings (which sounds mildly more interesting).

So let's do that:

```javascript
let num = 3
num.toString() // '3'

let func = (num) => num + 1
func.toString() // '(num) => num + 1'

let bool = true
bool.toString() // 'true'

let str = 'hello'
str.toString() // 'hello'

let arr = [1, 2, 'three']
arr.toString() // '1,2,three'

let dic = {value: 3}
dic.toString() // '[object Object]'
```

Booleans, strings, and numbers all have pretty expected results, a string representation of the value.

Functions give you the actual function definition as a string.

Arrays turn everything into a concatenated string separated by commas.

Dictionaries just give you a string that says `'[object Object]'`.

Each of these objects has their own unique implementation of the _toString_ method.

<aside>
Dictionaries aren't really a JavaScript data type. They're just objects. We've been using a limited subset of the object's functionality to work with a dictionary like data structure.
</aside>

## Useful methods

When programming with JavaScript we don't generally care that booleans, numbers and functions are objects. Their methods aren't that useful most of the time.

the most helpful built-in methods are on _strings_ and _arrays_.

We'll talk more about dictionaries/objects and methods below when we talk about creating our own methods.

### String objects

First let's talk about `length`. `length` is a dynamic property of string and array objects. It's value is the length of the sequence, _i.e._ (usually) the number of elements in the sequence.

The string `'I love programming'` has a length of `18`. We can access the length like this:

```javascript
let sentiment = 'I love programming'
sentiment.length // 18
```

We say that _length_ is a dynamic property because it changes with the number of elements. Of course strings are immutable, so they never change, but arrays can have new elements inserted, and in that case, the value of _length_ will reflect the change.

Here are a few interesting string methods:

```javascript
let string = 'I love programming'

string.replace('I', 'You') // 'You love programming'

string.slice(0, 6) // 'I love'

string.concat(' with JavaScript') // 'I love programming with JavaScript'

string.split(' ') // ['I', 'love', 'programming']

// indexOf gives you the index of a substring if it exists, or -1 if it doesn't
string.indexOf('p') // 7

string.indexOf('q') // -1
```

None of the methods we just mentioned mutate the string (strings are immutable), they return a new version of the string which you can then work with as you like.

<aside>
If you like you can take a look at the documentation for the string object <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">here</a>. The methods are listed as <b>String.prototype.method</b> in the sidebar. We'll talk more about prototypes in the next module.
</aside>

### Array objects

As well as the _**length**_ property, arrays share many methods with strings. Methods like _**slice**_, _**concat**_, and _**indexOf**_ work the same way on arrays as they do on strings.

The major difference between arrays and Strings is that arrays are mutable. This doesn't mean that _**slice**_, _**concat**_, and _**indexOf**_ will mutate arrays (they will return a new array), but it does mean that there are other methods that can mutate arrays.

#### Methods which do not mutate arrays

Let's take a look at some array methods that **don't** mutate the array, just return a new one:

```javascript
let arr = [1, 2, 3]

// Remember when we made our own map?
// The array actually has a map method.
// Because the data context of the map is the array,
// we don't have to pass an array as an argument,
// we just pass it a function.

let addOne = (num) => num + 1
arr.map(addOne) // [2, 3, 4]

// Here'a another map like method
// that doesn't mutate the array:

// Filter removes items from the new array
// if the callback function returns false.
let isOdd = (num) => num % 2 !== 0
arr.filter(isOdd) // [1, 3]
```

There's something worth mentioning at this point. When people use functions like _reduce_ and _filter_ with callback functions, they don't usually define the function first.

JavaScript allows you to declare anonymous functions, functions whose only use is to be immediately [invoked](https://en.wikipedia.org/wiki/Invocation_%28disambiguation%29) or passed as a [callback](https://en.wikipedia.org/wiki/Callback_%28computer_programming%29).

Let's take a look at running our _map_ and _filter_ with anonymous functions:

```javascript
let nums = [4, 5, 6]

nums.map((num) => num + 3) // [7, 8, 9]

nums.filter((num) => num % 2 !== 0) // [5]
```

At first it's a little harder to read, because of the nested parentheses. But it means you don't have to jump around to read the function declaration and then look how it's used. You can read the whole expression in one line.

#### Method chaining

When a method returns an object, it's possible to immediately call another method without defining the result as a variable. Let's chain call map and filter:

```javascript
let ns = [1, 2, 3, 4, 5]
ns.map((n) => n + 1).filter((n) => n % 2 !== 0) // [3, 5]
```

We can make this more readable by adding some whitespace:

```javascript
ns
  .map((n) => n + 1)
  .filter((n) => n % 2 !== 0) // [3, 5]
```

#### Methods which mutate arrays

As we know, an array is an object with data and methods. Some of the array's methods can mutate it's data instead of returning a new object. Let's consider a few:

```javascript
let letters = ['b', 'c', 'a', 'd']

// Sort by character order.
letters.sort() // ['a', 'b', 'c', 'd']
letters // ['a', 'b', 'c', 'd']

// Add a new item to the end of the array.
letters.push('e')
letters // ['a', 'b', 'c', 'd', 'e']

// Remove the last item from the array
// and return it.
letters.pop() // 'e'
letters // ['a', 'b', 'c', 'd']

// Remove a subarray from the array
// and return it.
letters.splice(3, 4) // ['d']
letters // ['a', 'b', 'c']
```

As you can see, the value of `letters` has been changed by each of the above method calls.

While you're becoming familiar with JavaScript you should always ask yourself if the array method your calling is going to mutate the array.

## Generic objects

Objects are actually dictionaries. JavaScript doesn't have a _dictionary_ data type, it just has objects, and objects all act as dictionaries, but with super powers.

We can create our own generic objects using the dictionary syntax we learned previously.

We know how to set and access properties on generic objects with **[** brackets **]** `obj['key'] = 'value'`. We used bracket notation because it makes sense when we're treating an object like a data structure with keys that work similar to the indexes of an array.

When we treat an object like an **object** we use dot **.** notation to access properties `obj.key = 'value'`.

Let's create a new object:

```javascript
let pizza = {
    style: 'Napolitana',
    size: 14, // inches
    price: 1600, // cents
    slices: 8
}

pizza.slices // 8
```

<aside>
None of the above keys have any string quotes. Those are actually optional. If a key is a single string without any spaces or special characters, you can just define it without quotes, and access it with dot notation.
</aside>

## Storing functions in objects (namespacing)

Because functions are just data like objects, we can actually add functions as values in objects:

```javascript
let namespace = {
    addOne: (num) => num + 1
}

namespace.addOne(3) // 4
```

This is called namespacing. It allows us to keep dictionaries full of functions, without polluting the global namespace with our _addOne_ function. This practice is very important when you have tens of scripts running on your page, each with many hundreds of lines of code, and each written by their own teams. It's a way of avoiding naming clashes.

## Declaring object methods

Methods are like our regular _=>_ arrow functions, except they have access to special variable called `this`.

`this` is a reference to the object on which the method is defined, it allows the method function to use or mutate the object's data.

Let's declare and use a method on our pizza object:

```javascript
pizza = {
    eat(slices) {
        this.slices = this.slices - slices
    },
    style: 'Napolitana',
    size: 14, // inches
    price: 1600, // cents
    slices: 8
}

pizza.eat(3)

pizza.slices // 5
```

...and that's how you define a method:

**methodName(**_parameters_**) {** _function logic_ **}**

## Summary

We just learned that all our data types are also objects, and that those objects have methods.
We learned to use some useful array and string methods
We also learned to create our own generic objects with methods.

## Even MOAR Examples

### Translator function example

Let's create a function that translates multi-word strings (badly) to simplified Mandarin Chinese:

```javascript
let translate = (message) => {
    let dic = {
        hello: '你好',
        this: '我',
        is: '上午',
        dog: '狗'
    }

    return message
        .split(' ')
        .map((word) => {
            let lowerCased = word.toLowerCase()
            return dic[lowerCased]
        })
        .join(' ')
}

translate('Hello this is dog') // '你好 我 上午 狗'
```

![this is dog](http://i2.kym-cdn.com/photos/images/facebook/000/217/040/48ACD.png)

### Very basic object example

Let's inspect `this`:

```javascript
let obj = {
    value: 'hello',
    getThis() {
        console.log(this)
    }
}

obj.getThis() // Object {value: "hello"}
```

![this is dog](http://i2.kym-cdn.com/photos/images/facebook/000/217/040/48ACD.png)

### Dictionary example

Let's turn our English to Chinese dictionary into an object:

```javascript

let dictionary = {
    definitions: {
        hello: '你好',
        this: '我',
        is: '上午',
        dog: '狗'
    },
    translate(word) {
        return this.definitions[word.toLowerCase()]
    }
}

dictionary.translate('Hello') // '你好'
```

![this is dog](http://i2.kym-cdn.com/photos/images/facebook/000/217/040/48ACD.png)

### Pizza object constructor example

```javascript
let makePizza = (options) => {
    let rad = options.size / 2
    let area = rad * rad * 3.14
    let areaPerSlice = area / options.slices
    let pizza = {
        area,
        areaPerSlice,
        eat(slices) {
            let eaten = slices * this.areaPerSlice
            this.slices = this.slices - slices
            this.area = this.area - eaten
            return eaten
        }
    }

    return Object.assign(pizza, options)
}

let order = {
    style: 'Napolitana',
    price: 1600, // cents
    size: 14, // inches
    slices: 8
}

let pizza = makePizza(order)

pizza.style // 'Napolitana'

pizza.eat(4) // 76.93

pizza.slices // 4

pizza.area // 76.93
```

![pizza dog](https://media.giphy.com/media/l0FyGs5LYbNPq/giphy.gif)

## Exercises

given this data structure:

```javascript
let coords = [
    {x: -3, y: 4},
    {x: 0, y: 4},
    {x: 2, y: 1},
    {x: 1, y: 2}
]
```

- use `.map` to only get the x values
- use `.map` to only get the y values
- use `.filter` to remove all coordinates with _x_ less than _0_
- use `.filter` to only keep coordinates where _y_ is _4_
- use `.concat` to add these additional coordinates `[{x: 0, y: 1}]`
- use `.slice` to get the last 2 coordinates
- chain `.filter` and `.map` to only get _x_ greater than _0_ values


## Practice

Create a pizza restaurant object that sells pizza objects for money.
