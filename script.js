//Every time user updates the input fields the value is stored inside the variables
document.getElementById('container').onchange = function() {
    var bill = Number(document.getElementById('billTotal').value);
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('splitInput').value;
    //calculate values
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;

    //Display captured data
    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);
}
