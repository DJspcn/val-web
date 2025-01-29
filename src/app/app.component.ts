import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicService } from './music.service';  // Import the service

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  audio!: HTMLAudioElement;
  title = 'valentines-website';

  constructor(private musicService: MusicService) {}


  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = 'assets/your-song.mp3'; // Correct path to your audio file
    this.audio.loop = true; // Optional: loops the audio
    this.audio.play()
      .then(() => {
        console.log('Music is playing');
      })
      .catch((error) => {
        console.log('Error playing audio', error);
      });
  }
}
