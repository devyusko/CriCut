import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'assessment',
    loadComponent: () => import('./assessment/assessment.component').then(m => m.AssessmentComponent)
  }
];
