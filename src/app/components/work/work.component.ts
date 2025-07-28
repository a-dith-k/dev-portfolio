// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-work',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './work.component.html',
//   styleUrl: './work.component.scss',
// })
// export class WorkComponent {
//   categories = ['Java', 'Android', 'Angular'];
//   selectedCategory = 'Java';

//   works = {
//     Java: [
//       {
//         title: 'Java Project',
//         description: 'A backend service built with Spring Boot and REST APIs.',
//         githubUrl: 'https://github.com/example/java-project',
//         hostedUrl: 'https://example.com/java-app',
//         libraries: ['Spring Boot', 'Hibernate', 'MySQL'],
//       },
//       {
//         title: 'REST API Service',
//         description: 'Microservice architecture with secure endpoints.',
//         githubUrl: 'https://github.com/example/rest-service',
//         hostedUrl: '',
//         libraries: ['Spring Security', 'Swagger', 'Docker'],
//       },
//     ],
//     Android: [
//       {
//         title: 'Android App',
//         description: 'A native mobile app built with Kotlin and Jetpack Compose.',
//         githubUrl: 'https://github.com/example/android-app',
//         hostedUrl: 'https://play.google.com/store/apps/details?id=app.id',
//         libraries: ['Kotlin', 'Jetpack Compose', 'Retrofit'],
//       },
//     ],
//     Angular: [
//       {
//         title: 'Angular Dashboard',
//         description: 'A responsive admin panel using Angular and Tailwind CSS.',
//         githubUrl: 'https://github.com/example/angular-dashboard',
//         hostedUrl: '',
//         libraries: ['Angular', 'Tailwind CSS', 'RxJS'],
//       },
//     ],
//   };

//   selectCategory(category: string): void {
//     this.selectedCategory = category;
//   }

//   get selectedWorks() {
//     return this.works[this.selectedCategory as keyof typeof this.works];
//   }
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProjectDto } from '../../dto/project.dto';
import { CategoryMenuComponent } from "../../layout/category-menu/category-menu.component";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, CategoryMenuComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent implements OnInit {
  Array = Array;
  categories: string[] = [];
  selectedCategory = '';
  worksByCategory: Record<string, ProjectDto[]> = {};
  categoryIcons: Record<string, string> = {};

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.fetchProjects().subscribe((data: ProjectDto[]) => {
      data.forEach((project) => {
        const cat = project.Category?.trim();
        if (!cat) return;

        // Normalize libraries to array
        if (typeof project.libraries === 'string') {
            project.libraries = project.libraries
              .split(',')
              .map((lib: string) => lib.trim())
              .filter((lib: string) => lib.length > 0);
        }

        if (!this.categoryIcons[cat] && project.icon) {
        this.categoryIcons[cat] = project.icon;
      }


        if (!this.worksByCategory[cat]) {
          this.worksByCategory[cat] = [];
        }

        this.worksByCategory[cat].push(project);
      });

      this.categories = Object.keys(this.worksByCategory);
      this.selectedCategory = this.categories[0] || '';
    });
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  get selectedWorks(): ProjectDto[] {
    return this.worksByCategory[this.selectedCategory] || [];
  }
}

