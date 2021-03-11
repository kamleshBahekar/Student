import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewStudentComponent } from './view-student/view-student.component';


const routes: Routes = [
  { path: 'student-add', component: AddStudentComponent },
  { path: 'student/:id',component: ViewStudentComponent },
  { path: 'students', component: ListStudentComponent},
  { path: 'student-add/:id', component: AddStudentComponent},
  { path: '',
  redirectTo: '/student-add',
  pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
