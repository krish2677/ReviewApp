import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6m0 0l-1.5-1.5M12 20l1.5-1.5" />
        </svg>
        <h1>Teacher Rating</h1>
      </div>
    </header>
  `,
  styles: [`
    .app-header {
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(10, 25, 47, 0.7);
      backdrop-filter: blur(10px);
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .logo svg {
      width: 32px;
      height: 32px;
      color: var(--accent-color, #1cd9f2);
    }
    h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: #fff;
    }
  `]
})
export class HeaderComponent {}
