Manager = [];

earnings = function () {

    console.log("earnings");

    var source = document.getElementById("source").value;
    console.log("source", source);

    var earningsAmount = document.getElementById("earningsAmount").value;
    console.log("earningsAmount", earningsAmount);

    var records = {
        source: source,
        earningsAmount: earningsAmount,
        paidTo: paidTo,
        expensesAmount: expensesAmount,
    }

    Manager.push(records);

    renderAllRecords();

}

expenses = function () {

    var paidTo = document.getElementById("paidTo").value;
    console.log("paidTo", paidTo);

    var expensesAmount = document.getElementById("expensesAmount").value;
    console.log("expensesAmount", expensesAmount);

    var records = {
        source: source,
        earningsAmount: earningsAmount,
        paidTo: paidTo,
        expensesAmount: expensesAmount
    }

    Manager.push(records);

    renderAllRecords();

}

renderAllRecords = function () {

    console.log("Manager", Manager);

    var mainContainer = document.getElementsByClassName("textDiv")[1];
    console.log("earnings", earnings);

    var recordsContainer1 = document.createElement("div");
    var recordsContainer2 = document.createElement("div");

    // Emptying Div Element
    mainContainer.innerHTML = "";

    for (var i = 0; i < Manager.length; i++) {

        // var balanceAmount = document.createElement("p");
        // balanceAmount.textContent = "Balance: " + Manager[i].earningsAmount;

        if (Manager[i].earningsAmount > 1) {

            var div = document.createElement("div");

            var source = document.createElement("p");
            source.textContent = "Source: " + Manager[i].source;

            var earningsAmount = document.createElement("p");
            earningsAmount.textContent = "Amount: " + Manager[i].earningsAmount;

            div.append(source, earningsAmount);

            recordsContainer1.append(div);

        } else if (Manager[i].expensesAmount > 1) {

            var div = document.createElement("div");

            var paidTo = document.createElement("p");
            paidTo.textContent = "Paid to: " + Manager[i].paidTo;

            var expensesAmount = document.createElement("p");
            expensesAmount.textContent = "Amount: " + Manager[i].expensesAmount;

            div.append(paidTo, expensesAmount);


            recordsContainer2.append(div);
        }


        mainContainer.append(recordsContainer1, recordsContainer2);

    }

}


window.addEventListener("load", function () {
    earningsButton = document.getElementById('earningsButton');
    console.log('eaningsButton', earningsButton);
    earningsButton.addEventListener('click', earnings);

    expensesButton = document.getElementById('expensesButton');
    console.log('expensesButton', expensesButton);
    expensesButton.addEventListener('click', expenses);

});
