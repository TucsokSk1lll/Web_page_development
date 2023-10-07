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