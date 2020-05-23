import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-member-main',
  templateUrl: './member-main.component.html',
  styleUrls: ['./member-main.component.css']
})
export class MemberMainComponent implements OnInit {
  ratioGutter = '10px';
  fitListHeight = '30vh';
  fitkidsHeight = '23vh';
  fitOptionsHeight= '15vh';
  tiles: Tile[] = [
    {text: 'Title Gap', cols: 1, rows: 1, color: ''},
    {text: 'Title', cols: 6, rows: 1, color: ''},
    {text: 'Title Gap', cols: 1, rows: 1, color: ''},

    {text: 'Navi-left', cols: 1, rows: 4, color: ''},
    {text: 'man', cols: 3, rows: 4, color: 'lightgreen'},
    {text: 'women', cols: 3, rows: 4, color: 'lightpink'},
    {text: 'Navi-right', cols: 1, rows: 4, color: ''}];

  tileskids: Tile[] = [ 
    {text: 'girl', cols: 2, rows: 4, color: 'lightgreen'},
    {text: 'boy', cols: 2, rows: 4, color: 'lightpink'},
    {text: 'girl', cols: 2, rows: 4, color: 'lightgreen'}];

  tilesconrols: Tile[] = [ 
    {text: 'Navi-left', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Add', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Remove', cols: 1, rows: 4, color: 'lightpink'},
    {text: 'Navi-right', cols: 1, rows: 4, color: 'lightblue'}
  ];
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  log(val) { console.log(val); }

}
