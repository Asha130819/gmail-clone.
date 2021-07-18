import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidenav-details',
  templateUrl: './sidenav-details.component.html',
  styleUrls: ['./sidenav-details.component.css']
})
export class SidenavDetailsComponent implements OnInit {
  index!: number;
  
  data = this.sidenavService.des;
  social = this.sidenavService.social;
  promotions = this.sidenavService.promotions;

  constructor(private sidenavService: SidenavService, private router: Router){}

  ngOnInit(): void {
  }

  getTime(id: number){
    this.index = id;
    const hourTime: number = new Date(this.data.timeArray[id]).getHours();
    const minTime: number = new Date(this.data.timeArray[id]).getMinutes();
    var ampm = hourTime >= 12 ? ' AM' : ' PM';
    return hourTime + ":" + minTime + ampm;
  }

  getSocailTime(id: number){
    const hourTime: number = new Date(this.social.timeArray[id]).getHours();
    const minTime: number = new Date(this.social.timeArray[id]).getMinutes();
    var ampm = hourTime >= 12 ? ' AM' : ' PM';
    return hourTime + ":" + minTime + ampm;
  }

  getPromotionTime(id: number){
    const hourTime: number = new Date(this.promotions.timeArray[id]).getHours();
    const minTime: number = new Date(this.promotions.timeArray[id]).getMinutes();
    var ampm = hourTime >= 12 ? ' AM' : ' PM';
    return hourTime + ":" + minTime + ampm;
  }
  onIndex(){
    
  }
}
