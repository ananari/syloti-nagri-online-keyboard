let table1 = {};
let table2 = {};
const sylhetiTable = {
  'A': {"letter": 'ꠀ', "ipa": 'a'},
  'I': {"letter": 'ꠁ', "ipa": 'i'},
  'U': {"letter": 'ꠃ', "ipa": 'u'},
  'E': {"letter": 'ꠄ', "ipa": 'e'},
  'O': {"letter": 'ꠅ', "ipa": 'o'},
  '=': {"letter": "\ua806", "ipa": ''},
  "k": {"letter": "ꠇ", "ipa": "k/x"},
  "kh": {"letter": "ꠈ", "ipa": "k/x (plus following high tone)"},
  "g": {"letter": "ꠉ", "ipa": 'g'},
  "gh": {"letter": "ꠊ", "ipa": "g (plus following high tone)"},
  "ng": {"letter": "\ua80b", "ipa": 'ŋ'},
  "c": {"letter": "ꠌ", "ipa": "s"},
  "ch": {"letter": "ꠍ", "ipa": "s (plus following high tone)"},
  "j": {"letter": "ꠎ", "ipa": "z"},
  "jh": {"letter": "ꠏ", "ipa": "z (plus following high tone)"},
  "T": {"letter": "ꠐ", "ipa": "ʈ"},
  "Th": {"letter": "ꠑ", "ipa": "ʈ (plus following high tone)"},
  "D": {"letter": "ꠒ", "ipa": "ɖ"},
  "Dh": {"letter": "ꠓ", "ipa": "ɖ (plus following high tone)"},
  "t": {"letter": "ꠔ", "ipa": "t"},
  "th": {"letter": "ꠕ", "ipa": "t (plus following high tone)"},
  "d": {"letter": "ꠖ", "ipa": "d"},
  "dh": {"letter": "ꠗ", "ipa": "d (plus following high tone)"},
  "n": {"letter": "ꠘ", "ipa": "n"},
  "p": {"letter": "ꠙ", "ipa": "p/f"},
  "f": {"letter": "ꠚ", "ipa": "p/f (plus following high tone)"},
  "ph": {"letter": "ꠚ", "ipa": "p/f (plus following high tone)"},
  "b": {"letter": "ꠛ", "ipa": "b"},
  "v": {"letter": "ꠜ", "ipa": "b (plus following high tone)"},
  "bh": {"letter": "ꠜ", "ipa": "b (plus following high tone)"},
  "m": {"letter": "ꠝ", "ipa": "m"},
  "r": {"letter": "ꠞ", "ipa": "r"},
  "l": {"letter": "ꠟ", "ipa": "l"},
  "R": {"letter": "ꠠ", "ipa": "r"},
  "s": {"letter": "ꠡ", "ipa": "ʃ/h"},
  "sh": {"letter": "ꠡ", "ipa": "ʃ/h"},
  "h": {"letter": "ꠢ", "ipa": "h/∅"},
  "a": {"letter": "\ua823", "ipa": "a"},
  "i": {"letter": "\ua824", "ipa": "i"},
  "oi": {"letter": "\ua802", "ipa": "oi"},
  "u": {"letter": "\ua825", "ipa": "u"},
  "e": {"letter": "\ua826", "ipa": "e"},
  "oo": {"letter": "\ua827", "ipa": "o"},
  "o": {"letter": "", "ipa": "ɔ/o"}
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

const letterTable = $("#letters > tbody")[0];
for(const row in sylhetiTable){
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td2 = document.createElement('td');
  td3 = document.createElement('td');
  td4 = document.createElement('td');
  td1.innerText = sylhetiTable[row].letter;
  td2.innerText = row;
  td3.innerText = ""; //will fill in
  td3.innerText = sylhetiTable[row].ipa;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4)
  letterTable.appendChild(tr);
}