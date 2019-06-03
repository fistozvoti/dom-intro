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
var smsTotalSet = 0;
var totalSet = 0;

var callCostTest = 0;
var smsCostTest = 0;
var warningLevel = 0;
var criticalLevel = 0;

function updateSettingsAddBtn() {
    callCostTest = Number(callCostSetting.value);
    smsCostTest = Number(smsCostSetting.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);


    if (totalSet >= criticalLevel) {
        totalSettingsElem.classList.remove("warning");
        totalSettingsElem.classList.add("danger");
    } else if (totalSet >= warningLevel) {
        totalSettingsElem.classList.add("warning");
        totalSettingsElem.classList.remove("danger");
    } else {
        totalSettingsElem.classList.remove("danger");
        totalSettingsElem.classList.remove("warning");
    }
}

function buttonAddBtn() {

    if (!(totalSet >= criticalLevel)) {
        var buttonAddBtnElem = document.querySelector(".buttonAddBtn");
        if (buttonAddBtnElem) {
            var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");

            if (billItemTypeWithSettings.value === "call") {
                callsTotalSet += callCostTest;
            }
            else if (billItemTypeWithSettings.value === "sms") {
                smsTotalSet += smsCostTest;
            }
        }

        callTotalSettingsElem.innerHTML = callsTotalSet.toFixed(2);
        smsTotalSettingsElem.innerHTML = smsTotalSet.toFixed(2);
        totalSet = callsTotalSet + smsTotalSet;
        totalSettingsElem.innerHTML = totalSet.toFixed(2);


        if (totalSet >= criticalLevel) {
            totalSettingsElem.classList.remove("warning");
            totalSettingsElem.classList.add("danger");
        }
        else if (totalSet >= warningLevel) {
            totalSettingsElem.classList.add("warning");
            totalSettingsElem.classList.remove("danger");
        }
    }
}
buttonAddBtnElem.addEventListener('click', buttonAddBtn);
updateSettingsAddBtnElem.addEventListener('click', updateSettingsAddBtn);
