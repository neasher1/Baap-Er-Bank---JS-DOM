document.getElementById('btn-withdraw').addEventListener('click', function () {
    //withdraw step -1
    const newWithdraw = getInputFieldValueById('withdraw-field');
    if (isNaN(newWithdraw)) {
        alert("Enter a valid number");
        return;
    }

    //balance reduce step-1
    const previousBalance = getTextElementValueById('balance-total');
    if (newWithdraw > previousBalance) {
        alert("Withdraw is excedding more than balance");
        return;
    }

    //withdraw step-1.5
    const previousWithdraw = getTextElementValueById('withdraw-total');
    const totalWithdraw = newWithdraw + previousWithdraw;
    setTextElementValueById('withdraw-total', totalWithdraw);

    //balance reduce step-1.5
    const totalBalance = previousBalance - newWithdraw;
    setTextElementValueById('balance-total', totalBalance);
});