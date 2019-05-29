
var billStringField = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal");
var calculateElement = document.querySelector(".calculateBtn");


function calculateBtnClicked(){
    var billTotal = 0;
    var billString = billStringField.value;
    var billItems = billString.split(",");
  
    for(var i=0; i<billItems.length; i++){
        var billItem = billItems[i].trim();
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
        billTotalElement.classList.remove("danger");
    }
    if (billTotal >= 30){
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning");
    }
    if(billTotal < 20){
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");
    }
   
}

calculateElement.addEventListener('click', calculateBtnClicked);

