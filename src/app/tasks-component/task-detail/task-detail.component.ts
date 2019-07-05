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
    @Input() projectsArray: any;
    project: any;
    id: number;
    issueDone = false;
    subscription: Subscription;

 
    constructor(private projectProvider: ProjectsProvider,
        private issueProvider: IssuesProvider,
        private route: ActivatedRoute,
        private fakeProjectProvider: FakeProjectsProvider) { }


    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    // console.log('params id ' + params.id);
                    const id = +params['id'];
                    console.log('id ' + id);
                    // this line returns an Observable
                    // this.project = this.projectProvider.getItemById('id');
                    // this line returns a project 
                    this.project = this.fakeProjectProvider.getProjectItem(id);
                    console.log(this.project);
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

