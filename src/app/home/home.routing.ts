import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from 'app/tasks-component/tasks-component.component';
import { TaskStartComponent } from 'app/tasks-component/task-start/task-start.component';
import { TaskDetailComponent } from 'app/tasks-component/task-detail/task-detail.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            meta: {
                title: 'home.title',
                description: 'home.text',
                override: true,
            },
        },
        children: [
            { path: '', component: TaskStartComponent},
            { path: ':id', component: TaskDetailComponent }
        ]
    },

];

export const HomeRoutes = RouterModule.forChild(routes);
