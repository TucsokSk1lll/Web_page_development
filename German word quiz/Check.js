const Answer_box = {};
var checked_in = false 
var randomszam ;

if(NounorVerb === 'Noun'){
	var randomszam_alap = getRandomInt(0,Noun_Hosszusag)
}
else{
	var randomszam_alap = getRandomInt(0,Verb_Hosszusag)
}


if(NounorVerb === 'Noun'){
	document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam_alap];

	document.body.addEventListener('keydown', function(event){
	
		if(event.key === 'Enter' && clickedin_gender === false && 
		clickedin_answer === false && clickedin_plural === false && 
		window.getComputedStyle(document.getElementById("Der").parentElement).display === 'none' &&
		window.getComputedStyle(document.getElementById("-").parentElement).display === 'none'){
	
			
	
			if(checked_in === false){
				checked_in = true
				console.log('Checked in changed: '+checked_in)
			}
			else{
				checked_in = false
				console.log('Checked in changed: '+checked_in)	
			}
	
			//random szám generálása ha checked in false és a szerint megváltozatni a Word-öt
	
			//console.log(typeof randomszam_alap + ' ' + checked_in)
	
			if(randomszam_alap === undefined && checked_in === false){
				randomszam = getRandomInt(0,Noun_Hosszusag);
				console.log('random szam (REGENERATED): '+randomszam)
				document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam];
			}
			else if(randomszam_alap != undefined && checked_in === true){
				randomszam = randomszam_alap;
				randomszam_alap = undefined;
				console.log('random szam = random szam alap: ' + randomszam)
			}
			else{
				console.log('nothing: ' + checked_in)
			}
	
			if(checked_in === true){
	
				Answer = document.getElementById('Answer_box').value;
	
				if(Answer !== ''){
	
					for(i=0;i <= Answer.length;i++){
						if(Answer[i] !== undefined){
							lst_Answer.push(Answer[i])
						}
						
					}
					console.log(lst_Answer)
					
					while(lst_Answer[0] === ' ' || lst_Answer[0] === undefined){
						lst_Answer = lst_Answer.slice(1)
					}
					while(lst_Answer[lst_Answer.length-1] === ' ' || lst_Answer[lst_Answer.length-1] === undefined){
						lst_Answer = lst_Answer.slice(0,-1)
					}
					console.log(lst_Answer)
					
					Answer = ''
					for(i=0;i <= lst_Answer.length-1;i++){
						Answer += lst_Answer[i]
					}
					Answer = Answer.toLowerCase();
					Answer = Answer.charAt(0).toUpperCase() + Answer.slice(1);
					console.log(Answer)
					document.getElementById('Answer_box').value = Answer;
				}
				
				
	
				var anyad = 0;
	
				document.getElementById('focusResetElement').focus()
	
				if(randomszam === undefined){
					randomszam = randomszam_alap
				}
				Answer_box['Answer_box'] = [document.getElementById('Gender_input').value,Answer,document.getElementById('Plural_input').value]
	
				if(Answer_box['Answer_box'][0] == Nouns[Noun_list[randomszam]][0]){
					document.getElementById('Gender_input').style.color = 'green';
					
				}
				else {
					document.getElementById('Gender_input').value = Nouns[Noun_list[randomszam]][0];
					document.getElementById('Gender_input').style.color = 'red';
				}
	
				if(Answer_box['Answer_box'][1].toLowerCase() == Nouns[Noun_list[randomszam]][1].toLowerCase()){
					document.getElementById('Answer_box').style.color = 'green';
				}
				else {
					document.getElementById('Answer_box').value = Nouns[Noun_list[randomszam]][1];
					document.getElementById('Answer_box').style.color = 'red';
				}
	
				if(Answer_box['Answer_box'][2] == Nouns[Noun_list[randomszam]][2]){
					document.getElementById('Plural_input').style.color = 'green';
				}
				else {
					document.getElementById('Plural_input').value = Nouns[Noun_list[randomszam]][2];
					document.getElementById('Plural_input').style.color = 'red';
				}
				
			}
			if(checked_in === false){
					document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam];
					document.getElementById('Plural_input').style.color = 'white';
					document.getElementById('Answer_box').style.color = 'white';
					document.getElementById('Gender_input').style.color = 'white';
					document.getElementById('Gender_input').value = '';
					document.getElementById('Answer_box').value = '';
					document.getElementById('Plural_input').value = '';
			}
			
		}
		
	})
	
}
else{
	document.getElementById('Word').textContent = Object.keys(Verbs)[randomszam_alap];
}




