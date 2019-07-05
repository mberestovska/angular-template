import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProject, IssuesProvider, ProjectsProvider } from 'communication';


@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {
  projectsArray: any;
  subscription: Subscription;

  constructor(private projectProvider: ProjectsProvider
    // private issueProvider: IssuesProvider
    ) { }

  ngOnInit() {
    // this.projectsArray = this.projectProvider.getItems().subscribe(
    //   (projects: IProject[]) => {
    //     this.projectsArray = projects;
    //     console.log(this.projectsArray);
    //   }
    // );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
