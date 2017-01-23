import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../main.service';
import {Cource} from '../cource';

@Component({
  selector: 'cources',
  styles: [`
  `],
  template: `
    <h1>Cources</h1>
	<table class="table table-striped">
            <thead>
                <tr>
                    <th>Название курса</th>
                    <th>Дата</th>
                    <th>Ссылка</th>
                    <th>Редактировать</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.courceDate}}</td>
                    <td><a [routerLink]=" ['/cources' , item.id] " >Detail {{item.id}}</a></td>
                    <td><a [routerLink]=" ['/cources' , item.id, 'edit'] " >Edit {{item.id}}</a></td>
                </tr>
            </tbody>
        </table>
  `,
})
export class CourcesComponent {
  localState: any;
  items: Cource[] = [];
  constructor(public route: ActivatedRoute,private dataService: DataService) {

  }

  ngOnInit() {
	  
	this.items = this.dataService.getData();
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Cources` component');

  }
}
