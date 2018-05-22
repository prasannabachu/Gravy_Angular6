import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from "./login.service";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
    //styleUrls: ['./app.component.css']
})

export class LoginComponent {
    accesroute: boolean;
    
    arraydetails: any[];
    LoginDetails: any[];
    hero: {
        id: any;
        name: string;
    };
    constructor(private router: Router,private _LoginService:LoginService){
        
    }
    
    // title = 'My First Angular App!';
   

    onSubmit(f: NgForm) {
        this.LoginDetails = f.value

        // this.arraydetails.push(({'name':this.LoginDetails,'password':this.LoginDetails}))
        // console.log(f.value);  // { first: '', last: '' }
        //console.log(f.valid);  // false
        if ((f.value.username == "apple") && (f.value.password == "apple@123")) {
            alert("login succesful")
            this.accesroute = true;
            this._LoginService.accessrouting = true;
            this.router.navigateByUrl('/dashboard');	

        } else {
            alert("login failed")
            this._LoginService.accessrouting = false;
        }
    }
}
