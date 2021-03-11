import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // Enter the value:<input [(ngModel)] ='val'>
  // <br>
  // Entered value is :{{val}}
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  username= ' ';
  handleClear(){
    this.username = ' ';
  }
  // getUsername(value)
  // {
  //   console.log(value)
  // }
  // val: string ='';
}
