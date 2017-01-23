import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add';
import { CourcesComponent } from './cources';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { ItemComponent  } from './items';
import { EditComponent  } from './edit';
import { DataResolver } from './app.resolver';
import { AuthGuard } from './auth.guard';


export const ROUTES: Routes = [ 
  { path: 'cources/new', component: AddComponent , canActivate: [AuthGuard]},
  { path: '', component: CourcesComponent , canActivate: [AuthGuard]},
  { path: 'cources', component: CourcesComponent , canActivate: [AuthGuard]},
  { path: 'cources/:id', component: ItemComponent , canActivate: [AuthGuard]},
  { path: 'cources/:id/edit', component: EditComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },  
  { path: '**',    component: NoContentComponent }
];
