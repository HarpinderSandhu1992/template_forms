import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  onSubmit(formData: any) {
    console.log('Form Submitted', formData.value);
  }
}
