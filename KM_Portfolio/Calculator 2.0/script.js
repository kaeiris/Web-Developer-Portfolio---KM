/*
this is my 'drawing board' testing arrays to work with the eval function.
 
var a = [500 ,'*', 6];
var b = eval(a.join(''));
console.log(b.toLocaleString('en-US'));
calculate items in the array
*/
let calcDisplay = [];  // this holds all the numbers, operators, and calculated results



let inputDisplay = document.getElementsByTagName('input'); // selects the screen so the results get printed on this
// let opButtons = document.getElementsByClassName('op'); // selects all operator buttons
let NumButtons = document.getElementsByClassName('num'); // selects all number buttons





window.onload = function(){



function perc(p){
return inputDisplay.calc.value = inputDisplay.calc.value/p;
calcDisplay(p);
	}

let NumButtons = document.getElementsByClassName('num'); // selects all number buttons
for(let i = 0; i < NumButtons.length; i++){ // loops through each number buttons

NumButtons[i].addEventListener('click', function(){
	let numBtn = this.innerText; // target the 'clicked' number button
		inputDisplay.calc.style.backgroundColor = '#75bcc4';//blue
		inputDisplay.preCalc.style.backgroundColor = '#a1a5ad'; //styling 1st display gray

		let numCalc = inputDisplay.calc.value += numBtn; // display number value on 2nd screen
		inputDisplay.preCalc.value = numCalc; // display number value on 1st screen

		 calcDisplay.push(numBtn);  // pushes number value 'clicked' to the calcDisplay array
});

}

let opButtons = document.getElementsByClassName('op'); // selects all operator buttons
for (let j = 0; j < opButtons.length; j++){ // loops through each operator buttons
	opButtons[j].addEventListener('click', function(){
		let opBtn = this.innerText; // target the 'clicked' operator button
		inputDisplay.calc.style.backgroundColor = '#7baf7d'; //green
		inputDisplay.preCalc.style.backgroundColor = '#a1a5ad'; //styling 1st display gray

				 // calcDisplay.push(opBtn);

		if(opBtn === 'AC'){ // if button clicked = 'AC'
			inputDisplay.preCalc.value = '0' // if button AC, 1st display value = '0'
			inputDisplay.calc.value = '0'; // if button AC, 2nd display value = '0'
			this.innerText = 'C'; // change AC button when clicked, to equal a new value 'C'
			this.style.backgroundColor = '#e096db'; // style AC button this color
			calcDisplay.length = 0; // empty out the calcDisplay array
}

			if((opBtn === "C") || (opBtn === "equal")){ // if button clicked = 'C'
				inputDisplay.preCalc.value = ''; // erase values 1st display 
				inputDisplay.calc.value = ""; //  erase values in 2nd display 
				calcDisplay.length = 0; // empty out the array
			 	this.innerText = 'AC'; // if button C, change value to equal 'AC'
				this.style.backgroundColor = 'black';// style AC back to black
				inputDisplay.calc.value = ""; //erase values in 2nd display 
				inputDisplay.preCalc.value = '' // erase values in 1st display 
			}

	if(opBtn === '+'){ // if button clicked = '+' 
		let plus = inputDisplay.calc.value = "+"; // display plus sign in 2nd display
		inputDisplay.preCalc.value = plus; // display plus sign in 1st display

	   return calcDisplay.push(plus);
			
	}
	if(opBtn === '-'){ // if button clicked = '-' 
		let minus = inputDisplay.calc.value = "-"; // display minus sign in 2nd display
		inputDisplay.preCalc.value = minus; // display minus sign in 1st display
		return calcDisplay.push(minus); // place minus sign in calcDisplay array
	}
  if(opBtn === '÷'){ // if button clicked = '÷' 
  		let division = inputDisplay.calc.value = "/"; // display division sign in 2nd display
		inputDisplay.preCalc.value = division; // display division sign in 1st display
		return calcDisplay.push(division); 		// place division sign in calcDisplay array
	}
	if(opBtn === 'x'){ // if button clicked = 'x' 
	let multiplication = inputDisplay.calc.value = "*"; // display multiplication sign in 2nd display
	inputDisplay.preCalc.value = multiplication; // display multiplication sign in 1st display
	return calcDisplay.push(multiplication); 		//// place multiplication sign in calcDisplay array
	}
	if(opBtn === '+/-'){ // if button clicked = '-' 
	let plusMinus = inputDisplay.calc.value = "-"; // display plusMinus(-) sign in 2nd display
	inputDisplay.preCalc.value = plusMinus; // display plusMinus(-) sign in 1st display
	return calcDisplay.push(plusMinus); 	
	}
	
	if(opBtn === 'DEL'){
	calcDisplay.length= 0;
	let deleteBtn = inputDisplay.calc.value.substr(0, inputDisplay.calc.value.length-1);
	inputDisplay.preCalc.value = deleteBtn;
calcDisplay.push(inputDisplay.calc.value = deleteBtn);	
}
	  if(opBtn === "%"){
let opBtn = inputDisplay.calc.value/100;
inputDisplay.calc.value = opBtn;
	inputDisplay.preCalc.value = opBtn;
calcDisplay.length = 0;

calcDisplay.push(inputDisplay.calc.value = opBtn);

   }
});
 }
	

// calculate input
document.getElementById('equal').addEventListener('click', function(){
let inputDisplay = document.getElementsByTagName('input'); // selects the screen so the results get printed on this
	inputDisplay.calc.style.backgroundColor = '#dbce64'; // yellow
let results = calcDisplay.join("");
inputDisplay.preCalc.value = results;
inputDisplay.calc.value =   eval(results);

if((inputDisplay.preCalc.value === "") || (calcDisplay === "NaN")){
let error = inputDisplay.calc.value = 'OOPS!';

}
});
}













	
			






	
		



	
	
	










