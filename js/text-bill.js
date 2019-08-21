var billTypeText = document.querySelector(".billTypeText")
var addToBillBtnElement = document.querySelector(".addToBillBtn")
var callTotalOneElement = document.querySelector(".callTotalOne")
var smsTotalOneElement = document.querySelector(".smsTotalOne")
var totalOneElement = document.querySelector(".totalOne")

var createTemplate = document.querySelector(".template").innerHTML;
var sourceTemplate = Handlebars.compile(createTemplate);
var createData = document.querySelector(".textData")


var getTextFactory = TextBillFactory();
textBillTotal();

function textBillTotal(){
    
    getTextFactory.setData(billTypeText.value);
    var levelColors = getTextFactory.determineLevel()

    var getHandlers = sourceTemplate({

        call: "R" + getTextFactory.getCalls().toFixed(2),
        sms: "R" + getTextFactory.getSMSs().toFixed(2),
        total: "R" + getTextFactory.getTotal().toFixed(2),
        levelColors
    });
    createData.innerHTML = getHandlers;
}
addToBillBtnElement.addEventListener('click', textBillTotal);