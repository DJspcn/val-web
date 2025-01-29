import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/onetime.mp3';  // Replace with your actual path
    this.audio.loop = true;  // Ensure the music repeats
  }

  playMusic(): void {
    if (this.audio.paused) {
      this.audio.play();
    }
  }

  pauseMusic(): void {
    if (!this.audio.paused) {
      this.audio.pause();
    }
  }

  setVolume(volume: number): void {
    this.audio.volume = volume;  // Set the volume level (0 to 1)
  }
}
