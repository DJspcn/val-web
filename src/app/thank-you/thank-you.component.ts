import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
  imports: [CommonModule]
})
export class ThankYouComponent {

  constructor(private router: Router, private musicService: MusicService) {}

  hearts: any[] = []; // Array to hold the hearts


  ngOnInit(): void {
    this.generateHearts();
    this.musicService.playMusic();  // Start music when the app loads
  }

 // Generate random hearts with random vertical and horizontal positions
 generateHearts() {
  const heartCount = 10;  // Number of hearts to create
  for (let i = 0; i < heartCount; i++) {
    this.hearts.push({
      left: Math.random() * 100 + 'vw',  // Random horizontal position (viewport width)
      top: Math.random() * 100 + 'vh',  // Random vertical position (viewport height)
      animationDelay: Math.random() * 3 + 's',  // Random delay for the animation
      animationDuration: Math.random() * 5 + 5 + 's'  // Random duration for each heart to float
    });
  }
}

  // Function to go back to the Intro page
  goBack(): void {
    this.router.navigate(['/']);  // Navigate back to the Intro page
  }

  proceedToGallery(): void {
    this.router.navigate(['/gallery']); 
  }
}
