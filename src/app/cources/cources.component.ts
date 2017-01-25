import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../main.service';
import {Cource} from '../cource';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'cources',
  styles: [`.box1 {
    border: solid 1px #006699;
    padding: 20px;
    background: #f3f3f3;
    border-radius: 5px;
  }

  .todos input.textfield {
    width: 480px;
    height: 36px;
    margin-right: 20px;
    font-size: 1.4em;
    vertical-align: top;
  }

  .todos input.checkbox {
    width: 20px;
    height: 20px;
  }

  .todos .checked {
    text-decoration: line-through;
  }

  .todos button {
    height: 36px;
    font-size: 1.1em;
    vertical-align: top;
    border: solid 1px #999;
    border-radius: 2px;
  }

  .todos .delete-icon {
    diplay: inline-block;
    cursor: pointer;
  }
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
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.courceDate}}</td>
                    <td><a [routerLink]=" ['/cources' , item.id] " >Detail {{item.id}}</a></td>
                    <td><a [routerLink]=" ['/cources' , item.id, 'edit'] " >Edit {{item.id}}</a></td>
                    <td><span (click)="deleteItem(item.id)" >delete</span></td>
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
 onSubmit(form: NgForm){
        console.log(form);
        this.dataService.addData(form.value.name,form.value.courceDate,form.value.description,form.value.duration);
    }

    deleteItem(id) {
      this.dataService.deleteData(id);
    }
}
