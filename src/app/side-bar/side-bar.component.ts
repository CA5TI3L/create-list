import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  userLists = new Array();



  constructor() { }

  ngOnInit(): void {
  }

  createNewList(inputFromUser: string) {
    var temp = {
      arrayName: inputFromUser,
      listItems: []
    }
    this.userLists.push(temp)
  }

}
