import { Component, OnInit } from '@angular/core';

interface Documento {
  id: number;
  nombre: string;
}

interface Empleado {
  nombre: string;
  archivos: Documento[];
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  nuevoArchivo: string = '';
  empleado: Empleado = {
    nombre: 'Ruddy',
    archivos: [
      { id: 1, nombre: 'INE' },
      { id: 2, nombre: 'RFC' },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('Guardando');
  }

  eliminar(indice: number) {
    this.empleado.archivos.splice(indice, 1);
  }

  agregar() {
    console.log(this.nuevoArchivo);
    const nuevo: Documento = {
      id: this.empleado.archivos.length + 1,
      nombre: this.nuevoArchivo,
    };
    this.empleado.archivos.push(nuevo);
  }

}
