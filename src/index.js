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
      let mas = []; /**разбиты по 10 */
      let mas1 = []; /**1) убраны лишние 0 и 2) превратили в точки и тире  */
      let mas2 = [];
      let a;
    
      for (let i = 0; i < expr.length; i +=10 ) {
        mas.push(expr.slice(i, i+10));
      }
    
      for (let k = 0; k < mas.length; k++ ) { /**1) убраны лишние 0 */
        if (mas[k] == '**********') {
          mas1.push(mas[k]);  
        }
        else {
          mas1.push(mas[k].slice(mas[k].search(1)));
        }
      }
    
      for (let t = 0; t < mas1.length; t++ ) { /**2) превратили в точки и тире */
        if (mas1[t] == '**********') {
            mas1[t] = '**********';
        }
        else {
            mas1[t] = mas1[t].replace(/10/gi, '.').replace(/11/gi, '-');
        }
      }
    
      for (let s = 0; s < mas1.length; s++ ) {
        if (mas1[s] == '**********'){
          mas2.push(' ');     
        }
        else {
        for (let key in MORSE_TABLE) {
            if (key == mas1[s]) {
                a = MORSE_TABLE[key];
            }
        } 
        mas2.push(a);
        }  
      }
    
      let mas3 = mas2.join('');
      return mas3;
}

module.exports = {
    decode
}
