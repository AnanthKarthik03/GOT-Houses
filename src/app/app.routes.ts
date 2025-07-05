import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'houses/:id', loadComponent: () => import('./pages/house-detail/house-detail.component').then(m => m.HouseDetailComponent) },
  { path: 'characters/:id', loadComponent: () => import('./pages/character-detail/character-detail.component').then(m => m.CharacterDetailComponent) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}