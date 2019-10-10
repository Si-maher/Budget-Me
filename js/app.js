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
// submit budget method. This function will grab the data which is entered by the user,rendering the results. If no input is detected and the user stills clicks on 'calculate',  message will appear which is controlled by a setTimeout function.
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
// This function displays the balance and changes the display of the UI
showBalance() {
  const expense = this.totalExpense()
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
// submit Expense form 
submitExpenseForm() {
  const expenseValue = this.expenseInput.value
  const amountValue = this.amountInput.value
  if (expenseValue === '' || amountValue === '' || amountValue < 0) {
 this.expenseFeedback.classList.add('showItem')
 this.expenseFeedback.innerHTML =  `<p>value cannot be empty or negative</p>`
 const displayText = this
 setTimeout(function () {
   displayText.expenseFeedback.classList.remove('showItem')
 }, 4000)
  }
  else {
    let amount =parseInt(amountValue)
    this.expenseInput.value = ''
    this.amountInput.value = ''
// create an object 

let expense = {
  id:this.itemID,
  title:expenseValue,
  amount:amount
}
this.itemID++,
this.itemList.push(expense)
this.addExpense(expense)
this.showBalance()
  }
}
// add and create expense div

addExpense(expense) {
  const div = document.createElement('div')
  div.classList.add('expense')
  div.innerHTML = `
  <div class="expense-item d-flex justify-content-between align-items-baseline">
    <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6><h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
    <div class="expense-icons list-item">
        <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
            <i class="fas fa-edit"></i>
        </a>
        <a href="#" class="delete-icon mx-2" data-id="${expense.id}">
            <i class="fas fa-trash"></i>
        </a>
    </div>
</div>
`
this.expenseList.appendChild(div)
}



totalExpense() {
  let total = 0
  if ( this.itemList.length > 0){
total = this.itemList.reduce(function(acc, curr) {
  acc += curr.amount
  return acc
},0)
  }
  this.expenseAmount.textContent = total
  return total
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
ui.submitExpenseForm()
  })
  // expence list submit 
  expenseList.addEventListener('click', function( ){

  })
}
document.addEventListener('DOMContentLoaded', function(){
  eventListener()
})





