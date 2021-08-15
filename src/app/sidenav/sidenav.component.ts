import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{
  myControl!: FormControl;
  userEmail!: string;

  constructor(private dataStorage: DataStorageService,public dialog: MatDialog){}

  compose = false;

    ngOnInit(){
        this.myControl = new FormControl(null);
        this.dataStorage.user.subscribe(user => {
          console.log(user);
          console.log(user);
          this.userEmail = user.email;
          console.log(this.userEmail);
        })
    }

  openCompose(){
    this.compose=!this.compose;
  }

}
