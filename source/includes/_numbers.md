# Numbers

We don't need any scary math to learn JavaScript. You just need to be able to do the kind of arithmetic you learned as a little kid. Here's [a refresher](http://www.themathpage.com/arith/arithmetic.htm) in case you feel intimidated by the stuff below.

## Expressions and statements

An expression is some piece of code which produces a value. The simplest expressions to learn involve numbers. This is an expression `1`. That's the number one, it produces the value `1`. Open up the console in Chrome. Run the expression `1` and see what value you get back.

Here's another expression: `1 + 1`. That expression produces the value `2`. Surprised? Also an expression: `7 * 7 * 3.14`, which is approximately the square inches of pizza in a 14" pizza. Try evaluating that expression in the console. Now you know.

That's expressions. Expressions are also statements. Statements are like instructions, of which expressions are one sort.

<aside>
The formula for getting the area inside a circle is <i>Pi multiplied by squared radius</i>. Pizza sizes are given in diameter, and the radius of a circle is half it's diameter.
</aside>

## Caveat about math with decimals in JavaScript

JavaScript doesn't have the most accurate floating point math of all time. Don't worry about it, just don't plan your trip to the moon by rocket ship using JavaScript floating points.

![broken math](/images/broken-math.png)

## Assignment statements

Another sort of statement is a statement of assignment, _i.e._ assignment statement.
An assignment statement looks like this `let pi = 3.14`.
What's happened is that we've **assigned** the value `3.14` to a variable, and that variable is called `pi`. Now whenever we evaluate `pi` we get `3.14`. So now we can recalculate the area of a 14" pizza by evaluating the expression `7 * 7 * pi`. We can even assign that expression to another variable `let areaOf14InchPizza = 7 * 7 * pi`. And now you can find out exactly how much pizza you'll get if you split one with two friends, `areaOf14InchPizza / 3`.

So that's how you use and assign variables. **let** _yourVariableName_ **=** _someValue_. Like `let pi = 3.14`.

<aside>
<b>let</b> is the keyword we use to declare a variable. There are two other keywords for declaring variables <b>var</b> and <b>const</b>. Feel free to look up the differences.
</aside>

<aside>
If you tried evaluating <b>let pi = 3.14</b> in the console, you would have seen that the console spits out <b>undefined</b>. That's because every statement in JavaScript produces some value. The value <b>undefined</b> is a kind of default non-value value. The symbolic representation of nothingness.
</aside>

## Mathematical operators
| operator | what it does | example |
|---|---|---|
| + | add | `2 + 2` |
| - | subtract | `2 - 2` |
| * | multiply | `2 * 2` |
| / | divide | `2 / 2` |
| % | modulo | `2 % 2` |

Probably the only one that needs any explanation is modulo `%`. Modulo gives you the remainder of a whole number division. So `5 % 2` gives you `1`, because the remainder of 5 divided by 2 is 1. And `4 % 2` gives you `0`, because the remainder of 4 divided by 2 is 0.

It's worth mentioning here that the divide operator `/` doesn't do whole number division, it gives you a decimal number so `5 / 2` gives you `2.5`.

## Practice

Using the stuff we covered above, figure out how to answer these problems:

- How many square inches in a 9" pizza?
- How many square inches in a 14" pizza?
- How many square inches in a 16" pizza?
- How many square inches in a *rectangular* 14" by 18" pizza?
- How many square inches of pizza does each person get if you divide the rectangular pizza amongst 5 people?
- How many extra slices do you have if you divide 3 pizzas equally amongst 5 people, without splitting any of the slices?

<aside>
It's entirely possible you're going to have to look up formulas or information like: <i>how many slices is a typical pizza divided into?</i> That's part of programming.
</aside>

Write the code, run it, then share it with someone so they can check it over for you.

## Additional resources
- [JavaScript: Arithmetic Operators](JavaScript: Arithmetic Operators)
