function TextBillFactory() {
    var dataTotal = 0.0;
    var getCall = 0.0;
    var getSMS = 0.0;
    //  set call
    function setData(data) {
        if (data === "call") {
            getCall += 2.75;
        }
        else if (data === "sms") {
            getSMS += 0.75;

        }
        dataTotal = getCall + getSMS;
    }

    function getCalls() {
        return getCall;
    }
    function getSMSs() {
        return getSMS;
    }
    function getTotal() {
        return dataTotal;
    }

    function determineLevel() {
        if (dataTotal >= 50) {
            return "danger";
        }
        if (dataTotal >= 30) {
            return "warning";
        }
        if (dataTotal < 20) {
            return "safe";
        }
    }

    return {
        setData,
        getCalls,
        getSMSs,
        getTotal,
        determineLevel
    }
}