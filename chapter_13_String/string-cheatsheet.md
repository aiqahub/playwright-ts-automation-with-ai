# JavaScript String Methods Cheat Sheet

A quick reference for the most commonly used String methods in JavaScript. Each method includes a brief description and a one‑liner example.

| Method | Description | One‑liner Example |
|--------|-------------|-------------------|
| `charAt(index)` | Returns the character at the specified index. | `"hello".charAt(1) // "e"` |
| `charCodeAt(index)` | Returns the UTF‑16 code unit at the given index. | `"A".charCodeAt(0) // 65` |
| `codePointAt(index)` | Returns the full Unicode code point value. | `"😀".codePointAt(0) // 128512` |
| `concat(...strings)` | Joins two or more strings and returns a new string. | `"Hello".concat(" ", "World") // "Hello World"` |
| `endsWith(searchString, length?)` | Checks if the string ends with the given substring. | `"file.txt".endsWith(".txt") // true` |
| `includes(searchString, position?)` | Returns `true` if the string contains the substring. | `"JavaScript".includes("Script") // true` |
| `indexOf(searchValue, fromIndex?)` | Returns the first index of the substring, or `-1`. | `"banana".indexOf("na") // 2` |
| `lastIndexOf(searchValue, fromIndex?)` | Returns the last index of the substring, or `-1`. | `"banana".lastIndexOf("na") // 4` |
| `localeCompare(compareString, locales?, options?)` | Compares two strings in the current locale. | `"å".localeCompare("z") // -1` |
| `match(regexp)` | Retrieves matches against a regular expression. | `"a1b2c3".match(/\d/g) // ["1","2","3"]` |
| `matchAll(regexp)` | Returns an iterator of all matches (including groups). | `"a1b2".matchAll(/\d/g) // Iterator` |
| `normalize(form?)` | Returns the Unicode Normalization Form of the string. | `"é".normalize() // "é"` |
| `padEnd(targetLength, padString?)` | Pads the string from the end to reach the target length. | `"5".padEnd(3, "0") // "500"` |
| `padStart(targetLength, padString?)` | Pads the string from the start to reach the target length. | `"5".padStart(3, "0") // "005"` |
| `repeat(count)` | Returns a new string with the original repeated `count` times. | `"abc".repeat(2) // "abcabc"` |
| `replace(substr|regexp, newSubstr|function)` | Replaces the first match (or all if regex is global). | `"foo bar foo".replace("foo", "baz") // "baz bar foo"` |
| `replaceAll(substr|regexp, newSubstr|function)` | Replaces **all** matches. | `"foo bar foo".replaceAll("foo", "baz") // "baz bar baz"` |
| `search(regexp)` | Returns the index of the first match, or `-1`. | `"JavaScript".search(/script/i) // 4` |
| `slice(beginSlice, endSlice?)` | Extracts a section and returns a new string. | `"hello".slice(1,4) // "ell"` |
| `split(separator, limit?)` | Splits the string into an array of substrings. | `"a,b,c".split(",") // ["a","b","c"]` |
| `startsWith(searchString, position?)` | Checks if the string starts with the given substring. | `"http://example.com".startsWith("http") // true` |
| `substr(start, length?)` | **Deprecated** – extracts `length` characters from `start`. | `"hello".substr(1,3) // "ell"` |
| `substring(indexStart, indexEnd?)` | Returns the part of the string between the indices. | `"hello".substring(1,4) // "ell"` |
| `toLocaleLowerCase(locales?)` | Converts to lower case respecting locale. | `"İ".toLocaleLowerCase("tr-TR") // "i̇"` |
| `toLocaleUpperCase(locales?)` | Converts to upper case respecting locale. | `"i".toLocaleUpperCase("tr-TR") // "İ"` |
| `toLowerCase()` | Converts the string to lower case. | `"HeLLo".toLowerCase() // "hello"` |
| `toString()` | Returns the string itself (overrides Object.prototype). | `"foo".toString() // "foo"` |
| `toUpperCase()` | Converts the string to upper case. | `"HeLLo".toUpperCase() // "HELLO"` |
| `trim()` | Removes whitespace from both ends. | `"  hello  ".trim() // "hello"` |
| `trimEnd()` / `trimRight()` | Removes whitespace from the end. | `"  hello  ".trimEnd() // "  hello"` |
| `trimStart()` / `trimLeft()` | Removes whitespace from the start. | `"  hello  ".trimStart() // "hello  "` |
| `valueOf()` | Returns the primitive value of the String object. | `new String("foo").valueOf() // "foo"` |
| `String.fromCharCode(...codeUnits)` | **Static** – creates a string from UTF‑16 code units. | `String.fromCharCode(65,66) // "AB"` |
| `String.fromCodePoint(...codePoints)` | **Static** – creates a string from Unicode code points. | `String.fromCodePoint(0x1F600) // "😀"` |
| `String.raw(callSite, ...substitutions)` | **Static** – returns the raw string form of a template literal. | `String.raw\`\n\` // "\\n"` |

> **Tip:** Keep this file handy for quick look‑ups while coding.  
> For more details, refer to the full theory in [`string-theory.md`](string-theory.md) and the practical examples in [`string-examples.js`](string-examples.js).
