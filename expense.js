let database=JSON.parse(localStorage.getItem("database")) || [];

function save(){
  localStorage.setItem("database", JSON.stringify(database));
}

let container=document.getElementById("card-container");

let del_container=document.getElementById("delete_container");

let yes=document.getElementById("yes");

let no=document.getElementById("no");

function deleteExpense(index){
  database.splice(index,1);
  save();
};

function showdelete(i){
  yes.addEventListener("click", function(){
    deleteExpense(i);
    del_container.style.display="none";
    displayCard();
   container.style.display="block";
  });
  no.addEventListener("click", function(){
    del_container.style.display="none";
    container.style.display="block";
  });
};

function cardEvent (card,i){
  card.addEventListener("dblclick", function(){
   //alert("double click is working",i)
       container.style.display="none"
    del_container.style.display="block";
    showdelete(i);
    
  });
};

function appendElements(card, nameP, amountP, categoryP, textareaP){
  card.appendChild(nameP);
  card.appendChild(amountP);
  card.appendChild(categoryP);
  card.appendChild(textareaP);
  container.appendChild(card);
};

function createElements(i){
  let card=document.createElement("div");
  card.className="card";
  cardEvent(card,i);
  
  let nameP=document.createElement("p");
  nameP.textContent=(`Expense: ${database[i].name}`);
  
  let amountP=document.createElement("p");
  amountP.textContent=(`Amount: ${database[i].amount}`);
  
  let categoryP=document.createElement("p");
  categoryP.textContent=(`Category: ${database[i].category}`);
  
  let textareaP=document.createElement("p");
  textareaP.textContent=(`Description: ${database[i].textarea}`);
  
  appendElements(card, nameP, amountP, categoryP, textareaP);
};

function displayCard(){
  container.textContent="";
  for (let i=0; i< database.length; i++){
    createElements(i);
  }
};

displayCard();