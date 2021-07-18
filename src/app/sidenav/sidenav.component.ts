import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{
  myControl!: FormControl;

    ngOnInit(){
        this.myControl = new FormControl(null)
    }

  constructor(private router: Router) {}


}
