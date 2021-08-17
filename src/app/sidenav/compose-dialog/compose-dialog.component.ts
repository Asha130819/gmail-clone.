import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SidenavComponent } from '../sidenav.component';

@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.css']
})
export class ComposeDialogComponent implements OnInit {
  form!: FormGroup;
  hideCompose= false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private matSnackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "recipient": new FormControl(null, [Validators.required, Validators.email]),
      "subject": new FormControl(null),
      "textArea": new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.form);
    this.form.reset();
  }

  openSnackBar() {
    if(this.form.valid){
      this.matSnackbar.open('Message Sent', 'View Message', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }

  closeCompose(){
    this.hideCompose = !this.hideCompose;
  }
}
