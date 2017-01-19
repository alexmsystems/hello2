import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add';
import { CourcesComponent } from './cources';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { ItemComponent  } from './items';
import { EditComponent  } from './edit';
import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [ 
  { path: 'cources/new', component: AddComponent },
  { path: '', component: CourcesComponent },
  { path: 'cources', component: CourcesComponent },
  { path: 'cources/:id', component: ItemComponent },
  { path: 'cources/:id/edit', component: EditComponent },
  { path: 'login', component: LoginComponent },  
  { path: '**',    component: NoContentComponent }
];
