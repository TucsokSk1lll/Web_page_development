const Answer_box = {};
var checked_in = false
var randomszam_alap = getRandomInt(0,Hosszusag) 
var randomszam ;


document.getElementById('Word').textContent = Object.keys(Words)[randomszam_alap];



document.body.addEventListener('keydown', function(event){
	
	if(event.key === 'Enter' && clickedin_gender === false && 
	clickedin_answer === false && clickedin_plural === false){

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
			randomszam = getRandomInt(0,Hosszusag);
			console.log('random szam (REGENERATED): '+randomszam)
			document.getElementById('Word').textContent = Object.keys(Words)[randomszam];
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

			var anyad = 0;

			if(randomszam === undefined){
				randomszam = randomszam_alap
			}
			Answer_box['Answer_box'] = [document.getElementById('Gender_input').value,
			document.getElementById("Answer_box").value,
			document.getElementById('Plural_input').value]

			if(Answer_box['Answer_box'][0] == Words[Word_list[randomszam]][0]){
				document.getElementById('Gender_input').style.color = 'green';
			}
			else {
				document.getElementById('Gender_input').value = Words[Word_list[randomszam]][0];
				document.getElementById('Gender_input').style.color = 'red';
			}

			if(Answer_box['Answer_box'][1] == Words[Word_list[randomszam]][1]){
				document.getElementById('Answer_box').style.color = 'green';
			}
			else {
				document.getElementById('Answer_box').value = Words[Word_list[randomszam]][1];
				document.getElementById('Answer_box').style.color = 'red';
			}

			if(Answer_box['Answer_box'][2] == Words[Word_list[randomszam]][2]){
				document.getElementById('Plural_input').style.color = 'green';
			}
			else {
				document.getElementById('Plural_input').value = Words[Word_list[randomszam]][2];
				document.getElementById('Plural_input').style.color = 'red';
			}
			
		}
		if(checked_in === false){
				document.getElementById('Word').textContent = Object.keys(Words)[randomszam];
				document.getElementById('Plural_input').style.color = 'white';
				document.getElementById('Answer_box').style.color = 'white';
				document.getElementById('Gender_input').style.color = 'white';
				document.getElementById('Gender_input').value = '';
				document.getElementById('Answer_box').value = '';
				document.getElementById('Plural_input').value = '';
		}
		console.log(checked_in)
		console.log('- - - - - - - - -')	
		
	}
	
})
