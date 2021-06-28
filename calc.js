function calculate() {
    var hour = parseInt(document.getElementById("calculationHour").value);
    var minute = parseInt(document.getElementById("calculationMinute").value);
    var money = parseInt(document.getElementById("calculationDollars").value);

    var totalHours = hour + (minute / 60);

    var result = Math.round(totalHours * money);

    document.getElementById("result").innerText = "$" + result;
}