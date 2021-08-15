import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  yourForm!: FormGroup;
  isLoginMode= true;
  error= null;
  hide=true;

  obsSub!: Observable<AuthResponseData>;

  constructor(private router: Router, private authService: DataStorageService){}

  ngOnInit(){
    this.yourForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'login': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  switchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(){
    if(!this.yourForm.valid){
      return;
    }

    const email = this.yourForm.value.login;
    const password = this.yourForm.value.password;
    const firstName = this.yourForm.value.firstname;
    const lastName = this.yourForm.value.lastname;

    if(this.isLoginMode){
      this.obsSub = this.authService.login(email, password);
    }else{
      this.obsSub = this.authService.signup(email, firstName, lastName, password);
    }

    this.obsSub.subscribe(resData => {
      console.log(resData);
      this.router.navigate(["/home"]); 
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
    })
    
    console.log(this.yourForm);  

}

  
  public checkError (controlName: string, errorName: string) {
      return this.yourForm.controls[controlName].hasError(errorName)? this.error: '';
    }

  

}
