import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ad',
    component: AdvertisementComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(mod => mod.HomeModule),
    canActivate: [AuthGuard], // 守卫路由
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
