//objeto vacio 




// vector vacio de alumnos
const alumnos= [
{
   edad:25,
   nombre:'carlos',
   carrera: 'ING'

},
{
    edad:30,
    nombre:'RODRIGO',
    carrera: 'LIC'
 
 },
 {
    edad:29,
    nombre:'REINALDO',
    carrera: 'MATEMATISCA'
 
 },
 {
    edad:40,
    nombre:'jose',
    carrera: 'MATEMATISCA'
  
 }
 

];

//SUMAR TODAS LAS EDADES
//let algo = 0;
//algo = algo +5;
//algo+=5;
let sumaEdades = 0;// acumulador
for( let i=0;i< alumnos.length;i++) {
    //sumaEdades = sumaEdades + alumnos[i].edad; las dos maneras son validas 
    sumaEdades +=alumnos[i].edad;
}
console.log('primer forma', sumaEdades);

sumaEdades = 0;

for (let alumno of alumnos) {//forarch
        sumaEdades += alumno.edad;
}
console.log('segunda forma', sumaEdades);
sumaEdades = 0;

//expresion lambda
//array.forEach()
alumnos.forEach(alumno => sumaEdades += alumno.edad );
console.log('tercer forma', sumaEdades);

//--------------------------------------------------------------
//LISTA DE LOS ALUMNOS MENORES DE 40
const menoresDe40 = [];// inicializo el vector vacio
const menor = 40;
for ( let alumno of alumnos){
    if (alumno.edad < menor){
        menoresDe40.push (alumno);
    }
}
console.log('menores de 40', menoresDe40);

//filter: funcion lambda que retorna una lista de lo que filtro 
//dentro de la expresion lambda

const alumnosMenoresDe40 = alumnos.filter(alumno => alumno.edad < menor );
console.log(alumnosMenoresDe40);

//existe algun alumno de 25 años 

let existe = false;

for (let i=0 ; i<alumnos.length;i++){
    if(alumnos[i].edad === 25) {
        existe = true;
        break; //corta el ciclo for
    }
}

console.log('existe?: ', existe);