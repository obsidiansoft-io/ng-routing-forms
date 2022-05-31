import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Ruddy'),
  //   edad: new FormControl(27)
  // });
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      'Ruddy',
      [Validators.required, Validators.minLength(3)]
    ],
    edad: [
      '',
      [Validators.required, Validators.min(18)]
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  campoInvalido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
