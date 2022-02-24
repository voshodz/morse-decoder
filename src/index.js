const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

  function decode(expr) {
    
    let result = "";
    const arrayCodes = [...expr.matchAll(/(?:0|1|\*){10}/gm)];

    arrayCodes.map(code => {
        let morseCode = "";
        let bit = code[0];
        for (let index = 0; index < bit.length; index += 2) {
            if(bit[index] === "1" && bit[index+1] === "1") {
                morseCode += "-";
            }
            else if(bit[index] === "1" && bit[index+1] === "0"){
                morseCode += ".";
            }
        }
        let encodedChar = MORSE_TABLE[morseCode];
        if(encodedChar === undefined) {
            result += ' ';
        }
        else { result += encodedChar;}
    });

    return result;
}

module.exports = {
    decode
}