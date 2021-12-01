let vp = document.getElementById("villa");
let papel = vp.getContext("2d");
let cantidadVacas = aleatorio(1,10);
let cantidadCerdos = aleatorio(5,15);
let cantidadPollos = aleatorio(15,20);

let cerdox = 250;
let cerdoy = 250;

let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

let fondo = {
  url: "tile.png",
  cargaOK: false
}

let vaca = {
  url: "vaca.png",
  cargaOK: false
};

let pollo = {
  url: "pollo.png",
  cargaOK: false
};

let cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

document.addEventListener("keyup", teclazo);

function teclazo(evento){
  
  switch(evento.keyCode){
    case teclas.UP:
      cerdoy = cerdoy - 10;
      break;
    
    case teclas.DOWN:
      cerdoy = cerdoy + 10;
      break;

    case teclas.LEFT:
      cerdox = cerdox - 10;
      break;

    case teclas.RIGHT:
      cerdox = cerdox + 10;
      break;
  }
  dibujar();
}


function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK){
    for(let i=0; i<cantidadVacas; i++){
      let x = aleatorio(0,420);
      let y = aleatorio(0,420);
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK){
    papel.drawImage(cerdo.imagen, cerdox, cerdoy);
  }
  if(pollo.cargaOK){
    for(let i=0; i<cantidadPollos; i++){
      let x = aleatorio(0,420);
      let y = aleatorio(0,420);
      papel.drawImage(pollo.imagen, x, y);
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
  pollo.cargaOK = true;
}

function cargarCerdos(){
  cerdo.cargaOK = true;
}


function aleatorio(min, max){
  let resultado;
  resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}