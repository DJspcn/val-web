import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  imports: [CommonModule]
})
export class IntroComponent {

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
  goToThankYou(): void {
    this.router.navigate(['/thank-you']);
  };

  // Function to move the "No" button to a random position
  moveButton(event: MouseEvent): void {
    const button = event.target as HTMLButtonElement;

    // Get the maximum width and height of the viewport
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    // Generate random position for X and Y
    const randomX = Math.random() * maxX/2;
    const randomY = Math.random() * maxY/2;

    // Apply the random position with smooth transition
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }

  noClicked(): void {
    alert("You will be my Valentine!!!")
  };
}
