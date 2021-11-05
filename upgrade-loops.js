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
const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]
  let nombreSinGato=[];
  
  for(let toy of toys){

    if(!(toy.name).includes("gato"))

    nombreSinGato.push(toy);
   
    console.log(nombreSinGato);
  }
 

//----------------------------------------------------

const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

 
for(let muñecos of toys){

  if((muñecos.sellCount)>15){


    popularToys.push(muñecos);
  }

console.log(popularToys);
  

}
 
