import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';
import { FakeIssuesProvider } from 'app/communication/services/fake-issues-provider';
import { IProject } from 'communication';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  projectsArray: any;
  project: IProject = {
    id: +'',
    name: '',
    issues: []
  };
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

  onAddProject(form: NgForm) {
    const value = form.value;
    console.log('val ' + value.name + '  ' + value.issue);
    this.project.id = this.projectsArray[this.projectsArray.length - 1]['id'] + 1 ;
    this.project.name = value.name;
    this.project.issues = value.issue;
    console.log('pr' + this.project.id + '  ' + this.project.name + '  ' + this.project.issues);
    this.projectsArray.push(this.project);

    form.reset();
  }
  // onAddItem(form: NgForm) {
  //   const value = form.value;
  //   console.log(value);
  //   this.project.issues.push(value.issue);
  //   form.reset();
  // }
}
