/* = работа на уроке Задание №3 (Используя конструкцию if..else, напишите код...) = */

/*var jsAnswer = confirm('Oфициальное название JavaScript - ECMAScript?');
if (jsAnswer) {
	alert('Verno');
} else {
	alert('ty debil');
}*/

/*var jsAnswer = prompt('Каково «официальное» название JavaScript?');
console.log(jsAnswer);
if (jsAnswer=='ECMAScript' || jsAnswer=='esmascript') {
	alert('Verno!');
} else {
	alert('Ne znaete? "ECMAScript"!');
}
*/

/* = работа на уроке Задание №4 (переписать if при помощи '?') = */

/*
var result;
var a = 3;
var b = 2;
if (a + b < 4) {
result = 'Мало';
} else {
result = 'Много';
}
alert(result);
*/


/*var a = 1;
var b = 2;
var result = (a + b < 4) ? 'Мало': 'Много';
alert(result);*/


/*DZ*/

var login = prompt('Кто пришёл?');
if (login=='Admin') {
	var parol = prompt('Пароль?');
	if (parol=='Чёрный Властелин') {
		alert ('Добро пожаловать!');
	} else if (parol==null) {
		alert ('Вход отменён');
	} else {
		alert ('Пароль неверен');
	}

} else if (login==null) {
	alert ('Вход отменён');
} else {
	alert ('Я вас не знаю');
}
