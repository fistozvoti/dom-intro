var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
var callTotalTwoElement = document.querySelector(".callTotalTwo")
var smsTotalTwoElement = document.querySelector(".smsTotalTwo")
var totalTwoElement = document.querySelector(".totalTwo")

var compiledTemplate = document.querySelector(".template").innerHTML;
var handlebar = Handlebars.compile(createTemplate);
var getsData = document.querySelector(".dataForTotals")

var getRadioFactory = RadioBillFactory();
radioBill();

function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }

    getRadioFactory.dataSet(billItemType);
    var levelColors = getRadioFactory.whatsTheLevel();


    var createHandlers = handlebar({

        call: "R" + getRadioFactory.gettingCalls().toFixed(2),
        sms: "R" + getRadioFactory.gettingSMSs().toFixed(2),
        total: "R" + getRadioFactory.gettingAllTotals().toFixed(2),
        levelColors
    });
    getsData.innerHTML = createHandlers;

}
radioBillAddBtnElement.addEventListener('click', radioBill);