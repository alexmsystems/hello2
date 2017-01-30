import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../main.service';
import {Cource} from '../cource';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'login',
  styles: [`
    `],
    template: `<form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
                        <label>Имя пользователя</label>
                        <input  name="name" ngModel required pattern="[a-zA-Z_]*" />
                        <br><label>Пароль</label>
                        <input type="password" name="pass" ngModel required />
                        <br><input type="submit" [disabled]="myForm.invalid" value="Отправить" />
                </form>`
})
export class LoginComponent {  
  constructor(private router: Router, private dataService: DataService) {
}
 onSubmit(form: NgForm){
        console.log(form);
        this.dataService.logIn(form.value.name,form.value.pass);
        this.router.navigate(['/cources']);
    }
}

