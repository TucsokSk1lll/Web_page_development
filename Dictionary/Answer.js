var Answer = document.getElementById("Answer_box").value;

var clickedin_answer = false

document.getElementById('Answer_box').addEventListener("click", function(event){

	clickedin_answer = true
	//console.log(clickedin_answer)
	
});
document.getElementById('Answer_box').addEventListener("blur", function(event){

	clickedin_answer = false
	//console.log(clickedin_answer)
	
});
document.getElementById('Answer_box').addEventListener('focus', function(event){
	document.querySelector(".gender_box .content").style.display = "none";
	document.querySelector(".plural_box .content").style.display = "none";
})
document.addEventListener('keydown', function(event){
	if(event.key === 'Escape'){
		if(document.activeElement){
			document.activeElement.blur();
			document.querySelector(".gender_box .content").style.display = "none";
			document.querySelector(".plural_box .content").style.display = "none";
			document.getElementById('focusResetElement').focus();
		}
	}
})
Tabs = 0;
document.addEventListener('keydown', function(event){
	if(event.key === 'Tab' && Tabs < 3){
		Tabs++;
		//console.log(Tabs)
	}
	else{
		Tabs = 1;
		document.getElementById('focusResetElement').focus();
		document.querySelector(".plural_box .content").style.display = "none";
	}
})
