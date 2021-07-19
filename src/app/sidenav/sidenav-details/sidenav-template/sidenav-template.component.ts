import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidenav-template',
  templateUrl: './sidenav-template.component.html',
  styleUrls: ['./sidenav-template.component.css'],
})
export class SidenavTemplateComponent implements OnInit {
  index!: number;
  
  imagePath = [
    'assets/images/udemy.png',
    'assets/images/amazon.png',
    'assets/images/flipkart.png',
    'assets/images/pluralsight.png',
    'assets/images/puma.png',
    'assets/images/indeed.png',
    'assets/images/redbus.png',
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.index = +this.route.snapshot.params["id"];
    console.log(this.index);
    this.route.params.subscribe((params: Params)=> {
      this.index = +params["id"]
    })
  };
}
