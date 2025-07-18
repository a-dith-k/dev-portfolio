import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  categories = ['Java', 'Android', 'Angular'];
  selectedCategory = 'Java';

  works = {
    Java: [
      {
        title: 'Java Project',
        description: 'A backend service built with Spring Boot and REST APIs.',
      },
    ],
    Android: [
      {
        title: 'Android App',
        description: 'A native mobile app built with Kotlin and Jetpack Compose.',
      },
    ],
    Angular: [
      {
        title: 'Angular Dashboard',
        description: 'A responsive admin panel using Angular and Tailwind CSS.',
      },
    ],
  };

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  get selectedWorks() {
  return this.works[this.selectedCategory as keyof typeof this.works];

  }
}
