import { Component , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {DataService} from '../main.service';
import {Cource} from '../cource';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'edit',
  styles: [`
  `],
  template: `
    <h1>Курс ID = {{id}}</h1>
     <table>
     <tr><td>Название курса</td><td>{{courceItem.name}}</td></tr>
     <tr><td>Описание</td><td>{{courceItem.description}}</td></tr>
     <tr><td>Дата</td><td>{{courceItem.courceDate}}</td></tr>
     <tr><td>Продолжительность</td><td>{{courceItem.duration}}</td></tr>     
     </table>
     <form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
                    <div class="form-group">
                        <label>Название курса</label>
                        <input class="form-control" [(ngModel)]="courceItem.name" name="name" ngModel required />
                        <br>
                        <label>Описание курса</label>
                        <input class="form-control" [(ngModel)]="courceItem.description" name="description" />                       
                        <br>
                        <label>Дата курса</label>
                        <input class="form-control" [(ngModel)]="courceItem.courceDate" name="courceDate" />                       
                        <br>
                        <label>Продолжительность курса</label>
                        <input class="form-control" [(ngModel)]="courceItem.duration" name="duration" />    
                    </div>
                    <div class="form-group">
                        <input type="submit" [disabled]="myForm.invalid" class="btn btn-default" value="Отправить" />
                    </div>
                </form>
  `,
})
export class EditComponent implements OnDestroy { 
     
    private id: number;
    private routeSubscription: Subscription;
    localState: any;
    courceItem: Cource;
    constructor(public route: ActivatedRoute,private dataService: DataService){         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
    ngOnInit() {  
	  
    console.log('hello `Edit` component');	  
	this.courceItem = this.dataService.getItemData(this.id);  		
    this.route
      .data
      .subscribe((data: any) => {});
  }  
  onSubmit(form: NgForm){
        console.log(form);
        console.log('editData');
        this.dataService.editData(this.id,form.value.name,form.value.courceDate,form.value.description,form.value.duration);

    }
}
