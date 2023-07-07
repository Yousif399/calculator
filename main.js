const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ["%", "*", "/", "-", "+", "=",'Enter'];
let output = "";


const calculate = (btnValue) =>{
    display.focus();
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }else if (btnValue === "AC"){
        output = "";
    }else if (btnValue === 'DEL') {
        output = output.toString().slice(0,-1);

    } else{
     if(output === "" && specialChars.includes(btnValue)) return;
     output += btnValue;
    }
   display.value = output;
};
buttons.forEach((bttn) =>{
    bttn.addEventListener('click', (e) => calculate(e.target.dataset.value));
});

// buttons.for((bt) =>{
//     bt.addEventListener('Enter',(k) => calculate(k.target.dataset.value))
// });
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'Enter') {
      calculate("=");
    }
  });
  
  
  
  
  
  
  


console.log('heyyyyy')

