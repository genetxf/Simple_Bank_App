let balance = 1000;
let totalDeposit = 0;
let totalWithdraw = 0;

const balanceEl = document.getElementById('current-balance');
const totalDepositEl = document.getElementById('total-deposit');
const totalWithdrawEl = document.getElementById('total-withdraw');
const amountInput = document.getElementById('amount-input');
const messageArea = document.getElementById('message-area');

function updateUI() {
    balanceEl.innerText = `$${balance}`;
    totalDepositEl.innerText = `$${totalDeposit}`;
    totalWithdrawEl.innerText = `$${totalWithdraw}`;
}

function showMessage(msg, isError = false) {
    messageArea.innerText = msg;
    messageArea.style.color = isError ? '#d32f2f' : '#2b7a61';
}
// Deposit
document.getElementById('btn-deposit').addEventListener('click', function() {
    const amount = parseFloat(amountInput.value);
    
    // No empty, zero, or negative value
    if (isNaN(amount) || amount <= 0) {
        showMessage('Error: Please enter a valid amount greater than zero.', true);
        return;
    }
    
    balance += amount;
    totalDeposit += amount;
    
    updateUI();
    showMessage(`Success: Deposited $${amount}.`);
    amountInput.value = ''; // Clear input field
});

// Withdraw
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const amount = parseFloat(amountInput.value);
    
    // empty, zero, or negative valu block
    if (isNaN(amount) || amount <= 0) {
        showMessage('Error: Please enter a valid amount greater than zero(0).', true);
        return;
    }
    
    // withdraw block fnc if amount > than current balance
    if (amount > balance) {
        showMessage('Error: Insufficient funds.', true);
        return;
    }
    
    balance -= amount;
    totalWithdraw += amount;
    
    updateUI();
    showMessage(`Success: Withdrew $${amount}.`);
    amountInput.value = ''; // Clear input field
});

// Reset
document.getElementById('btn-reset').addEventListener('click', function() {
    // Return balance at $1000
    balance = 1000;
    totalDeposit = 0;
    totalWithdraw = 0;
    
    updateUI();
    
    // Reset message + input clearing
    messageArea.innerText = 'Welcome to your account.';
    messageArea.style.color = '#444'; 
    amountInput.value = '';
});