const reasonInput = document.querySelector('#input-reason')
const amountInput = document.querySelector('#input-amount')
const cancelBtn = document.querySelector('#btn-cancel')
const confirmBtn = document.querySelector('#btn-confirm')
const expensesList = document.querySelector('#expenses-list')
const totalExpensesOutput = document.querySelector('#total-expenses')
// const alert = document.querySelector('ion-alert')

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid inputs';
    alert.subHeader = 'Check the message below';
    alert.message = 'Please enter valid reason and amount!';
    alert.buttons = ['Okay'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

confirmBtn.addEventListener('click', () => {
    // console.log('It works');
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        presentAlert();
        return;
    }

    // console.log(enteredReason, enteredAmount);

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);


    // use this second plus to make it number
    // oterwise it would be a string

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear)