import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { InputComponentRoutingModule } from './input-component/routing/input-component-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './input-component/containers/sidebar/sidebar.component';
import { ButtonComponent } from './input-component/containers/button/button.component';
import { InputComponent } from './input-component/containers/input/input.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input-component',
    pathMatch: 'full'
  },
  {
    path: 'input-component',
    loadChildren: () =>
      import('./input-component/routing/input-component-routing.module').then(m => m.InputComponentRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    InputComponentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
