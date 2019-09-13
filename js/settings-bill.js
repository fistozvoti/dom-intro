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

var settingsUpdateOne = settingsUpdate();

// var totalSet = settingsUpdateOne.getTotals();
// var warningLevel = settingsUpdateOne.getWarningLevel();
// var criticalLevel = settingsUpdateOne.getCriticalLevel();


function updateSettingsAddBtn() {
    var callCost = callCostSetting.value;
    var smsCost = smsCostSetting.value;
    var warning = warningLevelSetting.value;
    var critical = criticalLevelSetting.value

    settingsUpdateOne.getValues(callCost, smsCost, warning, critical);
}

function buttonAddBtn() {



    if (!(totalSet >= criticalLevel)) {
        var buttonAddBtnElem = document.querySelector(".buttonAddBtn");
        if (buttonAddBtnElem) {
            var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        }

        settingsUpdateOne.addingData(billItemTypeWithSettings)

        var roundOffTotal = settingsUpdateOne.getTotals().toFixed(2)

        callTotalSettingsElem.innerHTML = settingsUpdateOne.getCallCost().toFixed(2);
        smsTotalSettingsElem.innerHTML = settingsUpdateOne.getSmsCost().toFixed(2);
        totalSettingsElem.innerHTML = roundOffTotal;

        var totalSet = settingsUpdateOne.getTotals();
        var warningLevel = settingsUpdateOne.getWarningLevel();
        var criticalLevel = settingsUpdateOne.getCriticalLevel();


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