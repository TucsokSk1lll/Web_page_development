document.addEventListener("DOMContentLoaded", function() {
	var Answer;

	document.getElementById("Answer_box").addEventListener("keydown", function(event) { 
		if(event.key === "Enter"){
			Answer = document.getElementById("Answer_box").value;
			document.getElementById("Answer_box").value = "";
			console.log(Answer);
		}
	});

})