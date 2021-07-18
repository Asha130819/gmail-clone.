import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup;
  isLoginMode!: false;

  constructor(private router: Router){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      'login': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.router.navigate(["/home"]);
    }
  }

}
