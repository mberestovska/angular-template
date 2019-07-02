import { Component, OnInit } from '@angular/core';

import { IProject } from 'communication';
import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';
import { FakeIssuesProvider } from 'app/communication/services/fake-issues-provider';


@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.scss'],
  providers: [FakeProjectsProvider, FakeIssuesProvider]
})
export class TasksComponent implements OnInit {
  selectedProject: IProject;


  constructor(private fakeProjectProvider: FakeProjectsProvider) { }

  ngOnInit() {
    this.fakeProjectProvider.projectSelected
      .subscribe(
        (project: IProject) => {
          this.selectedProject = project;
        }
      );
  }


}
