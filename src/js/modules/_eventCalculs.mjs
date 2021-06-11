import { clear } from "./_creationsBalises.mjs";
import {cadreInputs,cadreNumbers,cadreOperators,input1,input2,spanOperator,egal,tabNumbers,tabOperators} from "./_creationsBalises.mjs"
let i=0;
let i2=0;

tabNumbers.forEach(element=>{
    element=document.createElement("button");
    cadreNumbers.appendChild(element);
    element.setAttribute("class","chiffre");
    element.innerText=tabNumbers[i];
    i++;
});

tabOperators.forEach(element=>{
    element=document.createElement("button");
    cadreOperators.appendChild(element);
    element.setAttribute("class","operator");
    element.innerHTML=tabOperators[i2];
    i2++;
});


cadreOperators.addEventListener("click",(e)=>{
    spanOperator.innerHTML=e.target.innerHTML;
});

input1.addEventListener("focus",()=>{
    input1.setAttribute("verif","true");
    input2.setAttribute("verif","false");

    
});

input2.addEventListener("focus",()=>{
    input1.setAttribute("verif","false");
    input2.setAttribute("verif","true");  
})

cadreNumbers.addEventListener("click",(e)=>{
        if(input1.getAttribute("verif")=="true"){
            input1.value+=parseInt(e.target.innerText);
        }else if(input2.getAttribute("verif")=="true"){
            input2.value+=parseInt(e.target.innerText);
        }
    });

egal.addEventListener("click",()=>{
    if(spanOperator.innerText==`+`){
        cadreInputs.textContent=parseInt(input1.value)+parseInt(input2.value);
    }else if(spanOperator.innerText==`-`){
        cadreInputs.textContent=parseInt(input1.value)-parseInt(input2.value);
    }else if(spanOperator.innerText==`x`){
        cadreInputs.textContent=parseInt(input1.value)*parseInt(input2.value);
    }else if(spanOperator.innerText==`/`){
        cadreInputs.textContent=parseInt(input1.value)/parseInt(input2.value);
    }
});

clear.addEventListener("click",()=>{
    input1.value="";
    spanOperator.value="";
    input2.value="";
})