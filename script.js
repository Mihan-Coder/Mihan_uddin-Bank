// const loginBtn = document.getElementById("B")
// loginBtn.addEventListener("click", function(){
//     console.log("Click me");
// })
function UpDateSpanText(id) {

    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
        
    document.getElementById(id).innerText = totalBalance;
    }    