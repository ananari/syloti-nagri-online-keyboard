let table1 = {};
let table2 = {};
const sylhetiTable = {
  'A': 'ꠀ',
  'I': 'ꠁ',
  'U': 'ꠃ',
  'E': 'ꠄ',
  'O': 'ꠅ',
  '=': "\ua806",
  "k": "ꠇ",
  "kh": "ꠈ",
  "g": "ꠉ",
  "gh": "ꠊ",
  "ng": "\ua80b",
  "c": "ꠌ",
  "ch": "ꠍ",
  "j": "ꠎ",
  "jh": "ꠏ",
  "T": "ꠐ",
  "Th": "ꠑ",
  "D": "ꠒ",
  "Dh": "ꠓ",
  "t": "ꠔ",
  "th": "ꠕ",
  "d": "ꠖ",
  "dh": "ꠗ",
  "n": "ꠘ",
  "p": "ꠙ",
  "f": "ꠚ",
  "ph": "ꠚ",
  "b": "ꠛ",
  "v": "ꠜ",
  "bh": "ꠜ",
  "m": "ꠝ",
  "r": "ꠞ",
  "l": "ꠟ",
  "R": "ꠠ",
  "s": "ꠡ",
  "sh": "ꠡ",
  "h": "ꠢ",
  "a": "\ua823",
  "i": "\ua824",
  "oi": "\ua802",
  "u": "\ua825",
  "e": "\0826",
  "oo": "\0827",
  "o": ""
};


function sylhetiReplacement(input) {
  function capsMatch(match) {
    return match.toUpperCase()
  }
  input = input.replace(/(?<=[aeiu])[aeiou]|(?<=o)[aeu]/g, capsMatch);
  input = input.replace(/\b[aeiou]/g, capsMatch);
  return input;
}

const inputBox = $("#input-text")[0];
const outputBox = $("#output-text")[0];
console.log(inputBox);
inputBox.addEventListener("keyup", function(){
  outputBox.value = sylhetiReplacement(inputBox.value);
})