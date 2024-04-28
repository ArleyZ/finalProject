//Top page is mostly for setting up variables

// Gets the form
let mealForm = document.getElementById("mealPlan");

// Gets the buttons
let clearButton = document.getElementById("clearButton");
let submitButton = document.getElementById("submitButton");
let printButton = document.getElementById("printButton");

// Gets email Input element
let emailInput = document.getElementById("emailInput");


// Gets the input elements for each day and then put each variable into an array
let weekArrays = ["Monday Meals:","Tuesday Meals:","Wednesday Meals:","Thursday Meals:","Friday Meals:","Saturday Meals:","Sunday Meals:"];

let mondayInput = document.querySelectorAll(".mondayInput");
let tuesdayInput = document.querySelectorAll(".tuesdayInput");
let wednesdayInput = document.querySelectorAll(".wednesdayInput");
let thursdayInput = document.querySelectorAll(".thursdayInput");
let fridayInput = document.querySelectorAll(".fridayInput");
let saturdayInput = document.querySelectorAll(".saturdayInput");
let sundayInput = document.querySelectorAll(".sundayInput");

let allInput = [mondayInput,tuesdayInput,wednesdayInput,thursdayInput,fridayInput,saturdayInput,sundayInput];

// Variable to print or download
let optionType = 'show'




// This part of file is mostly for listeners

// Option to cancel the clearing of the meal plan input
clearButton.addEventListener("click", function(event){
    console.log("Event Cancelable: ",event.cancelable);

    if (window.confirm("Are you sure you want to clear your meal plan?") == false){
        event.preventDefault();
    }
});

// Listener to try to validate form before submitting
mealForm.addEventListener("submit", function(event){
    for(i=0;i < allInput.length;i++){
        for(j=0;j < allInput[i].length;j++){
            console.log(allInput[i][j].value);
        }
    }
    validateForm();
    event.preventDefault();
});

// Event listners for the buttons to determine the option to print, download, or just show the planner
submitButton.addEventListener("click",function(){
    optionType = "show";
})
printButton.addEventListener("click",function(){
    optionType = "print";
})

// Listener to remove custom validity message and status when the user changes the input for thier email
mealForm.addEventListener("change", function(){
    emailInput.setCustomValidity("");
});









// This part of the file is mostly for functions

// Function to validateForm based on email
function validateForm(){
    let regEXP = /[a-zA-Z0-9]@[a-zA-Z0-9].[a-z.]/;
    let emailValue = emailInput.value;


    if(!regEXP.test(emailValue)){
        emailInput.setCustomValidity("A Valid Email is required");
    }else if (regEXP.test(emailValue)){
        planWindow(optionType);
    }
};


// Function to create the new window
function planWindow(optionType){
    planText = "<html>\n<head>\n<title>Meal Plan</title>\n";

    // Start of style and div.mealStyle class style
    planText += "<style>\ndiv.mealStyle{display:grid; grid-template-columns: 180px 200px 200px 200px 200px 190px;";
    planText += "column-gap: 10px;grid-template-rows: 50px;background-color:burlywood; width:1250px; margin:auto; row-gap: 20px;}\n";

    // div.mealStyle div Sets style for the div objects under the first mealStyle class div
    planText += "\ndiv.mealStyle div{text-align: center; background-color: bisque; text-wrap: wrap;}\n";

    // div.Bold makes the characters bold and also ends the style and head tag
    planText += '\ndiv.bold{font-weight: bold;}\n</style>\n</head>\n<body style=\"background-color:#deb887\">\n';

    // The Banner
    planText += '<div style=\"background-color: #e69c3b;\">'
    planText += '\n<img src=\"finalProjectBanner.png\" alt=\"logo\" style=\"display: block;margin: auto;\">'
    planText += '\n</div><br>\n'

    // Start of the mealStyle div
    planText += '<div class=\"mealStyle\">\n<div class=\"bold\"><p></p></div>\n<div class=\"bold\"><p>Breakfast</p></div>';
    planText += '\n<div class=\"bold\"><p>First Snack</p></div>\n<div class=\"bold\"><p>Lunch</p></div>';
    planText += '\n<div class=\"bold\"><p>Second Snack</p></div>\n<div class=\"bold\"><p>Dinner</p></div>\n';
    console.log("Text Begin:",planText)

    for(i=0;i < allInput.length;i++){
        console.log(allInput[i],weekArrays);
        planText += ("\n<div class=\"bold\"><p>" + weekArrays[i] + "</p></div>");
        console.log("Text Part ",i,":",planText);
        for(j=0;j < allInput[i].length;j++){
            planText += ("\n<div><p>" + allInput[i][j].value + "</p></div>");
            console.log("Text Part ",i," Part",j,":",planText);
        };
    };

    planText += "\n</div>\n</body>\n</html>";

    planWin = document.open("","","width=1250,height=1500");
    planWin.document.write(planText);
    console.log("Option Type: ",optionType);
    if(optionType == "print"){
        planWin.window.print();
    }

    console.log("Text Final:",planText);
};