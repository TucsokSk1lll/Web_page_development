document.addEventListener("DOMContentLoaded", function() {
	var Answer;

	document.getElementById("Answer_box").addEventListener("keydown", function(event) { 
		if(event.key === "Enter"){
			Answer = document.getElementById("Answer_box").value;
			document.getElementById("Answer_box").value = "";
			console.log(Answer);
		}
	});

	document.getElementById("Der").addEventListener("click", function(event) {
		event.preventDefault();
		console.log("Der");
	});
	document.getElementById("Die").addEventListener("click", function(event) {
		event.preventDefault();
		console.log("Die");
	});
	document.getElementById("Das").addEventListener("click", function(event) {
		event.preventDefault();
		console.log("Das");
	});
	document.getElementById("Gender_input").addEventListener("keydown",function(event){
		if(event.key === "Enter"){
			Answer2 = document.getElementById("Gender_input").value;
			document.getElementById("Gender_input").value = "";
			if(Answer2 === "Der" || Answer2 === "Die" ||Answer2 === "Das"||
			Answer2 === "der" || Answer2 === "die" ||Answer2 === "das"){
				if(Answer2 === "der"){
					Answer2 = "Der";
				}
				if(Answer2 === "die"){
					Answer2 = "Die";
				}
				if(Answer2 === "das"){
					Answer2 = "Das";
				}
				console.log(Answer2);
			}
		}
	})
	document.querySelector(".Gender_box").addEventListener("click", function(event){
		document.querySelector(".gender_box .content").style.display = "block";
		event.stopPropagation();

		var GenderList = [document.getElementById("Der"), document.getElementById("Die"), document.getElementById("Das")];
		var index = -1;
		document.querySelector(".Gender_box").addEventListener("keydown", function(event){
			if(event.key === "ArrowDown" && index <= 1){
				index += 1;
				/*console.log(GenderList[index])*/
				GenderList[index].style.backgroundColor = "grey";
			}
			if(event.key === "ArrowDown" && index >= 1){
				GenderList[index-1].style.backgroundColor = "rgb(33,33,33)";
			}


			if(event.key === "ArrowUp" && index >= 1){
				index -= 1;
				/*console.log(GenderList[index])*/
				GenderList[index].style.backgroundColor = "grey";
			}
			if(event.key === "ArrowUp" && index <= 1){
				GenderList[index+1].style.backgroundColor = "rgb(33,33,33)";
			}
			
		})
		document.querySelector(".Gender_box").addEventListener("keydown", function(event){
			if(event.key === "Enter"){
				console.log(GenderList[index])
			}
		})
			
	});
	document.addEventListener("click", function(event) {
		document.querySelector(".gender_box .content").style.display = "none";
	});
});