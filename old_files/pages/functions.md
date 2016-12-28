# Functions

<iframe width="800" height="450" src="https://www.youtube.com/embed/VhokQhjl5t0" frameborder="0" allowfullscreen></iframe>

The above video is part of a series of four from Khan Academy, you're welcome to watch as many of them as you like, but you should at least watch this one.

## Functions in JavaScript

So that was about functions in math, but it's the same in JavaScript. Let's create a function that tells us what the area of a pizza is based on its diameter:

```javascript
let pi = 3.14

let findArea = (diameter) => diameter * diameter / 4 * pi

findArea(14)
```
Let's enter that into the console:
![console](/images/console-function.png)


Nice!

Let's see how many square inches per slice:

```javascript
let findAreaOfSlice = (area) => area / 8

findAreaOfSlice(findArea(14))
```

This time we passed the result of one function to another function.

Let's try including one function in another:

```javascript
let findAreaOfSliceFromDiameter = (diameter) => findArea(diameter) / 8

findAreaOfSliceFromDiameter(14)
```

As you can see they're just expressions, that we've packaged up so that we can reuse them.

Let's write a function with more then one **parameter**:

```javascript
let findAreaOfCustomSlice = (diameter, slices) => findArea(diameter) / slices

findAreaOfCustomSlice(14)
```

This time we only cut the pizza in four slices instead of the normal eight. Heresy.

## WTF is going on here?

This is a function `(area) => area / 8`. This is a variable declaration `let findAreaOfNormalPizzaSlice`. This is us declaring the variable and assigning the function to it:

```javascript
 let findAreaOfNormalPizzaSlice = (area) => area / 8
```

## The anatomy of a function definition

<span style="font-size:1.5em">

```javascript
let findAreaOfSlice = (area) => area / 8
```

**let** _functionName_ **=** **(**_parameters_**)** **=>** _body_

</span>

## The anatomy of a function call

<span style="font-size:1.5em">

```javascript
findAreaOfSlice(154)
```

_functionName_**(**_arguments_**)**
</span>

## More explaining with words

The functions we've been looking at are basically reusable expressions. When you declare a function you define its parameters between the parentheses, then when you call the function (_i.e._ use it), you pass it arguments whose values take the place of the parameters in the function definition. The function acts just like any other expression when called, it produces the value you'd expect from the body of the function. So the function `let three = () => 3` would produce the value `3` when called like so `three()`.

## Something freaky

You can call a function when you declare it without ever assigning it to a variable. You just wrap it in **(** parentheses **)** and then call it by adding the parentheses at the end: `(() => 3)()` produces the value `3`.

## Practice

Fill in the bodies of these function and declare and call them in the console.

- for example: `let add = (num1, num2) => num1 + num2`

- `let subtract = (num1, num2) => ...`

- `let multiply = (num1, num2) => ...`

- `let divide = (num1, num2) => ...`

- `let square = (num) => ...`

- `let addTen = (num) => ...`

- `let getArea = (diameter) => ...`

- `let divideByEight = (num) => ...`

- `let slicesPerPerson = (pizzas, people) => ...`

- `let unusedSlices = (pizzas, people) => ...`

Write the function definition for these calls.

- `addOne(10)` produces `11`
- `multiplyBySeventeenAndAddThree(89)` produces `1516`

Write the following functions, test them in the console, and give them to someone to read!

- write a function that converts the diameter of a pizza into it's area

- write a function that takes the diameter and price of a pizza and gives you the price per square inch of pizza

- write a function that takes a sum of money and a monthly interest rate, and gives the amount of money gained in interest over a single month.

## Read this, even though it's not about JavaScript

- [Functions](http://www.cs.utah.edu/~germain/PPS/Topics/functions.html)
