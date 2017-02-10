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
     <form #myForm="ngForm"  novalidate (ngSubmit)="onSubmit(myForm)">                    
                        <label>Название курса</label>
                        <input  [(ngModel)]="courceName" name="name" ngModel required />
                        <br>
                        <label>Описание курса</label>
                        <input  [(ngModel)]="courceDescription" name="description" />                       
                        <br>
                        <label>Дата курса</label>
                        <input  [(ngModel)]="courceDate" name="courceDate" />                       
                        <br>
                        <label>Продолжительность курса</label>
                        <input (keypress)="validate($event)" [(ngModel)]="courceDuration" name="duration" required />  
                        <input type="submit" [disabled]="myForm.invalid" value="Отправить" />
                </form>
  `,
})
export class EditComponent implements OnDestroy {      
 private id: number;
 private routeSubscription: Subscription; 
 courceItem: Cource;
 courceName: string;
 courceDescription: string;
 courceDate: string;
 courceDuration: number;

 constructor(private router: Router,public route: ActivatedRoute,private dataService: DataService){         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    }
ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
ngOnInit() {
	this.courceItem = this.dataService.getItemData(this.id); 
    this.courceName = this.courceItem.name; 
    this.courceDescription = this.courceItem.description;
    this.courceDate = this.courceItem.courceDate; 
    this.courceDuration = this.courceItem.duration; 
}  
onSubmit(form: any){
        this.dataService.editData(this.id,form.value.name,form.value.courceDate,form.value.description,form.value.duration);
        this.router.navigate(['/cources']);
    }
validate(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);   
    if (!pattern.test(inputChar)) {      
          event.preventDefault();
      }
    }    
}
