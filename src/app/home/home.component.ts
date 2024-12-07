import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  artists: any[] = [];

  constructor(){}

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists(): void {
    fetch('D:\CodenPrivat\Mikokosmos Reallabor\Mikrokosmos\src\assets\artists.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.artists = data.artists;
        console.log('Artists:', this.artists);
      })
      .catch(error => {
        console.error('Fehler beim Laden der JSON-Datei:', error);
      });
  }
}