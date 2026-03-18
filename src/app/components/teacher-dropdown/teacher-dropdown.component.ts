import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="dropdown-container">
      <label for="teacher-select">Select Educator</label>
      <div class="select-wrapper">
        <select 
          id="teacher-select" 
          [ngModel]="teacherService.selectedTeacher().id"
          (ngModelChange)="onTeacherChange($event)">
          <option *ngFor="let teacher of teacherService.teachers()" [value]="teacher.id">
            {{ teacher.name }} ({{ teacher.subject }})
          </option>
        </select>
        <div class="custom-arrow"></div>
      </div>
    </div>
  `,
  styles: [`
    .dropdown-container {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    label {
      color: #8892b0;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
    .select-wrapper {
      position: relative;
    }
    select {
      width: 100%;
      padding: 1rem 1.25rem;
      background: rgba(10, 25, 47, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: #fff;
      font-size: 1.1rem;
      font-family: inherit;
      appearance: none;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }
    select:focus {
      outline: none;
      border-color: var(--accent-color, #1cd9f2);
      box-shadow: 0 0 0 2px rgba(28, 217, 242, 0.2);
    }
    select option {
      background: #0a192f;
      color: #fff;
      padding: 10px;
    }
    .custom-arrow {
      position: absolute;
      top: 50%;
      right: 1.25rem;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-right: 2px solid var(--accent-color, #1cd9f2);
      border-bottom: 2px solid var(--accent-color, #1cd9f2);
      transform: translateY(-70%) rotate(45deg);
      pointer-events: none;
    }
  `]
})
export class TeacherDropdownComponent {
  teacherService = inject(TeacherService);

  onTeacherChange(id: string) {
    this.teacherService.selectTeacher(id);
  }
}
