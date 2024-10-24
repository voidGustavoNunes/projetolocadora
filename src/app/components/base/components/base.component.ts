import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  constructor(protected router: Router) {}

  onCancel(form: NgForm) {
    form.reset();
    this.router.navigate(['/home']);
  }
}
