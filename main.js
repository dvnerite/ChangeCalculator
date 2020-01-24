// Write your JavaScript here

console.log("whats good Dev, you got this!")

// document.getElementById("calculateChange").onclick("calculateChange");


function calculateChange(amountPaid, amountDue) {
    // console.log("calculateChange");

    var amountPaid = document.getElementById("amount-received").value;
    var amountDue = document.getElementById("amount-due").value;
    var centsDue = amountPaid - amountDue;
    centsDue = centsDue * 100;


    dollars = Math.floor(centsDue/100);
    remainder = centsDue - dollars * 100;
    //centsDue -= dollars * 100;
    document.getElementById('dollars-output').innerText = dollars;
        console.log(dollars);

    quarters = Math.floor(remainder/25);
    remainder = remainder - quarters * 25;
    //centsDue -= quarters * 25;
    document.getElementById('quarters-output').innerText = quarters;
        console.log(quarters);


    dimes = Math.floor(remainder/10);
    remainder = remainder - dimes * 10;
    //centsDue -= dimes * 10;
    document.getElementById('dimes-output').innerText = dimes;
        console.log(dimes);

    nickels = Math.floor(remainder/5);
    remainder = remainder - nickels * 5;
    //centsDue -= dollars * 5;
    document.getElementById('nickels-output').innerText = nickels;
        console.log(nickels);

    pennies = Math.round(remainder);
    //centsDue -= pennies * 1;
    document.getElementById('pennies-output').innerText = pennies;
        console.log(pennies);
}

var button = document.getElementById("calculate-change");
button.addEventListener("click", calculateChange);



