import { AuthService } from './auth.service';
import { Component } from '@angular/core'
import {Router } from '@angular/router'

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent{

    constructor(private authService:AuthService, private router:Router){

    }
    
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)

        this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events'])
    }
}