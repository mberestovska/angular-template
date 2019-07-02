import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { IProject } from 'communication';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() project: IProject;
  @Input() index: number;

  @Output() projectSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.projectSelected.emit();
    console.log(this.project);
  }
}
