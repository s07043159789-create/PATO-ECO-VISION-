let database= JSON.parse(localStorage.getItem("database")) || [];

let budget= Number(localStorage.getItem("budget")) || 0;

let analytics_container=document.getElementById("analytics-container");

input=document.getElementById("input");

let stats1=document.getElementById("stats1");
stats1.textContent=budget;

let stats2=document.getElementById("stats2");

let stats3=document.getElementById("stats3");

let stats4=document.getElementById("stats4");

let overBudget=document.getElementById("overBudget");

let expense_name=document.getElementById("name");

let paragraph=document.getElementById("paragraph");
let amount=document.getElementById("amount");

let category=document.getElementById("category");

let textarea=document.getElementById("textarea");

let add=document.getElementById("add");

let back=document.getElementById("back");

let add_expense_con=document.getElementById("add-expense-con");

let add_expense=document.getElementById("add_expense");

let currencyValue=localStorage.getItem("currency");

let currency=document.getElementById("currency");
currency.textContent=currencyValue;

function displayInputs(){
  analytics_container.style.display="none";
  add_expense_con.style.display="none";
  input.style.display="block";
};

function displayAnalytics(){
  analytics_container.style.display="block";
  add_expense_con.style.display="block";
  input.style.display="none";
};

function save(){
  localStorage.setItem("database", JSON.stringify(database));
};

function expenseObjects(){
  const object={
    name:expense_name.value,
    amount: Number(amount.value),
    category:category.value,
    textarea:textarea.value,
  }
  database.push(object);
  save();
  showTotal();
  totalAmount();
  remainingBudget();
};

function showTotal(){
  stats2.textContent=database.length;
};

function totalAmount(){
  let totalAmount=0;
  for (let i=0; i<database.length; i++){
  totalAmount +=Number( database[i].amount)
  }
  stats3.textContent=totalAmount;
  return totalAmount;
};

function remainingBudget(){
  let remaining=budget - totalAmount();
  stats4.textContent=remaining;
  if (remaining <0){
    overBudget.textContent="You went over budget";
  }
  else{
    overBudget.textContent="";
  }
};

function validation(){
  const enteredAmount = Number(amount.value);
  
  if (expense_name.value==="" || enteredAmount==="" || category.value===""){
    paragraph.textContent="Please Provide all Fields Below";
  }
  else if (enteredAmount<= 0){
    paragraph.textContent="Amount Is Invalid";
  }
  else if (enteredAmount > budget) {
    paragraph.textContent="Amount is Greater Than Budget";
  }
  //textarea description is optional
  else {
    expenseObjects();
    paragraph.textContent="Added Successfully";
    expense_name.value="";
    amount.value="";
    category.value="";
    textarea.value="";
  }
};

add_expense.addEventListener("click", function(){
  displayInputs();
});

add.addEventListener("click", function(){
  validation();
});

back.addEventListener("click", function(){
  paragraph.textContent="";
  displayAnalytics();
});

showTotal();
totalAmount();
remainingBudget();
