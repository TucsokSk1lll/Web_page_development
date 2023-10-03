const Answer_box = {};
var checked_in = false
var randomszam_alap = getRandomInt(0,Hosszusag) 

document.getElementById('Word').textContent = Object.keys(Words)[randomszam_alap];

document.body.addEventListener('keydown', function(event){

	var randomszam = '';

	if(randomszam_alap != ''){
		randomszam = getRandomInt(0,Hosszusag);
	}
	else{
		randomszam = randomszam_alap;
		randomszam_alap = '';
	}

	var randomszam = getRandomInt(0,Hosszusag)
	console.log(randomszam)
	

	if(event.key === 'Enter' && clickedin_gender === false && 
	clickedin_answer === false && clickedin_plural === false){
		if(checked_in === false){
			checked_in = true
		}
		else{
			checked_in = false

		}

		if(checked_in === true){
			console.log('Checked_in: ' + checked_in)
			Answer_box['Answer_box'] = [document.getElementById('Gender_input').value,
			document.getElementById("Answer_box").value,
			document.getElementById('Plural_input').value]

			if(Answer_box['Answer_box'][0] == Words[Word_list[randomszam]][0]){
				console.log('gg')
			}
			else {
				console.log('not gg')
				document.getElementById('Gender_input').value = Words[Word_list[randomszam]][0];
				document.getElementById('Gender_input').style.color = 'red';
			}

			if(Answer_box['Answer_box'][1] == Words[Word_list[randomszam]][1]){
				console.log('gg')
			}
			else {
				console.log('not gg')
				document.getElementById('Answer_box').value = Words[Word_list[randomszam]][1];
				document.getElementById('Answer_box').style.color = 'red';
			}

			if(Answer_box['Answer_box'][2] == Words[Word_list[randomszam]][2]){
				console.log('gg')
			}
			else {
				console.log('not gg')
				document.getElementById('Plural_input').value = Words[Word_list[randomszam]][2];
				document.getElementById('Plural_input').style.color = 'red';
			}
		}
		else{
			console.log('Checked_in: ' + checked_in)
			document.getElementById('Plural_input').style.color = 'white';
			document.getElementById('Answer_box').style.color = 'white';
			document.getElementById('Gender_input').style.color = 'white';
			document.getElementById('Gender_input').value = '';
			document.getElementById('Answer_box').value = '';
			document.getElementById('Plural_input').value = '';
			document.getElementById('Word').textContent = Object.keys(Words)[getRandomInt(0, Hosszusag)];
		}
	}
		
})