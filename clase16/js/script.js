//creamos la funcion
function calculaNotas(){

    //tomar los datos de los input 
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    // crear vector de notas
    const notas = [];

    //cargar un vector
    //1- nombreVector [indice ]= valor ;

    notas[0] = parseInt (nota1);
    notas[1] = +nota2;

    //ahora trabajo con los vectores
    //recorrer el vector

    let menor= notas[0];
    let mayor=notas[0];
    let promedio;
    let suma=0;

    for(let i=0;i<notas.length;i++){
        //calculo el menor
        if (notas[i]<menor){
            menor = notas[i];
        }      
   
           
    //calculo el mayor
            if (notas[i]>mayor){
                mayor = notas[i];
            }      
      
    //sumo las notas
    suma=suma+notas [i];
}

  //ahora que tengo la suma de las notas, calculo el promedio

  promedio = suma / notas.length;

  //muestro los datos
  console.log(mayor);
  console.log(menor);
  console.log(promedio);
  }

