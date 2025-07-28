export interface ProjectDto {
  title: string;
  description: string;
  Category: string;
  libraries?: string[] | string;
  githubUrl?: string;
  hostedUrl?: string;
  icon?: string;
}
