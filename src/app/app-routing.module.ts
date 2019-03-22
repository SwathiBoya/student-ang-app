import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'add-student',
    component:AddStudentComponent
  },
  {
    path:'editstudent/:rn',
    component:EditstudentComponent
  },
  {
    path:'',
    redirectTo:'/student',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
