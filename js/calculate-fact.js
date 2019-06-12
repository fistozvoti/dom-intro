function CalculateBillManager() {
    var billTotal = 0.0;

    function addingToBill(stringData) {
        var billItems = stringData.split(",");
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;

            }
        }
    }

    function determineLevel() {
        if (billTotal >= 30) {
            return "danger";
        }
        if (billTotal >= 20) {
            return "warning";
        }
        if (billTotal < 20) {
            return "safe";
        }
    }

    function displayBillTotal() {
        return billTotal;
    }
    function clearTotal() {
        billTotal = 0.0;
    }

    return {
        add: addingToBill,
        total: displayBillTotal,
        level: determineLevel,
        clear: clearTotal
    }
}