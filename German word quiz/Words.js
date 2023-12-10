const Nouns = {
	'Alma': ['Der','Apfel','Umlaut'],
	'Kolbász': ['Die','Wurst','Umlaut -e'],
	'Asztal':['Der','Tisch','-e'],
	'Szék':['Der','Stuhl','Umlaut -e'],
	'Narancs':['Die', 'Orange','-n'],
	'Erdő':['Der','Wald','Umlaut -er'],
};
const Verbs = {
	iszik: ['trinken','trinkt','trank','hat','getrunken'],
	tesz: ['tun','tut','tat','hat','getan'],
	közvetít: ['übertragen','überträgt','übertrug','hat','übertragen'],
	átutal: ['überweisen','überweist','überwies','hat','überwiesen'],
	átszáll: ['umsteigen','steigt um','stieg um','ist','umgestiegen'],
	átöltözik: ['umziehen','zieht um','zog um','ist','umgezogen'],
	/*beszélget: ['unterhalten','unterhält','unterhielt','hat','unterhalten'],
	vállalkozik: ['unternehmen','unternimmt','unternahm','hat','unternommen'],
	aláír: ['unterschreiben','unterschreibt','unterschrieb','hat','unterschrieben'],
	eltölt: ['verbringen','verbringt','verbrachte','hat','verbracht'],
	elfelejt: ['vergessen','vergisst','vergaß','hat','vergessen'],
	összehasonlít: ['vergleichen','vergleicht','verglich','hat','verglichen'],
	elveszít: ['verlieren','verliert','verlor','hat','verloren'],
	elhalaszt: ['verschieben','verschiebt','verschob','hat','verschoben'],
	eltűnik: ['verschwinden','verschwindet','verschwand','ist','verschwunden'],
	megígér: ['versprechen','verspricht','versprach','hat','versprochen'],
	javasol: ['vorschlagen','schlägt vor','schlug vor','hat','vorgeschlagen'],
	bemutat: ['vorstellen','stellt vor','stellte vor','hat','vorgestellt'],
	nő: ['wachsen','wächst','wuchs','ist','gewachsen'],*/


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

//console.log(Noun_list)
//console.log(Verb_list)

