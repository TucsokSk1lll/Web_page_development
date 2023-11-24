const Nouns = {
	'Alma': ['Der','Apfel','Umlaut'],
	'Kolbász': ['Die','Wurst','Umlaut -e'],
	/*'Asztal':['Der','Tisch','-e'],
	'Szék':['Der','Stuhl','Umlaut -e'],
	'Narancs':['Die', 'Orange','-n'],
	'Erdő':['Der','Wald','Umlaut -er'],*/
};
const Verbs = {
	'Megy': ['gehen','geht','ging','ist','gegangen'],
	'Alszik': ['schlafen','schläft','schlief','hat','geschlafen']
}

var Noun_Hosszusag = 0;
var Verb_Hosszusag = 0;
var Noun_list = Object.keys(Nouns);
var Verb_list = Object.keys(Verbs);
var NounorVerb = '' 

Object.keys(Nouns).forEach(function(key, index) {
	Nouns[key].order = index;
	Noun_Hosszusag++;
	//Word_list.push(Nouns[key])
});

Object.keys(Verbs).forEach(function(key, index) {
    Verbs[key].order = index ;
    Verb_Hosszusag++;
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

if(getRandomInt(1,100) <= Verb_Hosszusag/(Noun_Hosszusag+Verb_Hosszusag)*100){
	NounorVerb = 'Verb'
}
else{
	NounorVerb = 'Noun'
}


console.log(NounorVerb)
console.log(Noun_list)
console.log(Verb_list)

