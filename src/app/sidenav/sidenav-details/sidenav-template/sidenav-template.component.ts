import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-template',
  templateUrl: './sidenav-template.component.html',
  styleUrls: ['./sidenav-template.component.css']
})
export class SidenavTemplateComponent implements OnInit {
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
