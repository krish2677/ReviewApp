import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-stats',
  standalone: true,
  template: `
    <div class="footer-stats">
      <div class="stat-item">
        <span class="stat-label">Total Votes</span>
        <span class="stat-value">12,492</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Active Teachers</span>
        <span class="stat-value">450+</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">New Ratings Today</span>
        <span class="stat-value highlight">+84</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Avg. Department</span>
        <span class="stat-value">4.2</span>
      </div>
    </div>
  `,
  styles: [`
    .footer-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
      padding: 2rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.5rem;
    }
    .stat-label {
      font-size: 0.85rem;
      color: #8892b0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .stat-value {
      font-size: 1.5rem;
      font-weight: 600;
      color: #cbd5f6;
    }
    .stat-value.highlight {
      color: var(--accent-color, #1cd9f2);
    }
  `]
})
export class FooterStatsComponent {}
