import { Skill } from "./skill.dto";

export interface SkillResponse {
  category:string;
  skills:Skill[]
  icon:string;
}
