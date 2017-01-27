import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../main.service';
import {Cource} from '../cource';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'login',
  styles: [`
  @import "bourbon";

body {
	background: #eee !important;	
}

.wrapper {	
	margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		@include box-sizing(border-box);

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}

    `],
    template: `
<div class="wrapper">
    <form #myForm="ngForm" class="form-signin" novalidate (ngSubmit)="onSubmit(myForm)">

                          <h2 class="form-signin-heading">Please login</h2>
                        <input  name="name" placeholder="Login" class="form-control" ngModel required />
                        
                        <input type="password" placeholder="Password" class="form-control" name="pass" ngModel required />
                        
                        <input type="submit" class="btn btn-lg btn-primary btn-block" [disabled]="myForm.invalid" value="Отправить" /> 
                </form>
              </div>
                `
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

