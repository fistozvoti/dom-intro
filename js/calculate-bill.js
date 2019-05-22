
var billStringField = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal");
var calculateElement = document.querySelector(".calculateBtn");
var billTotal = 0;

function calculateBtnClicked(){
    var billString = billStringField.value;
    var billItem = billString.split(",");
   
    for (var i=0;i<billItem.length;i++){
        var billItem = billItem[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    if (billTotal >= 20){
        billTotalElement.classList.add("warning");
    }
    if (billTotal >= 30){
        billTotalElement.classList.add("danger");
    }
}

calculateElement.addEventListener('click', calculateBtnClicked);

