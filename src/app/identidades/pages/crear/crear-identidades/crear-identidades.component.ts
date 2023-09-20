import { Component } from '@angular/core';
import { CrearIdentidades } from 'src/app/interfaces/crearIdentidades';

@Component({
  selector: 'app-crear-identidades',
  templateUrl: './crear-identidades.component.html',
  styleUrls: ['./crear-identidades.component.css']
})
export class CrearIdentidadesComponent {

  public imagenIdentidades: CrearIdentidades[] = [
    {
      imagen: '../../../../../assets/identidades/img-avatar1.jpeg'
    },
    {
      imagen: '../../../../../assets/identidades/img-avatar2.jpeg'
    },
    {
      imagen: '../../../../../assets/identidades/img-avatar3.jpeg'
    },
    {
      imagen: '../../../../../assets/identidades/img-avatar4.jpeg'
    },
    {
      imagen: '../../../../../assets/identidades/img-avatar5.jpeg'
    },
    {
      imagen: '../../../../../assets/identidades/img-avatar6.jpeg'
    },
    {
      imagen: '../../../../../assets/identidades/img-avatar7.jpeg'
    },
    {
      imagen: '../../../../../assets/identidades/img-avatar8.jpeg'
    }
  ]

}
