import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-card glass">
      <div class="stats-header">
        <h2>{{ teacherService.selectedTeacher().name }}</h2>
        <span class="subject-badge">{{ teacherService.selectedTeacher().subject }}</span>
      </div>
      
      <div class="stats-body">
        <div class="rating-big">
          <span class="score">{{ teacherService.selectedTeacher().averageRating | number:'1.1-1' }}</span>
          <span class="out-of">/ 5.0</span>
        </div>
        
        <div class="reviews-info">
          <div class="stars-display">
            <!-- Simple visual representation of average stars -->
            <span class="star-icon text-gold">★</span>
            <span class="star-icon text-gold">★</span>
            <span class="star-icon text-gold">★</span>
            <span class="star-icon text-gold">★</span>
            <span class="star-icon" [class.text-gold]="teacherService.selectedTeacher().averageRating >= 4.5">★</span>
          </div>
          <span class="total-reviews">Based on {{ teacherService.selectedTeacher().totalReviews }} reviews</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stats-card {
      padding: 2.5rem;
      border-radius: 20px;
      margin-bottom: 2rem;
    }
    .stats-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    h2 {
      margin: 0;
      color: #fff;
      font-size: 1.8rem;
    }
    .subject-badge {
      background: rgba(28, 217, 242, 0.1);
      color: var(--accent-color, #1cd9f2);
      padding: 0.5rem 1rem;
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .stats-body {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
    .rating-big {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;
    }
    .score {
      font-size: 4.5rem;
      font-weight: 700;
      color: #fff;
      line-height: 1;
      text-shadow: 0 0 20px rgba(255,255,255,0.1);
    }
    .out-of {
      color: #8892b0;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .reviews-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .stars-display {
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
    .star-icon {
      color: rgba(255,255,255,0.1);
    }
    .text-gold {
      color: #ffd700;
    }
    .total-reviews {
      color: #8892b0;
      font-size: 0.95rem;
    }
    
    @media (max-width: 600px) {
      .stats-body {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
      }
    }
  `]
})
export class TeacherStatsComponent {
  teacherService = inject(TeacherService);
}
