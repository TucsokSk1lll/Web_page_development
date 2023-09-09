document.addEventListener("DOMContentLoaded", function() {
	

	document.getElementById("-").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "-"
		console.log("-");
	});
	document.getElementById("Umlaut").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "Umlaut"
		console.log("Umlaut");
	});
	document.getElementById("-e").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "-e"
		console.log("-e");
	});
	document.getElementById("Umlaut -e").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "Umlaut -e"
		console.log("Umlaut -e");
	});
	document.getElementById("-er").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "-er"
		console.log("-er");
	});
	document.getElementById("Umlaut -er").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "Umlaut -er"
		console.log("Umlaut -er");
	});
	document.getElementById("-n").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "-n"
		console.log("-n");
	});
	document.getElementById("-en").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "-en"
		console.log("-en");
	});
	document.getElementById("-s").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("Plural_input").value = "-s"
		console.log("-s");
	});


	var index = -1;
	var PluralList = [document.getElementById("-"), document.getElementById("Umlaut"),
	 document.getElementById("-e"), document.getElementById("Umlaut -e"),
	 document.getElementById("-er"),document.getElementById("Umlaut -er"),
	 document.getElementById("-n"),document.getElementById("-en"),
	 document.getElementById("-s")];
	var Plurallist_string = ['-', 'Umlaut', '-e', 'Umlaut -e', '-er', 'Umlaut -er', '-n', '-en', '-s'] 

	function Plural_box_arrows(event){

		if (event.key === "ArrowDown" || event.key === "ArrowUp"){

			if(event.key === "ArrowDown" && index <= 7){
				index += 1;
				PluralList[index].style.backgroundColor = "grey";
				/*console.log(index);*/
			}
			if(event.key === "ArrowDown" && index >= 1){
				PluralList[index-1].style.backgroundColor = "rgb(33,33,33)";
			}
			if(event.key === "ArrowUp" && index >= 1){
				index -= 1;
				PluralList[index].style.backgroundColor = "grey";
				/*console.log(index);*/
			}
			if(event.key === "ArrowUp" && index <= 7){
				PluralList[index+1].style.backgroundColor = "rgb(33,33,33)";
			}
			
		}
		if(event.key === "Enter" && Plurallist_string[index] !== undefined){
			document.getElementById("Plural_input").value = Plurallist_string[index];
			console.log(Plurallist_string[index])
			document.querySelector(".plural_box .content").style.display = "none";
		}
	}

	document.querySelector(".Plural_box").addEventListener("click", function(event){

		document.querySelector(".Plural_box .content").style.display = "block";
		document.querySelector(".gender_box .content").style.display = "none";
		event.stopPropagation();

		document.querySelector(".Plural_box").addEventListener("keydown", Plural_box_arrows);	

	});

	document.addEventListener("click", function(event) {
		document.querySelector(".Plural_box .content").style.display = "none";
	});
	document.body.addEventListener('click', function(event){
		
		if(index !== -1 && PluralList[index]) {
			PluralList[index].style.backgroundColor = "rgb(33,33,33)";
			index = -1;
			/*console.log('set to default: ' + index);*/
		}

		document.body.removeEventListener("click", Plural_box_arrows);
	})

	
});