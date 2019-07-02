import { Component, OnInit } from '@angular/core';

import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';
import { FakeIssuesProvider } from 'app/communication/services/fake-issues-provider';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  projectsArray: any;
  // fPrProv: {};


  constructor(private fakeProjectProvider: FakeProjectsProvider,
               private fakeIssuesProvider: FakeIssuesProvider
              ) { }

  ngOnInit() {
    const fPrProv = this.fakeProjectProvider.generateProjectsList();
     const fIsProv = this.fakeIssuesProvider.generateIssues(3);
     console.log('issues: ' + fIsProv);
    this.projectsArray = Object.values(fPrProv); 
    console.log(this.projectsArray);
  }


}
