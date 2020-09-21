import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  userLists: string[] = new Array();



  constructor() { }

  ngOnInit(): void {
  }

  createNewList(inputFromUser: string) {
    this.userLists.push({inputFromUser, [{item: ""}]})
  }

}
