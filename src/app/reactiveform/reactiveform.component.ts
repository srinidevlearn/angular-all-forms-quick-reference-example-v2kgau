import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
  <form [formGroup]="userForm">
  <input type="text" formControlName="name" />
  <pre>Valid? {{ userForm.get('name')?.valid }}</pre>
  <pre>Dirty? {{ userForm.get('name')?.dirty }}</pre>
  <pre>Touched? {{ userForm.get('name')?.touched }}</pre>
</form>
`,
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  user = {
    name: 'Sample Name',
  };
  userForm!: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({ name: ['', [Validators.required]] });
    this.userForm.patchValue({ ...this.user });
  }
}

@Component({
  selector: 'app-reactive-form2',
  template: `
  <form [formGroup]="userForm">
  <input type="text" formControlName="name" />
  <pre>Valid? {{ userForm.get('name')?.valid }}</pre>
  <pre>Dirty? {{ userForm.get('name')?.dirty }}</pre>
  <pre>Touched? {{ userForm.get('name')?.touched }}</pre>
</form>
`,
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent2 implements OnInit {
  user = {
    name: 'Sample Name',
  };
  userForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
    this.userForm.patchValue({ ...this.user });
  }
}

@Component({
  selector: 'app-reactive-form3',
  template: `
  <form [formGroup]="userForm">
  <input type="text" formControlName="name" />
  <br />
  <button type="button" (click)="addNewAddressGroup()">Add New Address</button>
  <br />
  <fieldset>
    <legend>Addresses</legend>
    <div
      style="border:1px solid blue;margin-bottom:10px;padding:10px"
      *ngFor="let address of userAddresses.controls; let i = index"
      [formGroup]="address"
    >
      <span style="color:red">Address Set : {{ i + 1 }}</span>
      <hr />
      <div>street <input formControlName="street" /></div>

      <div>city <input formControlName="city" /></div>
      <button (click)="deleteAddressGroup(i)">Delete</button>
    </div>
  </fieldset>
</form>
`,
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent3 implements OnInit {
  user = {
    name: 'Sample Name',
    userAddresses: [],
  };
  userForm!: FormGroup;

  get userAddresses(): FormArray {
    return this.userForm.get('userAddresses') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      userAddresses: this.fb.array([]),
    });
    this.userForm.patchValue({ ...this.user });
  }

  addNewAddressGroup() {
    const forms: FormArray = this.userForm.get('userAddresses') as FormArray;
    console.log(forms);
    forms.push(this.addressFields());
  }

  addressFields() {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  deleteAddressGroup(index: number) {
    const forms = this.userForm.get('userAddresses') as FormArray;
    forms.removeAt(index);
  }
}
