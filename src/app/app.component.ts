import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User = {
    name: 'Change',
    surname: 'Me',
  };

  submit() {
    alert(`Submited with: ${this.user.name} ${this.user.surname}`);
  }
}

export interface User {
  name: string;
  surname: string;
}

@Component({
  selector: 'my-app2',
  template: `
  <form #userForm="ngForm">
	<div>
		<label for="name">Name</label>
		<input id="name" 
           name="name"
           type="text"
           required
           [(ngModel)]="user.name" />

  </div>
  
  <pre>Valid? {{userForm.form.controls.name?.valid}}</pre>
<pre>Dirty? {{userForm.form.controls.name?.dirty}}</pre>
<pre>Touched? {{userForm.form.controls.name?.touched}}</pre>
  </form>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent2 {
  user = {
    name: 'Sample Name',
  };
}
