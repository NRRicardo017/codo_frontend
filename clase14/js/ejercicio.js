/*
calculadora
+ 
-
*
/
*/

function calcular (){ // inicio
let op1;
let op2;
let operacion;
let resultado;


// leer op1

//prompt() es para leer la variable
//javascrip tiene una funcion: document.getElementById('id').value;
op1=  document.getElementById('op1').value; 
operacion=  document.getElementById('operacion').value; 
op2=  document.getElementById('op2').value; 

console.log('op1 vale: ',op1);
console.log('op2 vale: ',op2);
console.log('operacion vale: ', operacion);

// ahora el bloque de if (casita)

//suma

if(operacion === '+') { //comparacion

   resultado= (+op1) + parseInt(op2);
   
}

//resta
if(operacion === '-'){

    resultado = (+op1) - parseInt(op2);

}

//multiplicacion

if(operacion === '*'){

    resultado = (+op1) * parseInt(op2);

}
// division

if(operacion === '/'){

    if((+op2)!==0 ) { // op2<op1

        resultado = (+op1) / parseInt(op2);
    } else {
        resultado = 'No se puede dividir por 0';

    }

}

console.log(resultado);

//actualizar el label del html con el resultaado de la operacion

 document.getElementById('resultado').innerHTML = resultado;

}// fin

function borrar (){
    //op1
    document.getElementById('op1').value='';
    document.getElementById('op2').value='';
    document.getElementById('operacion').value='';
    document.getElementById('resultado').innerHTML='';



}