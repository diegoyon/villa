let z = aleatorio(5,0);
document.write(z);

function aleatorio(min, max){
  let resultado;
  resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}