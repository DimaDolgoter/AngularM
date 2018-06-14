import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChacked='true';
  
  
  onChange($event){
  console.log("canged")
  };
  
  
  colors=[
  {id:1, name:"red"},
  {id:2, name:"blue"},
  {id:3, name:"green"},
  {id:4, name:"yello"},
  ];
  
  
  colorP=2;
}
