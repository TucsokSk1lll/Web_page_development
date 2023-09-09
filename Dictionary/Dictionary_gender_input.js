document.addEventListener("DOMContentLoaded", function() {
	

	document.getElementById("Der").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Gender_input").value = "Der"
		console.log("Der");
	});
	document.getElementById("Die").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Gender_input").value = "Die"
		console.log("Die");
	});
	document.getElementById("Das").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Gender_input").value = "Die"
		console.log("Das");
	});

	var index = -1;
	var GenderList = [document.getElementById("Der"), document.getElementById("Die"), document.getElementById("Das")];
	var Genderlist_string = ['Der', 'Die', 'Das'] 

	function Gender_box_arrows(event){

		if (event.key === "ArrowDown" || event.key === "ArrowUp"){

			if(event.key === "ArrowDown" && index <= 1){
				index += 1;
				GenderList[index].style.backgroundColor = "grey";
				/*console.log(index);*/
			}
			if(event.key === "ArrowDown" && index >= 1){
				GenderList[index-1].style.backgroundColor = "rgb(33,33,33)";
			}
			if(event.key === "ArrowUp" && index >= 1){
				index -= 1;
				GenderList[index].style.backgroundColor = "grey";
				/*console.log(index);*/
			}
			if(event.key === "ArrowUp" && index <= 1){
				GenderList[index+1].style.backgroundColor = "rgb(33,33,33)";
			}
			
		}
		if(event.key === "Enter" && Genderlist_string[index] !== undefined){
			document.getElementById("Gender_input").value = Genderlist_string[index];
			console.log(Genderlist_string[index])
			document.querySelector(".gender_box .content").style.display = "none";
		}
	}

	document.querySelector(".Gender_box").addEventListener("click", function(event){

		document.querySelector(".gender_box .content").style.display = "block";
		document.querySelector(".plural_box .content").style.display = "none";
		event.stopPropagation();

		document.querySelector(".Gender_box").addEventListener("keydown", Gender_box_arrows);	

	});

	document.addEventListener("click", function(event) {
		document.querySelector(".Gender_box .content").style.display = "none";
	});
	document.body.addEventListener('click', function(event){
		
		if(index !== -1 && GenderList[index]) {
			GenderList[index].style.backgroundColor = "rgb(33,33,33)";
			index = -1;
			/*console.log('set to default: ' + index);*/
		}

		document.body.removeEventListener("click", Gender_box_arrows);
	})

	
});