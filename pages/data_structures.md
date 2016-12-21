# Data Structures

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

Strings are sequences of characters. Characters are things like the letters of the alphabets, punctuation, numbers across many human languages.

There are three ways to define strings:

    // double quotes
    "I am a string."

    // single quotes
    'I am a string.'

    // backticks
    `I am a string.`

I mention this only because you'll see examples of people using all three methods on the Web. However, the best one is...

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

// concatenate strings
let text = intro + ` ` + example

// log a string
console.log(text)
```
There's so much happening right now! We're interpolating numbers into our strings, the numbers are being "coerced" into strings, then we're taking the two strings we've built and concatenating them with another string that's just an empty space.

Lastly, we're calling a built-in function called `console.log` and it's showing our string.

_**The area of a circle is πr^2. So a 14" pizza has an area of 153.86".**_
![](https://media.giphy.com/media/Gd9vJCodapGpi/giphy.gif)

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

Quick note, we can compare equality in strings to produce booleans, just like we did with numbers

## Arrays

#### Lists

#### Queues

#### Stacks

## Objects

#### Dictionaries

#### Graphs

## Data formats

#### JSON

#### URI encoding

#### query parameters

#### HTML

#### XML

#### SVG
