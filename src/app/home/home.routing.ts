import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'first',
        component: FirstComponent,
      },
      {
        path: 'second',
        component: SecondComponent,
      },
      {
        path: '**',
        redirectTo: "first",
      }
    ]
   },
  //  {path:'**',pathMatch:'full',redirectTo:'home'}
];

export const HomeRoutes = RouterModule.forChild(routes);
