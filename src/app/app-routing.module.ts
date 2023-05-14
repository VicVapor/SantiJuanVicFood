import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: CreateUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
