let vp = document.getElementById("villa");
let papel = vp.getContext("2d");
let cantidad = aleatorio(5,10);

let fondo = {
  url: "tile.png",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

let vaca = {
  url: "vaca.png",
  cargaOK: false
};

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);


function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  for(let i=0; i<cantidad; i++){
    if(vaca.cargaOK){
      let x = aleatorio(0,420);
      let y = aleatorio(0,420);
      console.log(x);
      console.log(y);
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  
}

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOK = true;
}

function cargarPollos(){
  papel.drawImage(pollo, 20, 20)
}

function cargarCerdos(){
  papel.drawImage(cerdo, 50, 50)
}


function aleatorio(min, max){
  let resultado;
  resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}