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
	//получим массив букв в сыром виде из expr
	let rawCharArray = [];
	for (let i = 0; i < expr.length; i += 10) {
		rawCharArray.push(expr.slice(i, i + 10));
	}
	//каждый элемент массива это буква/цифра или пробел - пока в закодированном виде
	//получим массив букв в виде точек-тире и пробелов
	let resultArray = rawCharArray.map(item => {
		let morseCode = '';
		for (let i = 0; i <= 10; i += 2) {
			if (item.slice(i, i + 2) === '10') {
				morseCode += '.'
			} else if (item.slice(i, i + 2) === '11') {
				morseCode += '-'
			} else if (item.slice(i, i + 2) === '**') {
				morseCode += ' '
				break;
			}
		}
		return morseCode;
	})

	//Получим массив букв и пробелов в расшифрованном виде
	let decodedArray = resultArray.map(item => {
		if (item === ' ') return ' '
		else return MORSE_TABLE[item]
	})

	//Возвращаем массив склеенный в строку
	return decodedArray.join('')
}

module.exports = {
	decode
}