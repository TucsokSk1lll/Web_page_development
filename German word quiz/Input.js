document.getElementById('Create_button').addEventListener('click', function() {
	var Button_Noun_or_Verb = 'Noun';

	document.getElementById('Create_button').style.display = 'none';
	document.getElementById('Dictionary_name_box').style.display = 'none';

	document.getElementById('Noun_button').style.display = 'inline';
	document.getElementById('Verb_button').style.display = 'inline';

	if (Button_Noun_or_Verb === 'Noun') {
		console.log('Noun');
		document.getElementById('Gender_input').style.display = 'block';
		document.getElementById('Answer_box').style.display = 'block';
		document.getElementById('Plural_input').style.display = 'block';
		document.getElementById('Word_box').style.display = 'block';
	
		document.getElementById('Noun_button').style.backgroundColor = 'rgb(54, 54, 54)';
		document.getElementById('Verb_button').style.backgroundColor = 'rgb(24, 24, 24)';
	}
	else if (Button_Noun_or_Verb === 'Verb') {
		console.log('Verb');
		document.getElementById('Perfekt_box').style.display = 'block';
		document.getElementById('Word_box').style.display = 'block';
		document.getElementById('Answer_box').style.display = 'block';
	
		document.getElementById('Verb_button').style.backgroundColor = 'rgb(54, 54, 54)';
		document.getElementById('Noun_button').style.backgroundColor = 'rgb(24, 24, 24)';
	}
	
	document.getElementById('Noun_button').addEventListener('click', function() {
		console.log('Noun');
	
		Button_Noun_or_Verb = 'Noun';
	
		document.getElementById('Word_box').style.display = 'none';
		document.getElementById('Infinitiv_box').style.display = 'none';
		document.getElementById('Präsens_box').style.display = 'none';
		document.getElementById('Präteritum_box').style.display = 'none';
		document.getElementById('Isthat_box').style.display = 'none';
		document.getElementById('Perfekt_box').style.display = 'none';
	
		document.getElementById('Gender_input').style.display = 'block';
		document.getElementById('Answer_box').style.display = 'block';
		document.getElementById('Plural_input').style.display = 'block';
		document.getElementById('Word_box').style.display = 'block';
	
	
	
		document.getElementById('Noun_button').style.backgroundColor = 'rgb(54, 54, 54)';
		document.getElementById('Verb_button').style.backgroundColor = 'rgb(24, 24, 24)';
	});
	document.getElementById('Verb_button').addEventListener('click', function() {
		console.log('Verb');
	
		Button_Noun_or_Verb = 'Verb';
	
		document.getElementById('Gender_input').style.display = 'none';
		document.getElementById('Answer_box').style.display = 'none';
		document.getElementById('Plural_input').style.display = 'none';
		document.getElementById('Word_box').style.display = 'none';
	
		document.getElementById('Word_box').style.display = 'block';
		document.getElementById('Infinitiv_box').style.display = 'block';
		document.getElementById('Präsens_box').style.display = 'block';
		document.getElementById('Präteritum_box').style.display = 'block';
		document.getElementById('Isthat_box').style.display = 'block';
		document.getElementById('Perfekt_box').style.display = 'block';
	
		document.getElementById('Noun_button').style.backgroundColor = 'rgb(24, 24, 24)';
		document.getElementById('Verb_button').style.backgroundColor = 'rgb(54, 54, 54)';
	});
	
});

	

