/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.component.css'),
    require('../assets/css/bootstrap.min.css'),
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>      
      |
      <span>
        <a [routerLink]=" ['./cources'] ">
          Cources
        </a>
      </span>      
      |
      <span>
        <a [routerLink]=" ['./cources/new'] ">
          Add new cource
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./login'] ">
          Login
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>


    <footer> Cources 2017    </footer>
  `
})
export class AppComponent {  

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

