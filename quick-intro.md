# Quick Intro

You must do TWO THINGS:
1. Code along with the examples. [ YOU MUST RITE TEH CODES ☠️ ]
2. Complete [these exercises](https://spasiu.github.io/js101/quizzes/quick.html) as you become able.

_Before coding can become intellectual, it must become physical. You can only learn the code intuitively, to try to understand is to fail. To learn the patterns by trying things again and again is to succeed._

## Data types

- Number
- Function
- String
- Boolean
- Array
- Object

### Number

```javascript
let a = 3;

let b = 1.5;

let c = a + b;

console.log(c); // 4.5
```

![numbers](/images/numbers.png)

**Now make your own example. Do it now. Try to break things.**

---

### Function

```javascript
let add = (a, b) => {
  return a + b;
};

let sum = add(3, 1.5);

console.log(sum); // 4.5
```

![functions](/images/functions.png)

**Now run your own example. Right MEOW! Make mistakes.**

---

### String

```javascript
let greeting = 'Hello';

let name = 'Charlie';

let message = greeting + ' ' + name;

console.log(message); // Hello Charlie
```

![strings](/images/strings.png)

**Now run your own example. Immediately! Do bad things.**

---

### Boolean

```javascript
let feet = 2;

let isHuman = feet < 3;

if (isHuman) {
  console.log('Hi!');
}
```

![booleans](/images/booleans.png)

**Now run your own example. Without delay! Write the ugliest code.**

---

### Array

```javascript
let alphabet = ['a', 'b', 'c'];

for (let letter of alphabet) {
  console.log(letter); // a b c
}
```

![arrays](/images/arrays.png)

**Now run your own example. Quickly! Make errors happen.**

---

### Object

```javascript
let dictionary = {
  'you': 'toi',
  'me': 'moi',
  'him': 'lui',
  'her': 'elle'
};

let word = dictionary['you'];

console.log(word); // toi
```

![objects](/images/objects.png)

**Now run your own example. _Quickly, before ze Germans get here._ The code must become a neurological extension of your body.**

![fingers](https://media.giphy.com/media/WfwzZpfH8Ejra/source.gif)
