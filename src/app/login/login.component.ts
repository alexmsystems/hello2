import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../main.service';
import {Cource} from '../cource';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'login',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
                    <div class="form-group">
                        <label>Имя пользователя</label>
                        <input class="form-control" name="name" ngModel required />
                    </div>
                    <div class="form-group">
                        <input type="submit" [disabled]="myForm.invalid" class="btn btn-default" value="Отправить" />
                    </div>
                </form>`,
   
})
export class LoginComponent 

{
  localState: any;  
  constructor(public route: ActivatedRoute,private dataService: DataService) {

  } 
  
  ngOnInit() {  
	
    this.route
      .data
      .subscribe((data: any) => {});
  }  

 onSubmit(form: NgForm){
        console.log(form);
        this.dataService.logIn(form.value.name);

    }

}

