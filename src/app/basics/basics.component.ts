import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  public frndList = ["Venky","Naveen","Kiran","somu","Veeru"];
  public emptyArray:any=[];

  constructor() { }

  ngOnInit(): void {
  }
  myFrnds() {
    this.emptyArray = this.frndList
  }
}
