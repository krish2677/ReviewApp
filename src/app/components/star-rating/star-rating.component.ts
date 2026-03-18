import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rating-container">
      <h3>Rate this Teacher</h3>
      <div class="stars" (mouseleave)="hoverFeedback(0)">
        <button 
          *ngFor="let star of stars" 
          class="star-btn"
          [class.active]="hoverRating >= star || (!hoverRating && currentRating >= star)"
          (mouseenter)="hoverFeedback(star)"
          (click)="rate(star)">
          ★
        </button>
      </div>
      <div class="rating-feedback" *ngIf="currentRating">
        Thanks for rating! You gave {{ currentRating }} stars.
      </div>
    </div>
  `,
  styles: [`
    .rating-container {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      margin-bottom: 2rem;
      backdrop-filter: blur(10px);
    }
    h3 {
      color: #ccd6f6;
      margin-top: 0;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      font-weight: 500;
    }
    .stars {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }
    .star-btn {
      background: none;
      border: none;
      font-size: 3rem;
      color: rgba(255, 255, 255, 0.1);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
      line-height: 1;
    }
    /* Glow on hover and active */
    .star-btn:hover,
    .star-btn.active {
      color: #ffd700;
      text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
      transform: scale(1.1);
    }
    .rating-feedback {
      margin-top: 1.5rem;
      color: var(--accent-color, #1cd9f2);
      font-size: 0.95rem;
      animation: fadeIn 0.3s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class StarRatingComponent {
  teacherService = inject(TeacherService);
  
  stars = [1, 2, 3, 4, 5];
  hoverRating = 0;
  currentRating = 0;

  hoverFeedback(rating: number) {
    this.hoverRating = rating;
  }

  rate(rating: number) {
    this.currentRating = rating;
    const teacherId = this.teacherService.selectedTeacher().id;
    this.teacherService.rateTeacher(teacherId, rating);
    
    // Reset confirmation after a delay
    setTimeout(() => {
      this.currentRating = 0;
    }, 3000);
  }
}
