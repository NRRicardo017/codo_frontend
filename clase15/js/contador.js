function incrementar(){
    const Label = document.getElementById('contador');
    let valor = parseInt(Label.innerHTML);
   // console.log(contadorLabel);
  //  console.log(contadorValor);

//incremento el valor de contador Valor

// contadorValor= contadorValor +1;
 valor++; //post incremento
//++contadorValor; //preincremento (suma automaticamente borrando el primer numero ingresado)
Label.innerHTML = valor;
/*
//determino si valor es par
let resto = valor % 2; // 0 o 1 valor del resto

const labelParidad = document.getElementById('paridad');
if(resto === 0){
  //scope ES DONDE ES VISIBLE LA VARIABLE
  labelParidad.innerHTML = 'PAR';

} else {
    
  labelParidad.innerHTML = 'IMPAR';
}
*/
paridad(valor);

}

function decrementar(){
const label=document.getElementById('contador');
let valor = label.innerHTML;
valor = parseInt(valor) - 1 ;

//update del valor 
label.innerHTML = valor;
/*
//determino si valor es par
let resto = valor % 2; // 0 o 1 valor del resto

const labelParidad = document.getElementById('paridad');
if(resto === 0){
  //scope ES DONDE ES VISIBLE LA VARIABLE
  labelParidad.innerHTML = 'PAR';

} else {
    
  labelParidad.innerHTML = 'IMPAR';
}*/
paridad(valor);

}
// funcion paridad 

function paridad(valor){

   
    const labelParidad = document.getElementById('paridad');

     //invocar a la funcion
     let esNumeroPar =esPar(valor);

    if(esNumeroPar){
      //scope ES DONDE ES VISIBLE LA VARIABLE
      labelParidad.innerHTML = 'PAR';
    
    } else {
        
      labelParidad.innerHTML = 'IMPAR';
    }
    
    }

function esPar(valor){
//determino si valor es par
//let resto = valor % 2; // 0 o 1 valor del resto
/*if (resto === 0){
    return true;
} else {
    return false;
}
return resto === 0;
*/
return valor % 2 === 0
}


