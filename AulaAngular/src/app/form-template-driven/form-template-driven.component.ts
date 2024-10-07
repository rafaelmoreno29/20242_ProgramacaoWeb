import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css'],
})
export class FormTemplateDrivenComponent {
  cliente: any = {};

  salvar(form: NgForm) {
    if (form.valid) {
      console.log(this.cliente);
    }
  }
}
