import colors from 'colors';
import guardarArchivo from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import Tareas from './models/tareas.js';

 
console.clear();
 
const main = async () => {
  let opt = '';
  const tareas = new Tareas();
  do {

    opt = await inquirerMenu();

    switch(opt){
      case '1':
        //const desc =
        tareas.crearTarea(await leerInput('Descripción: '));
      break;

      case '2':
        console.log(tareas.listadoArr);
      break;

    }

    guardarArchivo( tareas.listadoArr );

    await pausa();


  } while (opt !== '');
};
 
main();