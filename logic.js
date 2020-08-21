let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');
let screenValue = "";
const inputEl = document.querySelector('input');

inputEl.addEventListener('input', (event) => {
  event.target.value = '';
});
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText== 'X'){
            buttonText ='*';
            screenValue += buttonText;
            screen.value = screenValue ;
        
        }
        else if(buttonText=='sin') {
            screenValue = Math.sin(screenValue);
            screen.value = screenValue;

            
        }
        else if(buttonText=='cos') {
            screenValue = Math.cos(screenValue);
            screen.value = screenValue;

            
        }
        else if(buttonText=='tan') {
            screenValue = Math.tan(screenValue);
            screen.value = screenValue;

            
        }
        
        else if(buttonText== 'C'){
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        
        
        
        }
        else if(buttonText== '='){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if(buttonText== '.'){
            screenValue += buttonText;
            screen.value = screenValue ;
        }
        else if(buttonText=='AC'){
            
          screenValue = "";
            screen.value = screenValue;
        }
        else {
           
            screenValue += buttonText;
            screen.value = screenValue ;
        }
    })};
