// category-menu.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
})
export class CategoryMenuComponent {
  @Input() categories: string[] = [];
  @Input() selectedCategory = '';
  @Input() categoryIcons: Record<string, string> = {};

  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(cat: string) {
    this.categorySelected.emit(cat);
  }
}
