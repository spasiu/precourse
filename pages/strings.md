So far we've discovered three data types:
- Numbers
- Booleans
- Functions

Now we're going to learn about three more:
- Strings
- Arrays
- Objects

These new types are extremely data rich and can contain massive amounts of information that can be organized into complex structures... and even human readable text ;)

## Strings

Strings are sequences of characters. Characters are things like the letters of the alphabets, punctuation, and numbers across many human languages.

There are three ways to define strings in JavaScript:

    // double quotes
    "I am a string."

    // single quotes
    'I am a string.'

    // backticks
    `I am a string.`

I mention this because you'll see examples of people using all three methods on the Web. However, the best one is...

    let theBestString = `is declared with backticks`

Why? because these backtick strings have a super power called, interpolation. Interpolation is a way of inserting strings into your strings. To interpolate a string you use this syntax `${}`.

```javascript
let pi = 3.14
let diam = 14
let rad = diam / 2

// declare a string
let intro = `The area of a circle is πr^2.`

// declare a string with interpolations
let example = `So a ${diam}" pizza has an area of ${pi * rad * rad}".`

// concatenate strings with +
let text = intro + ` ` + example

// log a string
console.log(text)
```
There's so much happening right now! We're **interpolating** numbers into our strings, the numbers are being automagically **coerced** into string data, then we're taking the two strings we've built and **concatenating** them with another string that's just an empty space using the mathematical **+** operator. Lastly, we're calling a built-in function called `console.log` and it's showing our string.

_**The area of a circle is πr^2. So a 14" pizza has an area of 153.86".**_
![](https://media.giphy.com/media/Gd9vJCodapGpi/giphy.gif)

<aside>
**Concatenating** is adding sequences together to make longer sequences. In the case of strings, we can concatenate `'Hi'` and `','` and `' '` and `'Bob'` to make the string `'Hi, Bob'`.
</aside>

<aside>
**Coercing**, in the JavaScript context, is when one data type is changed into another. In this case JavaScript is implicitly coercing our numbers into strings because we're interpolating them and it wants to be helpful. That's nice, but it might backfire if we wanted to do something like add `'2' + 2` and we got the concatenated `'22'`, because one of them was a string.
</aside>

#### Substrings

We can access a single character of a string, by using bracket syntax **[** **]**. Bracket syntax lets us access a character by its index in the string, like so `text[0]`. Strings are indexed from 0, so the first character in a string is character at index 0.

```javascript
let text = `The area of a circle is πr^2.`

let firstChar = text[0] // `T`
let fourthChar = text[3] // ` `
let twentyEighthChar = text[28] // `.`
```

These substrings are no different from any other string, they're just a string of one character.

#### Immutability

It's worth noting that strings cannot be modified. That is to say, you can combine strings into new strings, and you can redeclare variables with new strings, but you can't change the value of a string piecmeal.

So this doesn't work:

```javascript
let text = `The area of a circle is πr^2.`

// set the first character of the string to lowercase
text[0] = `t`
```

You have to do this instead:

```javascript
let text = `The area of a circle is πr^2.`

// redefine the value of text
text = `the area of a circle is πr^2.`

// or create a new variable
let lowerCased = `the area of a circle is πr^2.`
```

#### Comparing Strings

Quick note, we can compare equality in strings to produce booleans, just like we did with numbers. In the example below `hasSameName` holds the value `true`.

```javascript
let person1 = `Mike`
let person2 = `Mike`
let hasSameName = person1 === person2
```

#### An Example

Lets write a function that returns `true` if a string starts with a numeric character, and `false` otherwise:

```
let startsWithnumber = (string) => {
    if (string === '0') {
        return true
    }

    if (string[0] === '1') {
        return true
    }

    if (string[0] === '2') {
        return true
    }

    if (string[0] === '3') {
        return true
    }

    if (string[0] === '4') {
        return true
    }

    if (string[0] === '5') {
        return true
    }

    if (string[0] === '6') {
        return true
    }

    if (string[0] === '7') {
        return true
    }

    if (string[0] === '8') {
        return true
    }

    if (string[0] === '9') {
        return true
    }

    return false
}

startsWithnumber('Pizza') // false

startsWithnumber('14" Pizza') // true
```
That was long... We'll look at more concise ways to do this sort of thing later.

#### Another Example

```javascript
let isString = (value) => typeof(value) === 'string'

isString(`I'm a string!`) // true

isString(3) // false
```

<aside>
**typeof** is a built in function you haven't encountered before. You use it like this:
`typeof('some string')` produces the value `'string'`, and `typeof(3)` produces the value `'number'`, and `typeof(true)` produces the value `'boolean'`.
**typeof** produces a string that tells you the type of the value you're asking about.
</aside>

#### Exercises

1. Compose a letter to Santa. Here's a template. Define the missing strings as variables:

    ```javascript
    let holiday
    let adjective
    let stuffINeed
    let name

    let letterToSanta = `Dear Santa, this year for ${holiday}, I want to become a totally ${adjective} JavaScript coder. I know it will take lots of hard work and focus and I just ask that you give me ${stuffINeed} that I need to succeed in the new year.\nLove, ${name}.`
    ```

2. Compose a sensible message that makes use of the following strings and interpolates them into the final product:

    ```javascript
    let numberOfBears = 3
    let hero = 'Goldilocks'
    let food = 'porridge'
    ```

3. Write a function that returns `true` if a string starts with an uppercase letter, and `false` otherwise.

4. Write a function `isNumber` that returns true if the argument passed to it is a number, and false otherwise.

### Have a nap

Then go learn about [Arrays](/pages/arrays)!

<iframe width="560" height="315" src="https://www.youtube.com/embed/kCpjgl2baLs" frameborder="0" allowfullscreen></iframe>
