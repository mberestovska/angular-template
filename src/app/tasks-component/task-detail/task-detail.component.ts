import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
  
  onDone() {
    console.log('issue done ');
  }

  onEdit() {
    console.log('issue edit ' );
  }

  onDelete() {
    console.log('issue delete ' );
  }
}
