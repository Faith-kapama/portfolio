import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {

  private projectService = inject(ProjectService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef)

  projects?: Project[];

  ngOnInit(): void {
  //   this.projectService.getProjects().subscribe({
  //     next: (projects) => {
  //       // console.log("Projects fetched ",projects)
  //       if (projects){
  //       this.projects = projects
  //       console.log(this.projects);
        
  //     };
  //     },
  //     error: (error) => {
  //       console.error('Error loading projects:', error);
  //     }
  //   });
  // }


    this.projectService.getProjects().subscribe((data => {
      if (data?.length) {
        this.projects = data
        this.cdr.detectChanges()
      }
      
    }))
  }
}