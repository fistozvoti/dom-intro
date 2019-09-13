function settingsUpdate() {
    var callsTotalSet = 0;
    var smsTotalSet = 0;
    var callCostTest = 0;
    var smsCostTest = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    var totalSet = 0;

    function addingData(data) {
        if (criticalLevel > getTotals()) {
            if (data.value === "call") {
                callsTotalSet += callCostTest;
            }
            else if (data.value === "sms") {
                smsTotalSet += smsCostTest;
            }
        }
    }

    function getValues(callUpdate, smsUpdate, warningLev, criticalLev) {
        callCostTest = Number(callUpdate);
        smsCostTest = Number(smsUpdate);
        warningLevel = Number(warningLev);
        criticalLevel = Number(criticalLev);
    }

    function getTotals() {
        return totalSet = callsTotalSet + smsTotalSet;
    }

    function getCriticalLevel() {
        return criticalLevel;
    }

    function getWarningLevel() {
        return warningLevel;
    }

    function getCallCost() {
        return callsTotalSet;
    }

    function getSmsCost() {
        return smsTotalSet
    }

    return {
        addingData,
        getValues,
        getTotals,
        getCriticalLevel,
        getWarningLevel,
        getCallCost,
        getSmsCost
    }
}