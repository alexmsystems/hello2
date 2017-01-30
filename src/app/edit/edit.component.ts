import { Component , OnDestroy} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
                        <label>Название курса</label>
                        <input  [(ngModel)]="courceItem.name" name="name" ngModel required />
                        <br>
                        <label>Описание курса</label>
                        <input  [(ngModel)]="courceItem.description" name="description" />                       
                        <br>
                        <label>Дата курса</label>
                        <input  [(ngModel)]="courceItem.courceDate" name="courceDate" />                       
                        <br>
                        <label>Продолжительность курса</label>
                        <input  [(ngModel)]="courceItem.duration" name="duration"  required pattern="[0-9]*" />  
                        <input type="submit" [disabled]="myForm.invalid" value="Отправить" />
                </form>
  `,
})
export class EditComponent implements OnDestroy { 
     
    private id: number;
    private routeSubscription: Subscription; 
    courceItem: Cource;
    constructor(private router: Router,public route: ActivatedRoute,private dataService: DataService){         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
    ngOnInit() {
	this.courceItem = this.dataService.getItemData(this.id); 
  }  
  onSubmit(form: NgForm){
        this.dataService.editData(this.id,form.value.name,form.value.courceDate,form.value.description,form.value.duration);
        this.router.navigate(['/cources']);
    }
}
