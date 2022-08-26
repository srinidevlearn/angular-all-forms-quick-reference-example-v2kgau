import { Component } from "@angular/core";

@Component({
  selector: "simple-form",
  template: `
    <label for="simple-name">Name</label>
    <input id="simple-name" 
           [value]="name" 
           (keyup)="handleNameChange($event.target.value)" />
    <br>
    <button type="button" (click)="submit()">Submit</button>
  `
})
export class SimpleFormComponent {
  name: string = 'Tomas';

  // it is possible to react to the input value change 
  // (which is not the case when using ngModel)
  handleNameChange(name: string) {
    this.name = name;
  }

  submit() {
    alert(`Submited with: ${this.name}`);
  }
}