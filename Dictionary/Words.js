const Words = {
'Alma': ['Der','Apfel','Umlaut'],
'Kolbász': ['Die','Wurst','Umlaut -e'],
'Asztal':['Der','Tisch','-e'],
'Szék':['Der','Stuhl','Umlaut -e'],
'Narancs':['Die', 'Orange','-n'],
'Erdő':['Der','Wald','Umlaut -er'],
};

var Hosszusag = 0;
var Word_list = Object.keys(Words);

Object.keys(Words).forEach(function(key, index) {
	Words[key].order = index;
	Hosszusag++;
	//Word_list.push(Words[key])
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}