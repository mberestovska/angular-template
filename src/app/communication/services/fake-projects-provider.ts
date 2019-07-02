import { Injectable, EventEmitter } from '@angular/core';

import { FakeProvider } from './fake.provider';
import { IProject } from '../models/project';
import { FakeIssuesProvider } from './fake-issues-provider';

@Injectable({ providedIn: 'root' })
export class FakeProjectsProvider extends FakeProvider<IProject> {
    projectSelected = new EventEmitter<IProject>();
    // 
    protected _delay = 500;

    constructor(private fakeIssuesProvider: FakeIssuesProvider) {
        super();

        for (let i = 1; i <= 100; i++) {
            this._store[i] = generateProject(i, fakeIssuesProvider);
        }
      
    }

    // here is my code
    generateProjectsList() {
        return this._store;
    }

    getProjectItem(index: number) {
        return this._store[index];
    }

    
}

const NAMES = [
    'Mike',
    'Rose',
    'Harvy',
    'Tim',
    'Tom',
    'Jeck',
    'Scott',
    'Jessica',
    'Amber',
    'Lorem',
    'Thomas',
];

function generateProject(id, fakeProjectsProvider: FakeIssuesProvider): IProject {
    return {
        id,
        name: `Project ${NAMES[(10 * Math.random()).toFixed()]} ${id}`,
        issues: fakeProjectsProvider instanceof FakeIssuesProvider ? fakeProjectsProvider.generateIssues(id) : [],
    };
}
