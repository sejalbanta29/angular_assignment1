import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
  // styles: [h1 {text-align:Center;}]
})
export class UserListComponent implements OnInit {

  constructor() { }
  pageTitle ='Sejal Banta';

  ngOnInit(): void {
  }

}
