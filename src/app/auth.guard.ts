import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {DataService} from "./main.service"

@Injectable()
export class AuthGuard implements CanActivate{

     constructor(private router:Router,private dataService: DataService) {

  }
 canActivate():boolean {

    var isLoggedIn = false;//Math.random()>.5;
    isLoggedIn = this.dataService.isAuth();
    if (!isLoggedIn) {

      this.router.navigate(['login']);

    }

    return isLoggedIn;

  }
}
