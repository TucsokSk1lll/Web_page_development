const Nouns = {
'Alma': ['Der','Apfel','Umlaut'],
'Kolbász': ['Die','Wurst','Umlaut -e'],
'Asztal':['Der','Tisch','-e'],
'Szék':['Der','Stuhl','Umlaut -e'],
'Narancs':['Die', 'Orange','-n'],
'Erdő':['Der','Wald','Umlaut -er'],
};
const Verbs = {
	'Megy': ['gehen','geht','ging','ist','gegangen'],
	'Alszik': ['schlafen','schläft','schlief','hat','geschlafen']
}

var Hosszusag = 0;
var Word_list = Object.keys(Nouns);

Object.keys(Nouns).forEach(function(key, index) {
	Nouns[key].order = index;
	Hosszusag++;
	//Word_list.push(Nouns[key])
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}