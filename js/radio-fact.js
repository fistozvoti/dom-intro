function RadioBillFactory(){
    var Total = 0;
    var totalForCalls = 0;
    var totalForSMSs = 0;

    function dataSet(billType){
        if (billType === "call"){
            totalForCalls += 2.75;
        }
        else if (billType === "sms"){
            totalForSMSs += 0.75;
        }
        Total = totalForCalls + totalForSMSs;
    }
    function gettingCalls(){
        return totalForCalls;
    }
    function gettingSMSs(){
        return totalForSMSs;
    }
    function gettingAllTotals(){
        return Total;
    }
    function whatsTheLevel(){
        if (Total >= 50) {
            return "danger";
        }
        if (Total >= 30) {
            return "warning";
        }
    }
    return{
        dataSet,
        gettingCalls,
        gettingSMSs,
        gettingAllTotals,
        whatsTheLevel
    }
}