

const btnAdd= document.getElementById('btnAdd');

//puedo agregar un evento desde javascript
//onclick="add()" en html se pone asi

const claves =[];




//declaro la funcion
function add(){
    //capturo el input por su id
    const clave = getKey ();
    

    

    
    
    
  //validacion
  const isValid = validateKey(clave);
  if (isValid) {
  //pasa las validaciones!
  //agregar a la lista de claves
  addToList(clave);
    
} else {
    alert ('Debe completar la clave')
}
//renderKeys();
renderKeyByDOM();
  
}

function renderKeyByDOM(){
   const list= findKeys();
   //crear <ul>
   const ul = document.createElement('ul');
   ul.id= 'clavesUl';
   ul.className ='classUl';
//agregar al div el hiho: ul

list.appendChild(ul);
   //crear los<li> en base a el array de clave y los agrego 
   //al <ul>

for(let clave of claves){
    const li= document.createElement('li');
    li.innerHTML= clave;

    //al li le agrega un evento
    li.addEventListener('click',() => alert ('soy un li'))
    ul.appenChild(li);

};

   
    
   


}

function renderKeys(){
    const list= findKeys ();
    list.innerHTML='';
    claves.forEach(clave => {
        list.innerHTML += `<li>${clave}`
    })
}
//true|false
function validateKey(key){
    //validar
 /*     
if ( key ===''){
    return;
  }*/

  return key !=='';//true|false
}

function addToList(clave){
    claves.push(clave);

}
function getKey(){
    return document.getElementById('clave').value;
}
function findKeys(){
    return document.getElementById('claves');
}


btnAdd.addEventListener('click',add);