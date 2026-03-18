import { Injectable, signal, computed } from '@angular/core';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private initialTeachers: Teacher[] = [
    { id: '1', name: 'Dr. Sarah Johnson', subject: 'Physics', averageRating: 4.5, totalReviews: 2 },
    { id: '2', name: 'Prof. Mike Chen', subject: 'Computer Science', averageRating: 3.5, totalReviews: 2 },
    { id: '3', name: 'Ms. Emily Roberts', subject: 'Literature & Arts', averageRating: 4.8, totalReviews: 2 }
  ];

  // State
  private teachersState = signal<Teacher[]>(this.initialTeachers);
  private selectedTeacherIdState = signal<string>('1');

  // Computed state
  teachers = this.teachersState.asReadonly();
  
  selectedTeacher = computed(() => 
    this.teachersState().find(t => t.id === this.selectedTeacherIdState()) || this.teachersState()[0]
  );
  
  topTeachers = computed(() => 
    [...this.teachersState()].sort((a, b) => b.averageRating - a.averageRating)
  );

  selectTeacher(id: string) {
    this.selectedTeacherIdState.set(id);
  }

  rateTeacher(id: string, newRating: number) {
    this.teachersState.update(teachers => 
      teachers.map(teacher => {
        if (teacher.id === id) {
          // Calculate new average (simplified)
          const newTotalReviews = teacher.totalReviews + 1;
          const newAverageRating = 
            ((teacher.averageRating * teacher.totalReviews) + newRating) / newTotalReviews;
            
          return {
            ...teacher,
            totalReviews: newTotalReviews,
            averageRating: Number(newAverageRating.toFixed(1))
          };
        }
        return teacher;
      })
    );
  }
}
