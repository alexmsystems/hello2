import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../main.service';
import {Cource} from '../cource';
@Component({
  selector: 'about',
  styles: [`
  `],
  template: `
    <h1>About</h1>

	
	<table class="table table-striped">
            <thead>
                <tr>
                    <th>название курса</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.courceDate}}</td>
                </tr>
            </tbody>
        </table>
	
  `,
   providers: [DataService]
})
export class AboutComponent 

{
  localState: any;
  items: Cource[] = [];
  
  constructor(public route: ActivatedRoute,private dataService: DataService) {

  }

  
  
  ngOnInit() {  
	  
    console.log('hello `About` component');	  
	this.items = this.dataService.getData();
	console.log('hello `About` load from service');	 
	
    this.route
      .data
      .subscribe((data: any) => {});
  }  
}
