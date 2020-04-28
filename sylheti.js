let table1 = {};
let table2 = {};
const sylhetiTable = {
  'A': {"letter": 'ꠀ', "unicode": "U+A800", "ipa": 'a'},
  'I': {"letter": 'ꠁ', "unicode": "U+A801", "ipa": 'i'},
  'U': {"letter": 'ꠃ', "unicode": "U+A803", "ipa": 'u'},
  'E': {"letter": 'ꠄ', "unicode": "U+A804", "ipa": 'e'},
  'O': {"letter": 'ꠅ', "unicode": "U+A805", "ipa": 'o'},
  '=': {"letter": "\ua806", "unicode": "U+A806", "ipa": ''},
  "k": {"letter": "ꠇ", "unicode": "U+A807", "ipa": "k/x"},
  "kh": {"letter": "ꠈ", "unicode": "U+A808", "ipa": "k/x", "high": "yes"},
  "g": {"letter": "ꠉ", "unicode": "U+A809", "ipa": 'g'},
  "gh": {"letter": "ꠊ", "unicode": "U+A80A", "ipa": 'g', "high": "yes"},
  "ng": {"letter": "\ua80b", "unicode": "U+A80B", "ipa": 'ŋ'},
  "c": {"letter": "ꠌ", "unicode": "U+A80C", "ipa": 's'},
  "ch": {"letter": "ꠍ", "unicode": "U+A80D", "ipa": 's', "high": "yes"},
  "j": {"letter": "ꠎ", "unicode": "U+A80E", "ipa": "z"},
  "jh": {"letter": "ꠏ", "unicode": "U+A80F", "ipa": "z", "high": "yes"},
  "T": {"letter": "ꠐ", "unicode": "U+A810", "ipa": "ʈ"},
  "Th": {"letter": "ꠑ", "unicode": "U+A811", "ipa": "ʈ", "high": "yes"},
  "D": {"letter": "ꠒ", "unicode": "U+A812", "ipa": "ɖ"},
  "Dh": {"letter": "ꠓ", "unicode": "U+A813", "ipa": "ɖ", "high": "yes"},
  "t": {"letter": "ꠔ", "unicode": "U+A814", "ipa": "t"},
  "th": {"letter": "ꠕ", "unicode": "U+A815", "ipa": "t", "high": "yes"},
  "d": {"letter": "ꠖ", "unicode": "U+A816", "ipa": "d"},
  "dh": {"letter": "ꠗ", "unicode": "U+A817", "ipa": "d", "high": "yes"},
  "n": {"letter": "ꠘ", "unicode": "U+A818", "ipa": "n"},
  "p": {"letter": "ꠙ", "unicode": "U+A819", "ipa": "p/f"},
  "f": {"letter": "ꠚ", "unicode": "U+A81A", "ipa": "p/f", "high": "yes"},
  "ph": {"letter": "ꠚ", "unicode": "U+A81A", "ipa": "p/f", "high": "yes"},
  "b": {"letter": "ꠛ", "unicode": "U+A81B", "ipa": "b"},
  "v": {"letter": "ꠜ", "unicode": "U+A81C", "ipa": "b", "high": "yes"},
  "bh": {"letter": "ꠜ", "unicode": "U+A81C", "ipa": "b", "high": "yes"},
  "m": {"letter": "ꠝ", "unicode": "U+A81D", "ipa": "m"},
  "r": {"letter": "ꠞ", "unicode": "U+A81E", "ipa": "r"},
  "l": {"letter": "ꠟ", "unicode": "U+A81F", "ipa": "l"},
  "R": {"letter": "ꠠ", "unicode": "U+A820", "ipa": "r"},
  "s": {"letter": "ꠡ", "unicode": "U+A821", "ipa": "ʃ/h"},
  "sh": {"letter": "ꠡ", "unicode": "U+A821", "ipa": "ʃ/h"},
  "h": {"letter": "ꠢ", "unicode": "U+A822", "ipa": "h/∅"},
  "a": {"letter": "\ua823", "unicode": "U+A823", "ipa": "a"},
  "i": {"letter": "\ua824", "unicode": "U+A824", "ipa": "i"},
  "oi": {"letter": "\ua802", "unicode": "U+A802", "ipa": "oi"},
  "u": {"letter": "\ua825", "unicode": "U+A825", "ipa": "u"},
  "e": {"letter": "\ua826", "unicode": "U+A826", "ipa": "e"},
  "oo": {"letter": "\ua827", "unicode": "U+A827", "ipa": "o"},
  "o": {"letter": "", "unicode": "N/A", "ipa": "ɔ/o"}
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
    console.log(match);
    return match.toUpperCase();
  }
  function vowelHandling(string){
    let reversedString = string.split("").reverse().join("");
    reversedString = reversedString.replace(/[aeiou](?=[aeiu])|[aeu](?=o)/g, capsMatch);
    string = reversedString.split("").reverse().join("");
    return string;
  }

  function sylhetiDigraph(string) {
    for(const k in table1) {
      let rx = new RegExp(k, 'g');
      string = string.replace(rx, table1[k].letter);
    }
    return string;
  }
  function sylhetiMonograph(string) {
    for(const k in table2) {
      let rx = new RegExp(k, 'g');
      string = string.replace(rx, table2[k].letter);
    }
    return string;
  }
  // input = input.replace(/(?<=[aeiu])[aeiou]|(?<=o)[aeu]/g, capsMatch); keep this code in case new code fails
  input = vowelHandling(input);
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

const letterTable = $("#letters > tbody")[0];
for(const row in sylhetiTable){
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td2 = document.createElement('td');
  td3 = document.createElement('td');
  td4 = document.createElement('td');
  td5 = document.createElement('td');
  td1.innerText = row;
  td2.innerText = sylhetiTable[row].letter;
  td3.innerText = sylhetiTable[row].unicode;
  td4.innerText = sylhetiTable[row].ipa;
  td5.innerText = sylhetiTable[row].high || "no";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  letterTable.appendChild(tr);
}