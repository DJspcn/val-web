import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-message',
  imports: [CommonModule],
  templateUrl: './final-message.component.html',
  styleUrl: './final-message.component.css'
})
export class FinalMessageComponent {

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

goBack(): void {
  this.router.navigate(['/gallery']);  // Navigate back to the Intro page
};


}
