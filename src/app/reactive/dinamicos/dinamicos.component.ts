import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['Ruddy'],
    documentos: this.fb.array(
      [
        [ 'RFC', Validators.required ],
        [ 'CURP', Validators.required ],
      ],
      Validators.required
    )
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get documentosArr() {
    return this.miFormulario.get('documentos') as FormArray;
  }
}
