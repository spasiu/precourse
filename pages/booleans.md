# Booleans

Numbers are a type of data. There are lots of other data types (like _undefined_). The next data type we'll introduce is called **boolean**. A boolean has two possible values, _true_ and _false_.

Try evaluating `true` in the console. You'll get `true`. Try assigning the value `false` to a variable, like `let  iHatePizza = false`. Then evaluate `iHatePizza`, and you'll see that, that is completely untrue _i.e._ `false`.

## Conditional expressions

How are booleans useful to us?

Well, there's a type of operator called a ternary, the ternary operator lets you write conditional expressions. Here are a couple examples of ternaries in action:
- `true ? 1 : 0` produces `1`
- `false ? 1 : 0` produces `0`

The structure of the conditional expression is basically:  _boolean_ **?** _lefthandExpression_ **:** _righthandExpression_. So like `true ? 1 : 0`. the lefthand expression is evaluated if the condition is true, otherwise the righthand expression is evaluated. If we wrote it in English it would be like: _if condition then this expression otherwise this other expression_.

We can assign the conditional expression to a variable like any other expression.

```javascript
// let's organize a party! What food do we need?
let numberOfGuests = 12
let weLovePizza = true
let numberOfPizzas = weLovePizza ? numberOfGuests / 4 : 0
let numberOfSandwiches = numberOfGuests * 2 - numberOfPizzas * 2
```

If we evaluate the above code, then evaluate `numberOfSandwiches` we'll get back `12`. If we evaluate `numberOfPizzas` we'll get back `3`.
So if we have 12 guests, and they like pizza, then we should order 12 sandwiches and 3 pizzas.

<aside>
Notice this `//`? That's called a comment. Comments aren't evaluated, they just let you say interesting things about your code.
</aside>

What if our guests don't like pizza?

```javascript
numberOfGuests = 12
weLovePizza = false
numberOfPizzas = weLovePizza ? numberOfGuests / 4 : 0
numberOfSandwiches = numberOfGuests * 2 - numberOfPizzas * 2
```

Now `numberOfPizzas` is `0` and `numberOfSandwiches` is `24`.

<aside>
Notice how we didn't use `let` in our assignment statements the second time? The _let_ keyword is used to declare a variable. If that variable has already been declared, you can just re-assign the variable to another value. Try declaring a variable twice.
</aside>

## OK, break time.

![](http://www.robbomb.com/wp-content/uploads/2016/10/tasks.gif)

## Comparison operators

A boolean is a data type that has two possible values, _true_ and _false_. We can use _comparison operators_ to create booleans by comparing other things, like numbers.

| operator | what it does | example |
|---|---|---|
| > | greater than | `2 > 1` |
| < | less than | `1 < 2` |
| >= | greater than or equal to | `2 >= 1` |
| <= | less than or equal to | `1 <= 2` |
| == | equal to | `2 == 2` |
| != | not equal to | `2 != 1` |
| === | strict equal to | `2 === 2` |
| !== | strict not equal to | `2 !== 1` |

All of the examples in the table above evaluate to _true_. So `2 > 1` (2 is greater than 1) is `true`, and `2 < 1` (2 is less than 1) is `false`.

## Logical operators

Booleans can be combined to produce new boolean values.

| operator | what it does | example |
|---|---|---|
| && | AND | `true && true` |
| \|\| | OR | `true || false` |
| ! | NOT | `!false` |

All of the examples in the table above evaluate to _true_.

Boolean logic is its own thing, but here's a short intro:

- _AND_ means if both the left and right sides are _true_, the expression is _true_ otherwise the expression is _false_.
- _OR_ means that if either or both the left and right sides are _true_ the expression is _true_. If neither is _true_, the expression is _false_.
- _NOT_ negates the value so that _true_ becomes _false_, and _false_ becomes _true_.

Of course comparison operators and logical operators are usually combined in an expression to create a boolean value, like this `2 > 1 && -1 < 0` (2 is greater than 1 and -1 is less than 0), which is `true`.

## Exercises

Think through these expressions to decide what value is produced, and then double check in the console:

- `true || false`

- `false && false`

- `1 < 2 && 2 > 1`

- `31 < 13 || 1 < 2 && 3 > 1`

- `400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31)`

- `true && false && false || false && true`

- `true && false || true || false`

- `true || false ? true : false`

- `true && false && false || false && true ? true && false && false || false && true : 1 < 2 && 2 > 1`

<aside>
Notice the use of parentheses _( )_ to group part of the expression?
</aside>

## Examples



## Practice

Using everything we've covered thus far regarding numbers and booleans, figure out how to answer this problem in JavaScript:

- What is the greatest value for your money, a 9" pizza for $8.00, a 12" pizza for $13.00, a 14" pizza for $16.00, or a 16" pizza for $22.00.
