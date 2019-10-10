class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
// submit budget method 
submitBudgetForm(){
  const value = this.budgetInput.value;
  console.log(value)
  if(value === '' || value <0){
    console.log(this)
    this.budgetFeedback.classList.add('showItem')
    this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`
    // This new const is needed because otherwise 'this' is only a  local variable 
    const removeText = this
    setTimeout(function(){
      removeText.budgetFeedback.classList.remove('showItem')

    },4000);
  }
  else {
    console.log(this)
    this.budgetAmount.textContent = value;
    this.budgetInput.value = ''
    this.showBalance()
  }
}
showBalance() {
  const expense = this.totalExpence()
  const total = parseInt(this.budgetAmount.textContent) - expense
  this.balanceAmount.textContent =total;
  if(total < 0) {
    this.balance.classList.remove('showGreen','showBlack')
    this.balance.classList.add('showRed')
  }
  else if( total > 0){
    this.balance.classList.remove('showRed', 'showBlack')
    this.balance.classList.add('showGreen')
  }
  else if( total === 0) {
    this.balance.classList.remove('showRed', 'showGreen')
    this.balance.classList.add('showBlack')
  }
}
}

function eventListener() {
  const budgetForm = document.getElementById('budget-form')
  const expenseForm = document.getElementById('expense-form')
  const expenseList = document.getElementById('expense-list')

  // new instance of UI class 
const ui = new UI()
  // budget form submit 
  budgetForm.addEventListener('submit', function(event ){
event.preventDefault()
ui.submitBudgetForm()
  })
  // expense form submit 
  expenseForm.addEventListener('submit', function(event ){
event.preventDefault()
  })
  // expence list submit 
  expenseList.addEventListener('click', function( ){

  })
}
document.addEventListener('DOMContentLoaded', function(){
  eventListener()
})





