const Answer_box = {};
var checked_in = false
var randomszam_alap = getRandomInt(0,Hosszusag) 
var randomszam ;

document.getElementById('Word').textContent = Object.keys(Words)[randomszam_alap];

document.body.addEventListener('keydown', function(event){

	

	if(event.key === 'Enter'){
	
		if(checked_in === false){
			checked_in = true
			console.log('Checked in changed: '+checked_in)
		}
		else{
			checked_in = false
			console.log('Checked in changed: '+checked_in)	
		}



		if(typeof randomszam_alap != 'number' && checked_in === false){
			randomszam = getRandomInt(0,Hosszusag);
			console.log('random szam: '+randomszam)
		}
		else if(typeof randomszam_alap === 'number' && checked_in === false){
			
			randomszam = randomszam_alap;
			randomszam_alap = '';
		}
		if(checked_in === true){

		}
	}

	
	if(event.key === 'Enter' && clickedin_gender === false && 
	clickedin_answer === false && clickedin_plural === false){
		
		

		if(checked_in === true){

			if(randomszam === undefined){
				randomszam = randomszam_alap
			}
			//console.log('Checked_in: ' + checked_in)
			Answer_box['Answer_box'] = [document.getElementById('Gender_input').value,
			document.getElementById("Answer_box").value,
			document.getElementById('Plural_input').value]

			if(Answer_box['Answer_box'][0] == Words[Word_list[randomszam]][0]){
				//console.log('gg')
			}
			else {
				//console.log('not gg')
				document.getElementById('Gender_input').value = Words[Word_list[randomszam]][0];
				document.getElementById('Gender_input').style.color = 'red';
			}

			if(Answer_box['Answer_box'][1] == Words[Word_list[randomszam]][1]){
				//console.log('gg')
			}
			else {
				//console.log('not gg')
				document.getElementById('Answer_box').value = Words[Word_list[randomszam]][1];
				document.getElementById('Answer_box').style.color = 'red';
			}

			if(Answer_box['Answer_box'][2] == Words[Word_list[randomszam]][2]){
				//console.log('gg')
			}
			else {
				//console.log('not gg')
				document.getElementById('Plural_input').value = Words[Word_list[randomszam]][2];
				document.getElementById('Plural_input').style.color = 'red';
			}
		}
		else{
			console.log('random szam: '+randomszam)
			document.getElementById('Word').textContent = Object.keys(Words)[randomszam];
			//console.log('Checked_in: ' + checked_in)
			document.getElementById('Plural_input').style.color = 'white';
			document.getElementById('Answer_box').style.color = 'white';
			document.getElementById('Gender_input').style.color = 'white';
			document.getElementById('Gender_input').value = '';
			document.getElementById('Answer_box').value = '';
			document.getElementById('Plural_input').value = '';
			/*randomszam = getRandomInt(0,Hosszusag)
			console.log('randomszam '+ randomszam)*/
			
		}
		
		console.log('- - - - - - - - -')	
	}
	
})
