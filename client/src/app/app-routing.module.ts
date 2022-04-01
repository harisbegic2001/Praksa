import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedComponent } from './accepted/accepted.component';
import { CreateComponent } from './create/create.component';
import { DeclinedComponent } from './declined/declined.component';
import { HomeComponent } from './home/home.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'create', component: CreateComponent},
  {path:'learn-more', component: LearnMoreComponent},
  {path: 'student/:name', component: StudentDetailComponent},
  {path: 'student/:lastName', component: StudentDetailComponent},
  {path: 'declined', component: DeclinedComponent},
  {path: 'accepted', component: AcceptedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
