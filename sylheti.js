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
  "e": "\ua826",
  "oo": "\ua827",
  "o": ""
};

for(const k in sylhetiTable) {
  if(k.length > 1) {
    table1[k] = sylhetiTable[k];
  }
  else {
    table2[k] = sylhetiTable[k];
  }
}


function sylhetiReplacement(input) {
  function capsMatch(match) {
    return match.toUpperCase()
  }
  function sylhetiDigraph(string) {
    for(const k in table1) {
      let rx = new RegExp(k, 'g');
      string = string.replace(rx, table1[k]);
    }
    return string;
  }
  function sylhetiMonograph(string) {
    for(const k in table2) {
      let rx = new RegExp(k, 'g');
      string = string.replace(rx, table2[k]);
    }
    return string;
  }
  input = input.replace(/(?<=[aeiu])[aeiou]|(?<=o)[aeu]/g, capsMatch);
  input = input.replace(/\b[aeiou]/g, capsMatch);
  input = sylhetiDigraph(input);
  input = sylhetiMonograph(input);
  return input;
  
}

const inputBox = $("#input-text")[0];
const outputBox = $("#output-text")[0];
console.log(inputBox);
inputBox.addEventListener("keyup", function(){
  outputBox.value = sylhetiReplacement(inputBox.value);
})