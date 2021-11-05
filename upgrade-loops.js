const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 
'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


for(let ropa of products){

  if(ropa.includes("Camiseta")){

  }
  console.log(ropa.includes("Camiseta"));
  
  }

//---------------------------------------------------------
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (var places of placesToTravel) {
	console.log(places);
  }

//-----------------------------------------------------------

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
  
for (var key in alien) {
  console.log("Alien tiene " + key + " con valor: " + alien[key]);
}