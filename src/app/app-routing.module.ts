import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'marks',
    loadChildren: () => import('./student-marks-profile/student-marks-profile.module').then(m => m.StudentMarksProfileModule)
  },

  {
    path: '',
    redirectTo: '/students', pathMatch: 'full'
  },
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
