# Dictionaries

JavaScript doesn't actually have a data type called **dictionary**. JavaScript has a data type called **object**, but one aspect of JavaScript objects is that they work like dictionaries. In this module we're going to use the dictionary aspect of objects, and later we'll cover other aspects of objects.

## WTF is a dictionary

A dictionary is a mapping of keys to values. For example you could think of a French to English dictionary as mapping French words to English. For example: _chauve-souris => bat_. _chauve-souris_ is the key, _bat_ is the value. We could also define an English to French dictionary and use _bat_ as the key and _chauve-souris_ as the value, _chauve-souris => bat_.

The keys of a dictionary are strings. The values can be any sort of data, including a nested dictionary, or even a function.

The keys act like indexes, like in an array, and we use them the same way. If we had a dictionary called `frenchToEnglishDic` we'd access its values like so:

```javascript
frenchToEnglishDic['chauve-souris'] // 'bat'

frenchToEnglishDic['cerf-volant'] // 'kite'

frenchToEnglishDic['porc-épic'] // 'porcupine'
```

We can declare our dictionary using **{** **}** curly brackets, like so:

```javascript
let frenchToEnglishDic = {
    'chauve-souris': 'bat',
    'cerf-volant': 'kite',
    'porc-épic': 'porcupine'
}
```

You separate the **key** and **value** with a **:** colon, and multiple **key-value pairs** can be separated by **,** commas, like arrays.

As with arrays, the values in a dictionary are mutable. You can change the value of a key or add new keys to the dictionary.

```javascript
frenchToEnglishDic['vachement'] // undefined

frenchToEnglishDic['vachement'] = 'really'

frenchToEnglishDic['vachement'] // 'really'

frenchToEnglishDic['chauve-souris'] // 'bat'

frenchToEnglishDic['chauve-souris'] = 'bald-mouse'

frenchToEnglishDic['chauve-souris'] // 'bald-mouse'
```

## Examples

### List of coordinates

Let's create a list of latitude and longitude coordinates.

```javascript
let cities = {
    'Montreal': {
        'latitude': 45.3,
        'longitude': 73.34
    },
    'San Francisco': {
        'latitude': 37.47,
        'longitude': 122.25
    },
    'Krakow': {
        'latitude': 50.04,
        'longitude': 19.56
    },
    'Shenzhen': {
        'latitude': 22.33,
        'longitude': 114.06
    }
}

cities['Montreal'] // {'latitude': 45.3, 'longitude': 73.34}

cities['Montreal']['latitude'] // 45.3

cities['Montreal']['longitude'] // 73.34
```

### Social Graph

Let's create a social graph where we can see relationships between people.

```javascript
let relationships = {
    'Daria': [
        'Jessica',
        'Roberto'
    ],
    'Jessica': [
        'Daria'
    ],
    'Roberto': [
        'Daria'
    ]
}

relationships['Daria'] // ['Jessica', 'Roberto']

relationships['Jessica'][0] // 'Daria'

relationships[relationships['Roberto'][0]][0] // 'Jessica'
```

### Character count

Let's count the number of occurrences of each character in a string.

```javascript
let string = 'abracadabra'

let occurrences = {
    'a': 5,
    'b': 2,
    'r': 2,
    'c': 1,
    'd': 1
}

let firstCharacter = string[0]

occurrences[firstCharacter] // 5
```

## Exercises

Write code to access the value `'Waldo'` from each of the following data structures.

```javascript
let data = {
    'a': [
        {
            'b': 'Waldo'
        }
    ]
}
```

Example, you can solve the above with: `data['a'][0]['b']`. Now try for the below data structures.

```javascript
data = {
    'a': {
        'b': {
            'c': {
                'd': 'Waldo'
            }
        }
    }
}
```

```javascript
data = [
    {
        'a': [
            {
                'b': 'Waldo'
            }
        ]
    }
]
```

```javascript
data = {
    'a': [[['Waldo']]]
}
```

## Practice

Write a data structure like the social graph example that describes some of your interpersonal relationships and the fact that certain of your friends know one another.
