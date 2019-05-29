var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var buttonAddBtnElem = document.querySelector(".buttonAddBtn");
var updateSettingsAddBtnElem = document.querySelector(".updateSettingsAddBtn");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

var callsTotalSet = 0;
var smsTotalSettings = 0;
var totalSettings = 0;

var callCostTest = 0;
var smsCostTest = 0;

function updateSettingsAddBtn(){
    callCostTest = callsTotalSet.value;
    smsCostTest = smsTotalSettings.value;
    }

function buttonAddBtn(){
    var billItem = billItemTypeWithSettings.value.trim();

    if (billItem.value === "call"){
        callsTotalSet += Number(callCostTest);
    }
    else if (billItem.value === "sms"){
        smsTotalSettings += Number(smsCostTest);
    }
    
    callTotalSettingsElem.innerHTML = callsTotalSet.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettings.toFixed(2);
    var totalCost = callsTotalSet + smsTotalSettings;
    totalSettingsElem.innerHTML = totalSettings.toFixed(2);

    
    
    if (totalSettings >= criticalLevelSetting){
        totalSettingsElem.classList.add("danger");
    }
    else if (totalSettings >= warningLevelSetting){
        totalSettingsElem.classList.add("warning");
    }
}

buttonAddBtnElem.addEventListener('click', buttonAddBtn);
updateSettingsAddBtnElem.addEventListener('click', updateSettingsAddBtn);
