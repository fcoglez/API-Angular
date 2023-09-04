import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//EN ESTE FICHERO, SE DEBE IMPORTAR LOS COMPONENTES PARA CREAR SUS RUTAS
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NewUserComponent } from './view/new-user/new-user.component';
import { EditUserComponent } from './view/edit-user/edit-user.component';



const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch:'full'}, //esta linea, es para que siempre al abrir la app, aparezca el componente que ahi.
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  // imports: [
  //   CommonModule
  // ]
})

export class AppRoutingModule { }

//ES BUENA PRACTICA EXPORTAR TODOS LOS COMPONENTES QUE TENGAMOS EN ESTE FICHERO.
export const routingComponent = [DashboardComponent, NewUserComponent, EditUserComponent];
