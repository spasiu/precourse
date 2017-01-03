# Iterators

Iterators are tools we can use to iterate. We can [iterate](https://en.wikipedia.org/wiki/Iteration) many things, but the most common (and practical) use of iteration is to iterate over data structures like arrays and dictionaries.

## Iterating over arrays

Let's introduce a new statement called **_for of_**. We can use _for of_ to iterate over an array, completing a block of code for every item in the array.

```javascript
for (let item of array) {
    // code block
}
```

Let's log every item in an array of numbers:

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let number of numbers) {
    console.log(number)
}
```

![for of numbers](/images/log-numbers.png)

Let's add up the total value of a list of purchases in pieces of silver:

```javascript
let purchases = [
    {
        'item': 'Three draught horses',
        'silver': 60
    }, {
        'item': 'A fine cow',
        'silver': 10
    }, {
        'item': 'A flock of sheep (20)',
        'silver': 40
    }
]

let piecesOfSilver = 0

for (let purchase of purchases) {
    piecesOfSilver = piecesOfSilver + purchase['silver']
}

console.log(piecesOfSilver)
```

![pieces of silver](/images/pieces-of-silver.png)

## Iterating over dictionaries

You can iterate over the keys of a dictionary in a way similar to iterating over the elements in an array, using the **_for in_** statement. _for in_ will perform the code in the block once for every key in the dictionary object.

```javascript
for (let key in dictionary) {
    // code block
}
```

What if we had a ledger (formatted as a dictionary) containing the property owned by our household, and then we had another ledger which contained current market prices for property. How could we define the total property value of our household?

```javascript
let householdProperty = {
    'cows': 18,
    'sheep': 129,
    'draught horses': 4,
    'chickens': 247,
    'buildings': 5,
    'silver': 117
}

// value in silver pieces
let marketValue = {
    'cows': 10,
    'sheep': 2,
    'draught horses': 20,
    'chickens': .1,
    'buildings': 10,
    'silver': 1
}

let value = 0

for (let property in householdProperty) {
    value = value + householdProperty[property] * marketValue[property]
}

console.log(value);
```

Let's say we had a selection of pizzas, and wanted to find which one had the best price per square inch:

```javascript
let pizzas = {
    'special 4 x 9" for $33': {
        'size': 9,
        'price': 33/4
    },
    '9"': {
        'size': 9,
        'price': 9.5
    },
    '12"': {
        'size': 12,
        'price': 13.5
    },
    '14"': {
        'size': 14,
        'price': 16        
    }
}

let getPricePerInch = (diameter, price) => {
    let pi = 3.14
    let radius = diameter / 2
    return price / (pi * radius * radius)
}

let pizzaWithHighestValue
let bestPricePerInch

for (let pizzaName in pizzas) {
    let pizza = pizzas[pizzaName]
    let pricePerInch = getPricePerInch(pizza['size'], pizza['price'])

    if (bestPricePerInch === undefined || pricePerInch < bestPricePerInch) {
        pizzaWithHighestValue = pizzaName
        bestPricePerInch = pricePerInch
    }
}


// let's get rid of some of the trailing decimal places
let prettyPrice = Math.round(bestPricePerInch * 1000) / 1000

console.log(`The cheapest pizza is the ${pizzaWithHighestValue} at $${prettyPrice} per square inch`)
```

## Recursion

Remember recursion? The process by which a function calls itself over and over again, until it has produced the desired state, at which point it returns?

We can use recursion to iterate over nested data structures when we're not sure how deep the nesting goes.

Imagine we created a robot to unwrap and unpack holiday gifts. We can never be certain that we've reached the final layer of wrapping paper, or plastic packaging.

Each layer of packaging is represented by another dictionary. Let's unpack all the gifts and log them.

```javascript
let packagedGifts = [
    {
        contents    : {
            contents: {
                contents: 'fruitcake'
            }
        }
    },
    {
        contents: 'hand knit sweater'
    },
    {
        contents: {
            contents: 'book'
        }
    },
    'cash money'
]

let unpack = (package) => {
    if (typeof(package) === 'string') {
        return console.log(package)
    }
    unpack(package.contents)
}

for (let gift of packagedGifts) {
    unpack(gift)
}
```

The robot now possesses the logic to accept any gift, even an unwrapped wad of cash from grandma, who has no idea what you youngsters like these days.

Uh oh, what if some rich and enterprising uncle or aunt packs a box that contains multiple gifts?

_**TypeError: Cannot read property 'contents' of undefined**_

![](https://media.giphy.com/media/6OWIl75ibpuFO/giphy.gif)

The robot probably destroyed itself and your precious gifts.

Let's try that again:

```javascript
let packagedGifts = [
    {
        'contents'    : {
            'contents': {
                'contents': 'fruitcake'
            }
        }
    },
    {
        'contents': 'hand knit sweater'
    },
    {
        'contents': {
            'contents': 'book'
        }
    },
    'cash money',
    {
        'contents': [
            {
                'contents': 'Macbook Pro'
            }, {
                'contents': 'Box of jewels'
            }
        ]
    }
]

