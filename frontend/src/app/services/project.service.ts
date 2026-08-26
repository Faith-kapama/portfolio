import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  created_at: string;
}

interface ApiProject {
  id: number;
  title: string;
  description: string;
  technologies: string;
  github_url: string;
  live_url: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/api/projects/';

  getProjects(): Observable<Project[]> {
    return this.http.get<ApiProject[]>(this.apiUrl).pipe(
      map(projects =>
        projects.map(project => ({
          id: project.id,
          title: project.title,
          description: project.description,
          technologies: project.technologies
            .split(',')
            .map(technology => technology.trim()),
          github: project.github_url,
          live: project.live_url,
          created_at: project.created_at
        }))
      )
    );
  }
}