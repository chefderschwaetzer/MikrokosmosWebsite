import { Component, OnInit } from '@angular/core';
import * as artistsData from '../../../assets/artists.json';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  artists: Artist[] = [];

  constructor(){}

  ngOnInit(): void {
    this.artists = (artistsData as any).artists as Artist[];
  }
}