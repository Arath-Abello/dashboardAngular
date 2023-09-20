import { Component} from '@angular/core';
import { Identidades3D } from 'src/app/interfaces/identidad';

@Component({
  selector: 'app-identidades',
  templateUrl: './identidades.component.html',
  styleUrls: ['./identidades.component.css']
})
export class IdentidadesComponent {

  // variable que contiene las propiedades y tipos de datos de la interfaz

  public identidades: Identidades3D[] = [
    {
      texto: 'THOR',
      imagen: '../../../../../../assets/identidades/img-avatar1.jpeg',
      boton: 'SELECCIONADO'
    },
    {
      texto: 'IRONMAN',
      imagen: '../../../../../../assets/identidades/img-avatar2.jpeg',
      boton: 'SELECCIONAR'
    },
    {
      texto: 'BRUTUS',
      imagen: '../../../../../../assets/identidades/img-avatar3.jpeg',
      boton: 'SELECCIONAR'
    },
    {
      texto: 'CLARCH',
      imagen: '../../../../../../assets/identidades/img-avatar4.jpeg',
      boton: 'SELECCIONAR'
    },
    {
      texto: 'VINCENT',
      imagen: '../../../../../../assets/identidades/img-avatar5.jpeg',
      boton: 'SELECCIONAR'
    },
    {
      texto: 'ASTRO',
      imagen: '../../../../../../assets/identidades/img-avatar6.jpeg',
      boton: 'SELECCIONAR'
    },
    {
      texto: 'GOLDEN',
      imagen: '../../../../../../assets/identidades/img-avatar7.jpeg',
      boton: 'SELECCIONAR'
    },
    {
      texto: 'MESSI',
      imagen: '../../../../../../assets/identidades/img-avatar8.jpeg',
      boton: 'SELECCIONAR'
    },
  ]

  // variable que contiene la imagen predeterminada y que sea de tipo string o null
  public imagenPerfil: string | null = '../../../../../../assets/identidades/img-avatar1.jpeg'

  // variable que tendra las propiedades y tipos de datos de la interfaz o puede ser null y por defecto será null
  public botonSeleccionado: Identidades3D | null = null;

  // evento que llamamod cuando hacemos click en el boton del bucle for del html y tendra un parametro que contiene propiedades y tipo de datos de la interfaz
  cambiarTexto(identidad: Identidades3D) {
    //  map  recorre cada elemento del array y devuelve un nuevo array con las modificaciones realizadas.
  this.identidades.map((item) => {
    // al devolver un array con modificaciones entonces el parametro item recibira las propiedades y tipos de datos de identidad
    // si el parametro item es identicamente a identidad entonces se
    //actualiza la propiedad  boton  a 'SELECCIONADO'.
    // Además, se asigna el objeto  item  a la variable  botonSeleccionado  y se
    // actualiza la variable  imagenPerfil
    //  con la propiedad  imagen  del objeto  item .
    if (item === identidad) {
      item.boton = 'SELECCIONADO';
      this.botonSeleccionado = item;
      this.imagenPerfil = item.imagen;

      // Si el objeto  item  no es igual a  identidad , se actualiza la propiedad  boton  a 'SELECCIONAR'.
    } else {
      item.boton = 'SELECCIONAR';
    }
    // Finalmente, se devuelve el objeto  item  en cada iteración del  map .
    return item;
  });
}
}
