import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import {NgRedux,NgReduxModule} from 'ng2-redux'
import {IAppState, rootReducer, INITIAL_STATE} from './store'

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { CourcesComponent } from './cources';
import { AddComponent } from './add';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { ItemComponent } from './items';
import { EditComponent } from './edit';
import {DataService} from './main.service';
import { AuthGuard } from './auth.guard';
import { DurationFormat } from './duration.pipe';

import { ExceptionHandler } from 'angular2/src/core/facade/exceptions';
import { CustomExceptionHandler } from './exception.handler';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  DataService,
  AuthGuard
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
//

@NgModule({
  bootstrap: [ AppComponent],
  declarations: [
    AppComponent,
    AddComponent,
    CourcesComponent, 
    EditComponent, 
    LoginComponent,
    ItemComponent,
    DurationFormat,
    NoContentComponent,
   
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule, 
    NgReduxModule,  
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,     
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState, ngRedux: NgRedux<IAppState>) {

    ngRedux.configureStore(rootReducer,INITIAL_STATE);

  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

