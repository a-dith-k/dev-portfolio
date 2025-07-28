import { Component } from '@angular/core';
import { CategoryMenuComponent } from "../../layout/category-menu/category-menu.component";
import { CommonModule } from '@angular/common';
import { Skill } from '../../dto/skill.dto';
import { SkillService } from '../../services/skill.service';
import { SkillResponse } from '../../dto/skill-response';

@Component({
  selector: 'app-toolkit',
  standalone: true,
  imports: [CategoryMenuComponent,CommonModule],
  templateUrl: './toolkit.component.html',
  styleUrl: './toolkit.component.scss'
})
export class ToolkitComponent {

 Array = Array;
   categories: string[] = [];
   selectedCategory = '';
   skillsByCategory: Record<string, Skill[]> = {};
   categoryIcons: Record<string, string> = {};
 
   constructor(private skillService: SkillService) {}
 
   ngOnInit(): void {
     this.skillService.fetchSkills().subscribe((data: SkillResponse[]) => {
       data.forEach((data) => {
         const cat = data.category?.trim();
         if (!cat) return;

         ;
         
        console.log(this.Array.isArray(data.skills));
 
         // Normalize libraries to array
       //  if (typeof skill.name === 'string') {
        //      project.libraries = project.libraries
        //        .split(',')
        //        .map((lib: string) => lib.trim())
        //        .filter((lib: string) => lib.length > 0);
        //  }
 
         if (!this.categoryIcons[cat] && data.icon) {
         this.categoryIcons[cat] = data.icon;
       }
 
 
         if (!this.skillsByCategory[cat]) {
           this.skillsByCategory[cat] = [];
         }
 
         this.skillsByCategory[cat]=data.skills;
       });
        console.log(this.categories);

       this.categories = Object.keys(this.skillsByCategory);
       console.log(this.categories);
       console.log(this.categories[0]);
       this.selectedCategory = this.categories[0]||'';
     });
   }
 
   selectCategory(cat: string): void {
     this.selectedCategory = cat;
   }
 
get selectedSkills(): Skill[] {
  const skills= this.skillsByCategory[this.selectedCategory] || [];
  // console.log(Array.isArray(skills));
  return Array.isArray(skills) ? skills : [];
}
}
