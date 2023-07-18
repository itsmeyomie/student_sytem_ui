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
  {
    path: 'add-marks',
    loadChildren: () => import('./add-marks/add-marks.module').then(m => m.AddMarksModule)
  },
  {
    path: 'delete-marks',
    loadChildren: () => import('./delete-marks/delete-marks.module').then(m => m.DeleteMarksModule)
  },
  {
    path:'edit-marks',
    loadChildren:()=>import('./edit-marks/edit-marks.module').then(m=>m.EditMarksModule)
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
