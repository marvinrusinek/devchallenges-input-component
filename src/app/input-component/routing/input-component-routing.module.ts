import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonComponent } from '../containers/button/button.component';
import { InputComponent } from '../containers/input/input.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'button', component: ButtonComponent },
  { path: 'input', component: InputComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputComponentRoutingModule { }
