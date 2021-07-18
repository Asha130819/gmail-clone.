import { Injectable, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

interface Content {
    timeArray: string[];
    content: string[];
    name: string[];
}

@Injectable({providedIn: "root"})
export class SidenavService{
    

    public des: Content= {
        timeArray: ['95,2,6, 03:24:00', '54, 7, 23, 21:07:00', 'july 09, 2017, 08:45:00'],
        content: ["Javascript new courses available now!", "Shop up to 50% off", "New Deals, New Discounts"],
        name: ['Udemy', 'Amazon', 'Flipkart'],
      }
        

    public promotions: Content = {
        timeArray: ['Feb, 1995 03:24:00', 'January 29, 2021, 21:07:00'],
        content: ["Nothing like homegrown", "Data Science Programme for Managers and Business Leaders"],
        name: ['Nykaa', 'Great Learning']
      }
    
          

    public social: Content = 
            {
                timeArray: ['Feb, 1995 05:14:00', 'July 29, 2011, 11:07:00'],
                content: ["See whta's hapenning on Instagram!", "You have 5 notifications. Click now to see."],
                name: ['Instagram', 'Facebook']
              }
        
      

}