console.log("Hello Maxim Nyansa Trainers");

let studentAge = ["10-24", "27-59", "60-91"];

// Answer to question one 
console.log("Printing list of values in a range");
function displayRanges() {
    studentAge.forEach(age => {
        let splitAge = age.split("-");
        let start = splitAge[0];
        let end = splitAge[1];
       
        let result = "";
        for (let index = start; index <= end; index++) {
            result += index + ",";
        }

        console.log(age + " = ", result);
    });
}

displayRanges();

// Printing the total value in each range
console.log("Printing total in each range");
function displayTotal() {
    studentAge.map(age => {
        let splitAge = age.split("-");
        let start = splitAge[0];
        let end = splitAge[1];
        
        let totalResult = 0;
        for (let index = start; index <= end; index++) {
            totalResult += parseInt(index);
        }

        console.log(age + " = ", totalResult);

    });
}

displayTotal();

