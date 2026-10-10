let expenseName=document.getElementById('expenseName');
let expenseAmount=document.getElementById('expenseAmount');
let add=document.getElementById('add');
let display=document.getElementById('display');
let total=document.getElementById('total');
let expenses=[];

let totalAmount=0;

add.addEventListener('click', function(){
    let stuff={};
    stuff.name=expenseName.value;
    stuff.amount=Number(expenseAmount.value);
    let card=document.createElement("div");
    let text=document.createElement("span");
    text.innerText=stuff.name+" "+stuff.amount;
    card.appendChild(text);
    let deleteButton=document.createElement('button');
    deleteButton.textContent="Delete";
    deleteButton.addEventListener('click', function(){
        //console.log(expenses);
        let index=expenses.indexOf(stuff);
        expenses.splice(index,1);
        card.remove()
        totalAmount-=stuff.amount;
        total.textContent = "total= " + totalAmount;
    })
    expenses.push(stuff);
    console.log(expenses);
    display.appendChild(card);
    card.appendChild(deleteButton);

    totalAmount+=stuff.amount;
    total.textContent="total= "+totalAmount;
});
