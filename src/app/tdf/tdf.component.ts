import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  onSubmit() {
    console.log(this.person);
  }
  person = {
    email: '',
    password: '',
  }

}
