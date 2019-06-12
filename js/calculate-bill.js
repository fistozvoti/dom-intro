
var billStringField = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal");
var calculateElement = document.querySelector(".calculateBtn");

var calculateInstance = CalculateBillManager();

function calculateBtnClicked() {
    var billString = billStringField.value;
    calculateInstance.add(billString);

    var roundedBillTotal = calculateInstance.total().toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;


    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");


    billTotalElement.classList.add(calculateInstance.level());

    calculateInstance.clear();


}

calculateElement.addEventListener('click', calculateBtnClicked);

