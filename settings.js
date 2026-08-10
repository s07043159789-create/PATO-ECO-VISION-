let database=JSON.parse(localStorage.getItem("database")) || [];

let paragraph=document.getElementById("paragraph");

let amount=document.getElementById("weekly-budget");

let btn=document.getElementById("weekly");

let btn2=document.getElementById("btn2")

let currency=document.getElementById("currency");

function setCurrency(){
  if (currency.value===""){
    paragraph.textContent="Please choose a currency";
  }
  else{
    let currencyValue=currency.value;
    localStorage.setItem("currency", (currencyValue));
    paragraph.textContent="Currency Set Successfully";
    currency.value="";
  }
};

function validation(){
  if (amount.value===""){
    paragraph.textContent="Please Enter Budget";
  }
  else if(amount.value <= 0){
    paragraph.textContent="Enter A Valid Amount";
  }
  else{
   let budget= Number(amount.value);
   localStorage.setItem("budget", (budget));
   paragraph.textContent="Budget Set Successfull";
   amount.value="";
  }
};

btn.addEventListener("click", function() {
  validation();
});

btn2.addEventListener("click", function(){
  setCurrency();
});
