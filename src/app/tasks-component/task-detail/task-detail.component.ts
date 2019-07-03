import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IProject } from 'communication';

import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  project: IProject;
  id: number;
  issueDone = false;

  // @Input() index: number;
  

  constructor(private fakeProjectProvider: FakeProjectsProvider,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'] + 1;
        this.project = this.fakeProjectProvider.getProjectItem(this.id);
      }
    );
  }
  
  onAddItem(form: NgForm) {
    const value = form.value;
    console.log(value);
    this.project.issues.push(value.issue);
    form.reset();
  }

  onDone(index: number) {
    console.log('issue done ' + index);
    this.issueDone = !this.issueDone;
    console.log(this.issueDone);
  }

  onEdit(index: number) {
    console.log('issue edit ' );
  }

  onDelete(index: number) {
    console.log('issue delete ' + index );
    this.project.issues.splice(index, 1);
  }


}
