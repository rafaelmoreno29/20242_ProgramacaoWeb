import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reative',
  templateUrl: './form-reative.component.html',
  styleUrls: ['./form-reative.component.css'],
})
export class FormReativeComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl(''),
    });
  }
  salvar() {
    console.log(this.form.value);
  }
}
