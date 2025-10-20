const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const addBtn = document.getElementById('add-btn');

const totalIncomeEl = document.getElementById('total-income');
const totalExpenseEl = document.getElementById('total-expense');
const balanceEl = document.getElementById('balance');
const transactionList = document.getElementById('transaction-list');

let transactions = [];

addBtn.addEventListener('click', () => {
  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeInput.value;

  if(description && !isNaN(amount)) {
    const transaction = { description, amount, type };
    transactions.push(transaction);
    updateUI();
    clearForm();
  }
});

function updateUI() {
  let income = 0;
  let expense = 0;

  transactionList.innerHTML = '';

  transactions.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `${t.description}: R$ ${t.amount.toFixed(2)}`;
    li.classList.add(t.type);
    transactionList.appendChild(li);

    if(t.type === 'income') income += t.amount;
    else expense += t.amount;
  });

  totalIncomeEl.textContent = income.toFixed(2);
  totalExpenseEl.textContent = expense.toFixed(2);
  balanceEl.textContent = (income - expense).toFixed(2);
}

function clearForm() {
  descriptionInput.value = '';
  amountInput.value = '';
}
