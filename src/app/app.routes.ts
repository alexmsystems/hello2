import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AddComponent } from './add';
import { CourcesComponent } from './cources';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { ItemComponent  } from './items';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'cources/new', component: AddComponent },
  { path: 'cources', component: CourcesComponent },
  { path: 'cources/:id', component: ItemComponent },
  { path: 'login', component: LoginComponent }, 
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  },
  { path: '**',    component: NoContentComponent },
];