let unpack = (package) => {
    if (typeof(package) === 'string') {
        return console.log(package);
    }

    if (package['contents'] !== undefined) {
        return unpack(package.contents)
    }

    for (let nestedPackage of package) {
        unpack(nestedPackage)
    }
}

unpack(packagedGifts)
```

Now our `unpack` function handles three cases:
- If the package is a _string_ it treats it as a gift, and logs it.
- If the package has a `'contents'` property it unpacks the contents.
- otherwise it iterates over what is assumed to be an array unpacking each of the items within.

## Counting

Remember that arrays are indexed, and that we can access the elements in the array by their index with **[**_brackets_**]**. It happens sometimes that we want to access the elements of the array by their index directly instead of blindly iterating over the elements.

Here's how we count recursively:

```javascript
let count = (limit, n = 0) => {
    if (n === limit) {
        return
    }
    console.log(n)
    count(limit, n + 1)
}

count(10)
```

![counting](/images/counting.png)

Now what if instead of logging the numbers we used them to access the indexes of an array:

```javascript
let logElements = (array, n = 0) => {
    let element = array[n]
    if (element === undefined) {
        return
    }
    console.log(element)
    logElements(array, n + 1)
}

let list = ['one', 'two', 'three'];

logElements(list)
```

Now we're counting until we encounter an undefined index, and then we're stopping, and instead of logging the index, we're logging the element of the array.

## Map

**_map_** is when we iterate over an array performing an action on each element in the array and inserting the result into a new array. A _map_ function takes as an argument an array, and a function that it will call on each element in the array, and returns a new array with the results. It's just like a callback, a function that calls another function.

Let's implement _map_ using recursion:

```javascript
let map = (array, callback, newArray=[], index=0) => {
    let element = array[index]

    if (element === undefined) {
        return newArray
    }

    newArray[index] = callback(element)

    return map(array, callback, newArray, index + 1)
}

// let's add 1 to each number in a list of numbers
let numbers = [1, 2, 3, 4]
let addOne = (number) => number + 1
map(numbers, addOne) // [2, 3, 4, 5]
```

Once you have a _map_ function you can use it on any array with any callback function you like.

We can use the _map_ we wrote above to _map_:

```javascript
let words = [`I'm`, 'so', 'meta', 'even', 'this', 'acronym']
let getFirstChar = (string) => string[0]
map(words, getFirstChar) // ['I', 's', 'm', 'e', 't', 'a']
```

We didn't need to define a new map function, we just had to pass another array and function to map, and we got out a new array of the same length as the original.

## Summary

We covered a lot in this module. Here are the four things we want to become comfortable with:
- Iterating over an array's elements with **_for of_**.
- Iterating over a dictionary's keys with **_for in_**.
- Recursively iterating over nested data structures.
- Using **_map_** to create new arrays.

## Exercises

1. Log all the elements in this array:
    ```javascript
    let listOfNames = ['Nicholo', 'August', 'Fabius']
    ```

2. Log all the keys in this dictionary:
    ```javascript
    let nameToTitle = {
        'Nicholo': 'bureaucrat',
        'August': 'king',
        'Fabius': 'general'
    }
    ```

3. Log all the values in the above dictionary.

4. Log all of the values in the arrays:
    ```javascript
    let menu = {
        'breakfast': ['oatmeal', 'apple', {'cold cereal': ['flakes', 'Os']}],
        'lunch': ['polenta', 'salad', {'sandwiches': ['banh mi', 'pita']}],
        'dinner': ['couscous', 'burrito']
    }
    ```

5. Use _map_ to square all the numbers in this array:
    ```javascript
    let ns = [1,2,3,4,5,6,7,8,9]
    ```

6. Use _map_ to extract all the numbers from this array:
    ```javascript
    let ns = [{'n': 1}, {'n': 2}, {'n': 3}]
    ```

## Practice

Create a dictionary of translated words between two human languages. Something like this:

```javascript
let dictionary = {
    'vache': 'cow',
    'souris': 'mouse'
}
```

Your job is to map over an array of words to get a new array of translated words.
For example:

```javascript
let words = ['vache', 'souris', 'citron', 'fromage']
```

By the way, what happens if there's no translation in your dictionary for a word in the array? How should and can you deal with it from a user experience perspective?

## Advanced readings
- [for of](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)
- [for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for loops](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for)
- [iteration and looping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
