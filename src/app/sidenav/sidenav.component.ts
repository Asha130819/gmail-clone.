import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ComposeDialogComponent } from './compose-dialog/compose-dialog.component';


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

  constructor(public dialog: MatDialog) {}


  openCompose(){
    this.dialog.open(ComposeDialogComponent);
  }

}
