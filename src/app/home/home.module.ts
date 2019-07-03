import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';


import { TasksComponent } from 'app/tasks-component/tasks-component.component';
import { TaskListComponent } from 'app/tasks-component/task-list/task-list.component';
import { TaskItemComponent } from 'app/tasks-component/task-list/task-item/task-item.component';
import { TaskDetailComponent } from 'app/tasks-component/task-detail/task-detail.component';
import { TaskStartComponent } from 'app/tasks-component/task-start/task-start.component';


@NgModule({
    imports: [CommonModule, HomeRoutes, TranslateModule, FormsModule],
    declarations: [HomeComponent, TasksComponent,  TaskListComponent, TaskItemComponent, TaskDetailComponent, TaskStartComponent],
})
export class HomeModule {
}
