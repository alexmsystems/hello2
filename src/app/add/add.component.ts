import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from '../main.service';
import {Cource} from '../cource';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'add',
  styles: [`       
    `],
    template: `<form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
                   
                        <label>Название курса</label>
                        <input  name="name" ngModel required />
                        <br>
                        <label>Описание курса</label>
                        <input name="description" ngModel />                       
                        <br>
                        <label>Дата курса</label>
                        <input name="courceDate" ngModel />                       
                        <br>
                        <label>Продолжительность курса</label>
                        <input  (keypress)="validate($event)" name="duration" ngModel required />
                        <br>
                        <input type="submit" [disabled]="myForm.invalid" value="Отправить" />                                 
                </form>`,
   
})
export class AddComponent {  
  constructor(private router: Router, public route: ActivatedRoute,private dataService: DataService) { } 

 onSubmit(form: NgForm){
        this.dataService.addData(form.value.name,form.value.courceDate,form.value.description,form.value.duration);
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
