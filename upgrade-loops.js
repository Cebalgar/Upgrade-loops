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
//-----------------------------------------------------------------
const placesToTravel = 
[{id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'}, 
{id: 44, name: 'Filipinas'}, 
{id: 59, name: 'Madagascar'}]


for(let index=0; index<placesToTravel.length; index++){
  
  if(placesToTravel[index].id === 11){
    placesToTravel.splice(index, 1)
  }else if(placesToTravel[index].id ===40)
  placesToTravel.splice(index, 1)

}
console.log(placesToTravel);

//------------------------------------------------------------