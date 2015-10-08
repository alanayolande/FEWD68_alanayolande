//Set the temperature to a celsius value
//Convert that temperature to Fahrenheit using the math operations
//Set a threshold temperature in Fahrenheit
//If the F temperature is below the threshold, set the background color to gray for the body
//Otherwise, set the background color to yellow
//Write the temperature to the page using either. document.write or set the innerHTML of a tag on the HTML page.
//Use this code to change background color: document.body.setAttribute(“style”, “background-color: red;”);

// Set the temperature to some celsius value
// var tempC = 25;

 document.onload(function(){
	
	function runTemp(){
			var tempField = document.getElementById('temp');
			tempField.value = Math.floor(Math.random() * 30);

			console.log(tempField);

		// Convert the temperature to Fahrenheit
		var tempF = randTempC * 9 / 5 + 32;

		// Set a threshold temperature in Fahrenheit
		var threshold = 30;

		// If the F temperature is below the threshold, set the background color to gray for the body
		// Otherwise, set the background color to yellow
		if (tempF < threshold){
		  document.body.setAttribute("style", "background-color: grey;");
		   // document.write(tempF);
		}
		else{
		  document.body.setAttribute("style", "background-color: yellow;");  
		   // document.write(tempF);
		}
	}	
}); //end .onload