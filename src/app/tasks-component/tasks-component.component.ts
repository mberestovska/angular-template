import { Component, OnInit } from '@angular/core';


import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';
import { FakeIssuesProvider } from 'app/communication/services/fake-issues-provider';


@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.scss'],
  providers: [FakeProjectsProvider, FakeIssuesProvider]
})
export class TasksComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {

  }


}
