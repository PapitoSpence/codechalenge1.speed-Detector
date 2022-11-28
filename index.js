//Function 
function speedDetector() {

    //Return an instance of the prompt function
    const prompt = require('prompt-sync')();

    //prompt a user to input data
    const speed = parseInt(prompt("Please Enter Car Speed: "));

    //declaring variables
    const speedLimit = 70;
    const kmPerPoint = 5;

    //Calculating the total number of demerit points.
    const points = Math.floor((speed - speedLimit)/kmPerPoint);

     //if statement to check2 speed 
    if(speed < 70) {
        console.log("Ok");
    }
    //checks if points is greter than 12 and suspends License
    else if(points >= 12) {
        console.log("License suspended");
    }

    else {
        console.log("The total number of demerit points is: ", points);
    }
}

//function calling
speedDetector();