# Arrays

Remember when we said that strings were sequences of characters? Arrays are like that too. Arrays are sequences of anything. Strings, numbers, booleans, arrays, other things we haven't learned about yet.

You can declare an array by using **[** **]** square brackets.

```javascript
let someArray = []
```

Strings were **immutable**, so we couldn't adjust the individual elements of the strings without making an entirely new string, but arrays are **mutable**, we can add and modify the **elements** of an array.

```javascript
someArray[0] = 1

someArray[0] // 1
```

<aside>
Remember strings (and arrays) are indexed from zero.
</aside>

When we declare an array we can declare it with an initial set of values, like so:

```javascript
let anArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

anArrayOfNumbers[0] // 1

anArrayOfNumbers[5] // 6

anArrayOfNumbers[9] // 10

anArrayOfNumbers[10] // undefined
```

We see that we can separate the elements of the array with commas when declaring the array. We've also learned that when we try to access an index which hasn't been defined, we get `undefined`.

We can declare nested arrays in arrays. so, our arrays can contain arrays which contain arrays, and so on. Let's use that to model a table with 6 rows and 6 columns:

```javascript
let table = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18],
  [19,20,21,22,23,24],
  [25,26,27,28,29,30],
  [31,32,33,34,35,36]
]

// we can access row 1, column 1 by doing this:
table[0][0] // 1

// we can access row 6, column 6 by doing this:
table[5][5] // 36

table[2][3] // 16
```

We accessed the 0th index of the subarray at the 0th index of an array. You can think of the first index access **[** brackets **]** as _X_ coordinates and the second set of brackets as _Y_ coordinates.

<aside>
  We use whitespace to make our programs easier to read. Notice that the <i>table</i> array's rows have been indented one level to show that they are nested under the table array?
</aside>

## Example

Let's do our 6x6 table again, but this time let's do it in a **flat** array. That is, an array without any nested subarrays. Just for fun, and practice.

```javascript
let table = [
  1,2,3,4,5,6,
  7,8,9,10,11,12,
  13,14,15,16,17,18,
  19,20,21,22,23,24,
  25,26,27,28,29,30,
  31,32,33,34,35,36
]

let accessTable = (x, y) => table[x + y * 6]

accessTable(0, 0) // 1

accessTable(5, 5) // 36

accessTable(2,3) // 16
```

In the above example instead of nesting subarrays to act as rows, we're using a function that accepts x and y coordinates and imposes them on the array to make the array act like a table with rows and columns.

It's not better to do it one way or the other. What matters is that you find it intuitive to manipulate the data structure when you're programming, however it's organized.

## Exercises

Given this data structure:

```javascript
let data = [0, [], [], [1,2,3, [4]]]
```

1. How would you access the value `0`?

2. How would you access the value `3`?

3. How would you access the value `4`?

4. Given the two arrays below:

    ```javascript
    let words = [
        'this',
        'is',
        'very',
        'normal',
        'not',
        'suspicious',
        'at',
        'all'
    ]

    let sequence = [0, 1, 4, 3, 6, 7, 2, 5]
    ```

    Use the sequence below to reorder the words into a complete, sensible English message with spaces and punctuation, in the form of a string.

## Practice

1. Define a multiplication table and use it to answer _0 x 0_, _3 x 10_, and _12 x 12_.

2. Define a data structure that takes _x_ coordinates.

3. Define a data structure that takes _x_ and _y_ coordinates.

4. Define a data structure that takes _x_, _y_, and _z_ coordinates.

5. Define a data structure that takes _x_, _y_, _z_, and _t_ coordinates.
