import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
public accessrouting:boolean;
  LoginChecking(){    

      return this.accessrouting;      
    
    

  }
}
