import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [CommonModule]
})
export class GalleryComponent {

  constructor(private router: Router) {}

  hearts: any[] = []; // Array to hold the hearts


  ngOnInit(): void {
    this.generateHearts();
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

  // Array of image URLs or paths
  images: string[] = [
    'assets/images/photo1.jpg',  // Example path
    'assets/images/photo2.jpg',
    'assets/images/photo3.jpg',
    'assets/images/photo4.jpg',
    'assets/images/photo5.jpg'
  ];

  goBack(): void {
    this.router.navigate(['/thank-you']);  // Navigate back to the Intro page
  };

  goToMessage(): void {
    this.router.navigate(['/final-message']);
  };
  
}
