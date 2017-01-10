import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FormService } from './services/form.service';
import { FauxFormsService } from './services/in-memory.service';
import { RestService } from './services/rest.service';

import {
    MainComponent,
    TextInputComponent,
    EditorInputComponent,
    CategoryTreeComponent,
    SamplePageComponent,
} from './components';

const appRoutes: Routes = [
    { path: 'category/:id', component: SamplePageComponent },
    { path: '', redirectTo: 'category/1', pathMatch: 'full' }
];

@NgModule({
    bootstrap: [MainComponent],
    declarations: [
        MainComponent,
        TextInputComponent,
        EditorInputComponent,
        CategoryTreeComponent,
        SamplePageComponent,
    ],
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(FauxFormsService),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        FormService,
        RestService
    ]
})

export class AppModule { }