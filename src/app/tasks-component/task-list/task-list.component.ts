import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IProject, ProjectsProvider, IssuesProvider, IIssue } from 'communication';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit, OnDestroy {
   // @Input()
  projectsArray: any;
  // project: IProject;
  issues: IIssue[];
  subscription: Subscription;
  objectKeys: any;

  constructor(private projectProvider: ProjectsProvider
              // private issueProvider: IssuesProvider
              ) { }

  ngOnInit() {
    this.projectsArray = this.projectProvider.getItems().subscribe(
      (projects: IProject[]) => {
        this.projectsArray = projects;
        // this.objectKeys = Object.keys(this.projectsArray);
        // console.log(this.objectKeys);
        // console.log(typeof this.objectKeys);
        console.log('array from list comp' + this.projectsArray);
      }
    );
   
  }

  // onAddProject(form: NgForm) {
  //   const value = form.value;
  //   console.log('val ' + value.name + '  ' + value.issue);
  //   this.project.id = this.projectsArray[this.projectsArray.length - 1]['id'] + 1;
  //   this.project.name = value.name;
  //   this.project.issues = value.issue;
  //   console.log('pr' + this.project.id + '  ' + this.project.name + '  ' + this.project.issues);
  //   this.projectsArray.push(this.project);

  //   form.reset();
  // }
  // // onAddItem(form: NgForm) {
  // //   const value = form.value;
  // //   console.log(value);
  // //   this.project.issues.push(value.issue);
  // //   form.reset();
  // // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
