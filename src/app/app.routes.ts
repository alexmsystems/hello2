import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { CourcesComponent } from './cources';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { ItemComponent  } from './items';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cources', component: CourcesComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'login', component: LoginComponent }, 
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  },
  { path: '**',    component: NoContentComponent },
];
