const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arr = expr.match(/[01*]{10}/g);
    arr = arr.map((item) => item.replace(/[00]{2}/g, ''))
    arr = arr.map((item) => item.replace(/10/g, '.'))
    arr = arr.map((item) => item.replace(/11/g, '-'))
    arr = arr.map((item) => item.replace(/\*{10}/g, ' '))
    arr = arr.map((item) => item !== ' ' ? MORSE_TABLE[item] : ' ')
    let str = arr.join('')

    return str
}

module.exports = {
    decode
}