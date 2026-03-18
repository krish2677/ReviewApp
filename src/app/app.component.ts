import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TeacherDropdownComponent } from './components/teacher-dropdown/teacher-dropdown.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TeacherStatsComponent } from './components/teacher-stats/teacher-stats.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { FooterStatsComponent } from './components/footer-stats/footer-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TeacherDropdownComponent,
    StarRatingComponent,
    TeacherStatsComponent,
    LeaderboardComponent,
    FooterStatsComponent
  ],
  template: `
    <div class="app-background">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      
      <app-header></app-header>
      
      <main class="main-container">
        <div class="content-wrapper">
          <!-- Left Column or Top Section -->
          <div class="interactive-section">
            <app-teacher-dropdown></app-teacher-dropdown>
            <app-star-rating></app-star-rating>
          </div>
          
          <!-- Right Column or Bottom Section -->
          <div class="display-section">
            <app-teacher-stats></app-teacher-stats>
          </div>
        </div>
        
        <app-leaderboard></app-leaderboard>
        <app-footer-stats></app-footer-stats>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teacher-rating-app';
}
