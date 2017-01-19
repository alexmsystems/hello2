import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add';
import { CourcesComponent } from './cources';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { ItemComponent  } from './items';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [ 
  { path: 'cources/new', component: AddComponent },
  { path: '', component: CourcesComponent },
  { path: 'cources', component: CourcesComponent },
  { path: 'cources/:id', component: ItemComponent },
  { path: 'login', component: LoginComponent },  
  { path: '**',    component: NoContentComponent }
];
