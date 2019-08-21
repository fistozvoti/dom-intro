function settingsUpdate(){
    var callsTotalSet = 0;
    var smsTotalSet = 0;
    var callCostTest = 0;
    var smsCostTest = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    var totalSet = 0;

function addingData(data){
    if (data.value === "call") {
        callsTotalSet += callCostTest;
       settingsUpdateOne.setCallsTotalSet(callsTotalSet);
   }
   else if (data.value === "sms") {
        smsTotalSet += smsCostTest;   
       settingsUpdateOne.setSmsTotalSet(smsTotalSet);
   }
}
function getValues(callUpdate, smsUpdate, warningLev, criticalLev){
    callCostTest = Number(callUpdate.value);
    smsCostTest = Number(smsUpdate.value);
    warningLevel = Number(warningLev.value);
    criticalLevel = Number(criticalLev.value);
}
function getTotals(){
    return totalSet = callsTotalSet + smsTotalSet;
}

return{
    addingData,
    getValues,
    getTotals

}
//  function setCallsTotalSet(data){
//     callsTotalSet += data;  
//  }
//  function getCallsTotalSet(){
//     return callsTotalSet.toFixed(2);
// }
// function setSmsTotalSet(data){
//     smsTotalSet += data;  
//  }
// function getTotals(){
//     return totalSet.toFixed(2);
// }

// function getTotalCost(){
//     return totalSet = callsTotalSet + smsTotalSet;
// }
// function getSmsTotalSet(){
//     return smsTotalSet.toFixed(2);
// }
// function warningLevelColor(){
//     return totalSet < warningLevel;
// }
// function criticalLevelColor(){
//     return totalSet > criticalLevel;
// }
// function updateSettingsBtn(){
//     criticalLevel = critical;
//     warningLevel = warning;
// }
// return{
//     setCallsTotalSet,
//     getCallsTotalSet,
//     setSmsTotalSet,
//     getSmsTotalSet,
//     getTotalCost,
//     getTotals,
//     warningLevelColor,
//     criticalLevelColor,
//     updateSettingsBtn
// }
}