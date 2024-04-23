// Gets the form
let mealForm = document.getElementById("mealPlan");

// Gets the buttons
let clearButton = document.getElementById("clearButton");
let submitButton = document.getElementById("submitButton");
let downloadButton = document.getElementById("downloadButton");
let printButton = document.getElementById("printButton");

// Gets email Input
let emailInput = document.getElementById("emailInput");








// Option to cancel the clearing of the meal plan input
clearButton.addEventListener("click", function(event){
    console.log("Event Cancelable: ",event.cancelable);

    if (window.confirm("Are you sure you want to clear your meal plan?") == false){
        event.preventDefault();
    }
});

// Listener to try to validate form before submitting
submitButton.addEventListener("submit", function(event){
    emailInput.setCustomValidity("");
    validateForm(event);
});











// Function to validateForm based on email
function validateForm(e){
    let regEXP = /[a-zA-Z0-9]@[a-zA-Z]/;
    let emailValue = emailInput.value;

    if(regEXP.test(emailValue) == false){
        emailInput.setCustomValidity("A Valid Email is required");
        e.preventDefault();
    }
};


// Function to create the new window
function planWindow(){
    planText = "<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>Hello</body>\n";
    planText += "</html>";

    planWin = document.open("","","width=1000,height=1000");
    planWin.document.write(planText);
};