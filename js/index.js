
// function appendToOutput(value) {
//      const output = document.getElementById('output');
//     output.value = output.value === '0' ? value : output.value + value;
// }

//function clearOutput() {
   // document.getElementById('output').value = '0';}

//function calculateResult() {
   // try {
      //  const output = document.getElementById('output');
      //  output.value = eval(output.value);
   // } catch (error) {
     //   document.getElementById('output').value = 'Error';
   // }
  //}
const output = document.getElementById('output');

function calculate() {
   try {
       
       output.value = eval(output.value);
   } catch (error) {
    
       output.value = 'Error';
   }
}


let btn7 = document.getElementById('btn7')
btn7.addEventListener('click',()=> addToDisplay(btn7.value))

let btn8 = document.getElementById('btn8')
btn8.addEventListener('click',()=> addToDisplay(btn8.value))

let btn9 = document.getElementById('btn9')
btn9.addEventListener('click',()=> addToDisplay(btn9.value))

let btnPlus = document.getElementById('btnPlus')
btnPlus.addEventListener('click',()=> addToDisplay(btnPlus.value))

let btn4 = document.getElementById('btn4')
btn4.addEventListener('click',()=> addToDisplay(btn4.value))

let btn5 = document.getElementById('btn5')
btn5.addEventListener('click',()=> addToDisplay(btn5.value))

let btn6 = document.getElementById('btn6')
btn6.addEventListener('click',()=> addToDisplay(btn6.value))

let btnP = document.getElementById('btnP')
btnP.addEventListener('click',()=> addToDisplay(btnP.value))

let btn1 = document.getElementById('btn1')
btn1.addEventListener('click',()=> addToDisplay(btn1.value))

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => addToDisplay(btn2.value));

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => addToDisplay(btn3.value));

let btnStar = document.getElementById('btnStar');
btnStar.addEventListener('click', () => addToDisplay(btnStar.value));

let btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => addToDisplay(btn0.value));

let btnDot = document.getElementById('btnDot');
btnDot.addEventListener('click', () => addToDisplay(btnDot.value));

let btnSl = document.getElementById('btnSl');
 btnSl.addEventListener('click', () => addToDisplay(btnSl.value));

 let btnEq = document.getElementById('btnEq');
 btnEq.addEventListener('click', calculate);

 let btnC = document.getElementById('btnC');
 btnC.addEventListener('click', () => (output.value = ''));


    function addToDisplay(value) {
      output.value += value;
   }

