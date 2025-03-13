import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
  myStyle = {'color': 'red', 'font-size': '20px'}; //style properties
}
