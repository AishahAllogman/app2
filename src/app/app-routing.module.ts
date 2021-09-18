import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EduComponent } from './edu/edu.component';
import { EMPformComponent } from './empform/empform.component';
import { ExpComponent } from './exp/exp.component';

const routes: Routes = [{
  path: 'form1',
  component: EMPformComponent,
},
{
  path: 'form2',
  component: EduComponent,
},
{
  path: 'form3',
  component: ExpComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
