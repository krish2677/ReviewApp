import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="leaderboard-section">
      <h3 class="section-title">Top Rated Teachers</h3>
      
      <div class="cards-grid">
        <div class="leader-card glass" *ngFor="let teacher of teacherService.topTeachers(); let i = index">
          <div class="rank-badge" [class.gold]="i === 0" [class.silver]="i === 1" [class.bronze]="i === 2">
            #{{ i + 1 }}
          </div>
          <div class="card-content">
            <h4>{{ teacher.name }}</h4>
            <p class="subject">{{ teacher.subject }}</p>
            
            <div class="rating-info">
              <span class="star text-gold">★</span>
              <span class="score">{{ teacher.averageRating | number:'1.1-1' }}</span>
              <span class="reviews">({{ teacher.totalReviews }})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .leaderboard-section {
      margin-top: 3rem;
    }
    .section-title {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .leader-card {
      position: relative;
      padding: 1.5rem 1.5rem 1.5rem 2.5rem;
      border-radius: 16px;
      display: flex;
      align-items: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
    }
    .leader-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px -15px rgba(28, 217, 242, 0.3);
      border-color: rgba(28, 217, 242, 0.3);
    }
    .rank-badge {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      padding: 1rem 0;
      font-size: 0.8rem;
      font-weight: 700;
      color: rgba(255,255,255,0.5);
      letter-spacing: 2px;
      transition: width 0.3s ease, background-color 0.3s ease;
    }
    .leader-card:hover .rank-badge {
      width: 30px;
      background: rgba(255,255,255,0.05);
      color: #fff;
    }
    .rank-badge.gold { background: #ffd700; color: #000; }
    .rank-badge.silver { background: #c0c0c0; color: #000; }
    .rank-badge.bronze { background: #cd7f32; color: #000; }
    
    .leader-card:hover .rank-badge.gold,
    .leader-card:hover .rank-badge.silver,
    .leader-card:hover .rank-badge.bronze {
      color: #000; /* Preserve dark text on colored bg */
    }

    .card-content {
      width: 100%;
      padding-left: 0.5rem;
    }
    h4 {
      margin: 0 0 0.25rem 0;
      color: #fff;
      font-size: 1.15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .subject {
      margin: 0 0 1rem 0;
      color: #8892b0;
      font-size: 0.9rem;
    }
    .rating-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .star {
      font-size: 1.1rem;
    }
    .text-gold {
      color: #ffd700;
    }
    .score {
      color: #fff;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .reviews {
      color: #8892b0;
      font-size: 0.85rem;
    }
  `]
})
export class LeaderboardComponent {
  teacherService = inject(TeacherService);
}
