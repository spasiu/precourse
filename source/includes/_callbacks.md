# Callbacks

Callbacks are very simple. A callback is a function whose job is to execute when some event occurs. Here are a few use cases:

- _I was asked to wait for the user to click on a button, and they just clicked on the button, what do I do now?_

- _I made an HTTP request to a server, and now I have the response, what do I do now?_

- _I looked for a file on disk and I just found it, what do I do now?_

- _You said to wait for 30 seconds, well 30 seconds are over, what do I so now?_

You define the answer to "what do I do now?" by declaring a callback function. A callback function is just a regular function, but you're passing it as an argument to another function that's going to decode when the best time for it to be called is.

## A few built-in functions

Before we get deeper into callbacks, lets talk about built-in functions that come with the browser. Here are a few:

- _setInterval_:

    _Takes a callback function and the a number of milliseconds as arguments and executes the callback function every x milliseconds._

    _**Example:**_ `setInterval(() => console.log(1), 1000)`

- _setTimeout_:

    _Takes a callback function and the a number of milliseconds as arguments and executes the callback once, x milliseconds after setTimeout was called._

    _**Example:**_ `setTimeout(() => console.log(10), 10000)`

- _Math.random_:

    _Takes no arguments, and returns a random number between 0 and 1 (not inclusive of 1)._

    _**Example:**_ `Math.random()`

- _Math.floor_:

    _Take a number as an argument and rounds a decimal number down to a whole integer. So 1.87 becomes 1._

    _**Example:**_ `Math.floor(Math.random() * 6)`

- _console.log_:

    _Takes any number of arguments and logs them to the console._

    _**Example:**_ `console.log(1,2,3)`

- _alert_:

    _Takes an argument and opens an alert box in the browser with the argument as a message. Very annoying._

    _**Example:**_ `alert(1)`


## An example

Try this in the console:

```javascript
let count = 0

let incrementCount = () => count = count + 1

let interval = setInterval(incrementCount, 1000)
```

After you run that in the console try checking the `count` variable a few times (just evaluate `count` in the console to check its value).

You'll notice that count is being incremented. It's counting up, one second at a time.

So let's look more closely at what's happening here:

```javascript
// we're declaring a variable called count
// and assigning it the number 0 as a value.

let count = 0

// We're declaring a function, that when called
// will add one to the count variable.

let incrementCount = () => count = count + 1

// we're calling a function 'setInterval',
// which takes a function and a number of milliseconds,
// and then calls that function every x milliseconds.

let interval = setInterval(incrementCount, 1000)
```

<aside>
Notice this <b>//</b>? That's called a comment. Comments aren't evaluated, they just let you say interesting things about your code.
</aside>

So now we have a count of the seconds since you ran that `setInterval` function.

![console](/images/console-interval.png)

OK, lets try stopping the count. There's another built-in function called `clearInterval`. It takes an interval as an argument and stops it.

Remember how above we assigned our setInterval call to a variable called `interval`?

We did that so we could do this:

```javascript
clearInterval(interval)
```

Now if you try and check the count, you'll see that its not incrementing any more.

## Another example

Let's model pizza consumption with time. Refresh your console and run this:

```javascript
let pizzas = 12
let people = 15
let slicesPerPersonPerMinute = 1/2
let pretendMinute = 1000

let consume = () => pizzas = pizzas - people * slicesPerPersonPerMinute / 8

let interval = setInterval(consume, pretendMinute)
```

Once we run this code we can periodically check the value of `pizzas` and watch it dwindle until it becomes negative pizza.

Try calling `clearInterval(interval)` before you get too negative pizza. We can only assume that negative pizza means people have started to eat each other.

## setTimeout

_setTimeout_ does the exact same thing as set interval, but only once.

Let's run some code in the console with the `setTimeout` function and another built-in function, alert.

```javascript
let count = 10
let decrement = () => count = count - 1
let interval = setInterval(decrement, 1000)

let sayZero = () => alert(count)

setTimeout(sayZero, 10000)
```

## Practice

Model personal finances with time! This is a pretty open ended exercise, and you can get as deep as you like. Go nuts. I'd write it all in your text editor, then paste it into the console to test it.

1. Create variables and functions that model expenses and revenue streams.
2. Declare intervals that run your functions at a scale of 3 seconds per month.
3. Declare an interval to log your finances every week or month.
4. stop your model after some number of years (I chose 2).

Here's a really lightweight example to get you started:

```javascript
let count = 0 // months

let month = 3000 // milliseconds

let stopTime = month * 24 // i.e. 2 years

let balance = 1000 // dollars

let rent = 700 // dollars

let pay = 2000 // dollars

let payRent = () => balance = balance - rent

let getPay = () => balance = balance + pay

let increment = () => count = count + 1

let showBalance = () => console.log(count, balance)

let rentInterval = setInterval(payRent, month)
let payInterval = setInterval(getPay, month)
let incrementInterval = setInterval(increment, month)
let showInterval = setInterval(showBalance, month)

setTimeout(() => clearInterval(rentInterval), stopTime)
setTimeout(() => clearInterval(payInterval), stopTime)
setTimeout(() => clearInterval(incrementInterval), stopTime)
```

In your exercise I'd say that you should model at least 10 different expenses. Get creative. Do the logs make sense when you run your simulation?
