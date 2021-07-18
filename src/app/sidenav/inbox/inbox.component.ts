import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  data = this.sidenavService.des;

  constructor(private sidenavService: SidenavService){}

  ngOnInit(): void {
  }

  getTime(id: number){
    const hourTime: number = new Date(this.data.timeArray[id]).getHours();
    const minTime: number = new Date(this.data.timeArray[id]).getMinutes();
    var ampm = hourTime >= 12 ? ' AM' : ' PM';
    return hourTime + ":" + minTime + ampm;
  }

}
