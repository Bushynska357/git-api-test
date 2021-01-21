import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './Components/repos/repos.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  {path:'', component: UserComponent},
  // {path:'repos', component:ReposComponent},
  {path:':username', component:ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
