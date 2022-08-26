import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component';
import { SimpleFormComponent } from './simple-form.component';
import {
  ReactiveformComponent,
  ReactiveformComponent2,
  ReactiveformComponent3,
} from './reactiveform/reactiveform.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    SimpleFormComponent,
    AppComponent2,
    ReactiveformComponent,
    ReactiveformComponent2,
    ReactiveformComponent3,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
