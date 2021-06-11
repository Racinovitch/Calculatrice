let myBody = document.querySelector("body");

let cadre=document.createElement("div");
myBody.appendChild(cadre);
cadre.setAttribute("id","cadre");

let title=document.createElement("h2");
cadre.appendChild(title);
title.setAttribute("id","title");
title.innerText="INTEGER CALCULATOR";

let cadreInputs=document.createElement("div");
cadre.appendChild(cadreInputs);
cadreInputs.setAttribute("id","cadreInputs");

let cadreNumbers=document.createElement("div");
cadre.appendChild(cadreNumbers);
cadreNumbers.setAttribute("id","CadreNumbers");

let cadreOperators=document.createElement("div");
cadre.appendChild(cadreOperators);
cadreOperators.setAttribute("id","cadreOperators");

let input1=document.createElement("input");
cadreInputs.appendChild(input1);
input1.setAttribute("type","number");


let spanOperator=document.createElement("span");
spanOperator.innerHTML="    ";
cadreInputs.appendChild(spanOperator);
spanOperator.setAttribute("id","spanOperator");

let input2=document.createElement("input");
cadreInputs.appendChild(input2);
input2.setAttribute("type","number");


let egal=document.createElement("button");
egal.innerText=`=`;
cadreInputs.appendChild(egal);

let tabNumbers=[1,2,3,4,5,6,7,8,9,0];
let tabOperators=[`+`,`-`,`x`,`/`];

let clear=document.createElement("button");
clear.innerText="C";
cadre.appendChild(clear);


export {myBody,cadre,cadreInputs,cadreNumbers,cadreOperators,input1,input2,spanOperator,egal,tabNumbers,tabOperators, clear};