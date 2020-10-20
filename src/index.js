module.exports = function toReadable (number) {
    const arrUnits =['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrTeens =['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
    const arrTens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const wHundred = ' hundred';
     if (number === 0) {
         return arrUnits[0];
     }
          
          let units = '', tens = '';
          let arrNumber = number.toString().split('');
          while (arrNumber.length < 3) { 
          arrNumber.unshift('0');
          }
          let space = (arrNumber[0] > 0 && (arrNumber[1] !== '0' || arrNumber[2] !== '0')) ? ' ' : '';
            let hundreds = (arrNumber[0] > 0) ? arrUnits[arrNumber[0]] + wHundred + space : '';
          if (arrNumber[1] === '0' ) {
              (arrNumber[2] !== '0') ? (tens = '', units = arrUnits[arrNumber[2]]) : (tens = '', units = '');
          } else if (arrNumber[1] === '1') {
            (arrNumber[2] !== '0') ? (tens = arrTeens[arrNumber[2]], units = '') : (tens = arrTens[arrNumber[1]], units = '');
          } else {
            (arrNumber[2] !== '0') ? (tens = arrTens[arrNumber[1]], units = ' ' + arrUnits[arrNumber[2]]) : (tens = arrTens[arrNumber[1]], units = '');
          }
          return (hundreds  + tens + units);
         
}
