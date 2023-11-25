const Answer_box = {};
var checked_in = false 
var randomszam ;

var randomszam_alap = getRandomInt(0,Noun_Hosszusag + Verb_Hosszusag)

	console.log('Random szam alap eredeti: '+randomszam_alap)

	if(randomszam_alap < Noun_Hosszusag){
		console.log('Random szam alap modified: '+randomszam_alap)
		document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam_alap];
		NounorVerb = 'Noun'
		console.log(NounorVerb)
	}
	else{
		randomszam_alap -= Noun_Hosszusag
		console.log('Random szam alap modified: '+randomszam_alap)
		document.getElementById('Word').textContent = Object.keys(Verbs)[randomszam_alap];
		NounorVerb = 'Verb'
		console.log(NounorVerb)
	}
	
	if(NounorVerb === 'Noun'){
		document.getElementById('Gender_input').style.display = 'block';
		document.getElementById('Answer_box').style.display = 'block';
		document.getElementById('Plural_input').style.display = 'block';
	}
	else{
		document.getElementById('Infinitiv_box').style.display = 'block';
		document.getElementById('Präsens_box').style.display = 'block';
		document.getElementById('Präteritum_box').style.display = 'block';
		document.getElementById('Isthat_box').style.display = 'block';
		document.getElementById('Perfekt_box').style.display = 'block';
	}

	document.body.addEventListener('keydown', function(event){
	
		if((event.key === 'Enter' && clickedin_gender === false && 
		clickedin_answer === false && clickedin_plural === false && 
		window.getComputedStyle(document.getElementById("Der").parentElement).display === 'none' &&
		window.getComputedStyle(document.getElementById("-").parentElement).display === 'none'&&
		window.getComputedStyle(document.getElementById("Infinitiv_box")).display === 'none') || 
		(event.key === 'Enter' && clickedin_Infinitiv === false && 
		clickedin_Präsens === false && clickedin_Präteritum === false &&
		clickedin_Isthat === false && clickedin_Perfekt === false &&
		window.getComputedStyle(document.getElementById("Answer_box")).display === 'none')){
	
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
				console.log(NounorVerb) 
				randomszam = getRandomInt(0,Noun_Hosszusag+Verb_Hosszusag);
				console.log('random szam (REGENERATED): '+randomszam)



				if(randomszam < Noun_Hosszusag){

					console.log('!!!NOUN!!!: ' + Object.keys(Nouns)[randomszam])

					document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam];

					document.getElementById('Gender_input').style.display = 'block';
					document.getElementById('Answer_box').style.display = 'block';
					document.getElementById('Plural_input').style.display = 'block';

					document.getElementById('Infinitiv_box').style.display = 'none';
					document.getElementById('Präsens_box').style.display = 'none';
					document.getElementById('Präteritum_box').style.display = 'none';
					document.getElementById('Isthat_box').style.display = 'none';
					document.getElementById('Perfekt_box').style.display = 'none';
				}
				else{
					randomszam = randomszam - Noun_Hosszusag



					console.log('!!!VERB!!!: ' + Object.keys(Verbs)[randomszam])

					document.getElementById('Word').textContent = Object.keys(Verbs)[randomszam];

					document.getElementById('Infinitiv_box').style.display = 'block';
					document.getElementById('Präsens_box').style.display = 'block';
					document.getElementById('Präteritum_box').style.display = 'block';
					document.getElementById('Isthat_box').style.display = 'block';
					document.getElementById('Perfekt_box').style.display = 'block';

					document.getElementById('Gender_input').style.display = 'none';
					document.getElementById('Answer_box').style.display = 'none';
					document.getElementById('Plural_input').style.display = 'none';
				}

				
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

				function NoSpaces(Answer,box){

					if(Answer !== ''){
						let lst_Answer = []
	
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

						if(box === 'Answer_box'){
							Answer = Answer.toLowerCase();
							Answer = Answer.charAt(0).toUpperCase() + Answer.slice(1);
							console.log(Answer)
							document.getElementById(box).value = Answer;
							console.log(Answer)
						}
						


					}
					return Answer;
				}

				Answer = NoSpaces(document.getElementById('Answer_box').value,'Answer_box')

				console.log(document.getElementById('Infinitiv_box').value)

				Answer_Infinitiv = NoSpaces(document.getElementById('Infinitiv_box').value,'Infinitiv_box')
				Answer_Präsens = NoSpaces(document.getElementById('Präsens_box').value,'Präsens_box')
				Answer_Präteritum = NoSpaces(document.getElementById('Präteritum_box').value,'Präteritum_box')
				Answer_Isthat = NoSpaces(document.getElementById('Isthat_box').value,'Isthat_box')
				Answer_Perfekt = NoSpaces(document.getElementById('Perfekt_box').value,'Perfekt_box')
	
				
				

	
				document.getElementById('focusResetElement').focus()
	
				if(randomszam === undefined){
					randomszam = randomszam_alap
				}
				if(window.getComputedStyle(document.getElementById("Answer_box")).display === 'block'){
					Answer_box['Answer_box'] = [document.getElementById('Gender_input').value,Answer,document.getElementById('Plural_input').value]

					console.log(Nouns[Noun_list[randomszam]][1] + ' ??? ' + Answer_box['Answer_box'][1])

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
				else{
					Answer_box['Answer_box'] = [Answer_Infinitiv,Answer_Präsens,Answer_Präteritum,Answer_Isthat,Answer_Perfekt]
					
					if(Answer_box['Answer_box'][0] == Verbs[Verb_list[randomszam]][0]){
						document.getElementById('Infinitiv_box').style.color = 'green';
						
					}else{
						document.getElementById('Infinitiv_box').value = Verbs[Verb_list[randomszam]][0];
						document.getElementById('Infinitiv_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][1] == Verbs[Verb_list[randomszam]][1]){
						document.getElementById('Präsens_box').style.color = 'green';
						
					}else{
						document.getElementById('Präsens_box').value = Verbs[Verb_list[randomszam]][1];
						document.getElementById('Präsens_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][2] == Verbs[Verb_list[randomszam]][2]){
						document.getElementById('Präteritum_box').style.color = 'green';
						
					}else{
						document.getElementById('Präteritum_box').value = Verbs[Verb_list[randomszam]][2];
						document.getElementById('Präteritum_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][3] == Verbs[Verb_list[randomszam]][3]){
						document.getElementById('Isthat_box').style.color = 'green';
						
					}else{
						document.getElementById('Isthat_box').value = Verbs[Verb_list[randomszam]][3];
						document.getElementById('Isthat_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][4] == Verbs[Verb_list[randomszam]][4]){
						document.getElementById('Perfekt_box').style.color = 'green';
						
					}else{
						document.getElementById('Perfekt_box').value = Verbs[Verb_list[randomszam]][4];
						document.getElementById('Perfekt_box').style.color = 'red';
					}
				}
	
				
				
			}
			if(checked_in === false){
					//document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam];
					document.getElementById('Plural_input').style.color = 'white';
					document.getElementById('Answer_box').style.color = 'white';
					document.getElementById('Gender_input').style.color = 'white';
					document.getElementById('Gender_input').value = '';
					document.getElementById('Answer_box').value = '';
					document.getElementById('Plural_input').value = '';
			}
			console.log('- - - - - - - -')
			
		}
		
	})