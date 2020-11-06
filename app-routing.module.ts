import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { NextcompComponent } from './nextcomp/nextcomp.component';
    
    const approutes: Routes = [
        {
            path: 'nextcomp',
            component: NextcompComponent,
        },
        {
            path: 'routing',
            component: RoutingComponent,
        },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(approutes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }