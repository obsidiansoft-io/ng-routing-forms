import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido() {
    return this.miFormulario?.controls['nombre']?.invalid &&
      this.miFormulario?.controls['nombre']?.touched;
  }

  edadValida() {
    return this.miFormulario?.controls['edad']?.errors?.['customMin'] &&
      this.miFormulario?.controls['edad']?.touched;
  }

  guardar() {
    console.log(this.miFormulario);
  }
}
