document.getElementById('btn-deposit').addEventListener('click', function () {
    //deposit
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if (isNaN(newDepositAmount)) {
        alert("Enter valid number");
        return;
    }
    const previousDeposit = getTextElementValueById('deposit-total');
    const totalDeposit = previousDeposit + newDepositAmount;
    setTextElementValueById('deposit-total', totalDeposit);

    //balance
    const previousBalance = getTextElementValueById('balance-total');
    const totalBalance = previousBalance + newDepositAmount;
    setTextElementValueById('balance-total', totalBalance);

});