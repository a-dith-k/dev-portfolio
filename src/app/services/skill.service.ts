import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SkillResponse } from '../dto/skill-response';
import { Skill } from '../dto/skill.dto';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillsBaseUrl: string = "https://sheetdb.io/api/v1/bfjqpojncgo53";

  constructor(private httpClient: HttpClient) { }


  fetchSkills(): Observable<SkillResponse[]> {
    // return this.httpClient.get(this.skillsBaseUrl) as Observable<SkillResponse[]>;
   return this.httpClient.get(this.skillsBaseUrl).pipe(
  map((response: any) => {
    return response.map((group:SkillResponse) => {
      let parsedSkills: Skill[] = [];

      if (typeof group.skills === 'string') {
        try {
          parsedSkills = JSON.parse(group.skills);
        } catch (e) {
          console.warn(`Failed to parse skills for category ${group.category}`, e);
        }
      } else if (Array.isArray(group.skills)) {
        parsedSkills = group.skills;
      }

      return {
        category: group.category,
        skills: parsedSkills
      } as SkillResponse;
    });
  })
);

  }
}
