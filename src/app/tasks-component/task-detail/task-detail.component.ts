import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProjectsProvider, IssuesProvider, IProject } from 'communication';
import { Subscription } from 'rxjs';
import { FakeProjectsProvider } from 'app/communication/services/fake-projects-provider';




@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})

export class TaskDetailComponent implements OnInit, OnDestroy {
    projectsArray: any;
    @Input() project: any;
    id: number;
    issueDone = false;
    subscription: Subscription;
    projectSelected = this.id + 1;

 
    constructor(private projectProvider: ProjectsProvider,
                // private issueProvider: IssuesProvider,
                private route: ActivatedRoute
                ) { }


    ngOnInit() {
            this.projectProvider.getItems().subscribe(
                (projects: IProject[]) => {
                    this.projectsArray = projects;
                    console.log('projects' + this.projectsArray);
                }
            );

            this.route.params
            .subscribe(
                (params: Params) => {
                    console.log('params ' + params);
                    const id = +params['id'];
                    console.log('id ' + id);
                    // console.log('initial array ' + this.projectsArray);
                    // this line returns an Observable
                    this.project = this.projectsArray[id];
                    console.log('project' + this.project);

                }
            );

           

    }

    //   onAddItem(form: NgForm) {
    //     const value = form.value;
    //     console.log(value);
    //     this.project.issues.push(value.issue);
    //     form.reset();
    //   }

    //   onDone(index: number) {
    //     console.log('issue done ' + index);
    //     this.issueDone = !this.issueDone;
    //     console.log(this.issueDone);
    //   }

    //   onEdit(index: number) {
    //     console.log('issue edit ' );
    //   }

    //   onDelete(index: number) {
    //     console.log('issue delete ' + index );
    //     this.project.issues.splice(index, 1);
    //   }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

