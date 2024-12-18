/* //2.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]

const copiedpointList = [...pointsList];

console.log(copiedpointList);

 

 //2.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiedtoy = {...toy};

console.log (copiedtoy);
 */
//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando  spread operatos.

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const combinedpointList = [...pointsList,...pointsLis2];
console.log(combinedpointList);

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newtoy = {...toy, ...toyUpdate};

console.log(newtoy);



//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operators.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

//Con el método slice seleccionamos las partes del array que van antes y después de amarillo.

const copiedcolors = [...colors.slice(0,2), ...colors.slice(3)];

console.log(copiedcolors);

