import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from './store/index';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FormService } from './services/form.service';
import { FauxFormsService } from './services/in-memory.service';
import { RestService } from './services/rest.service';

import { CounterActions } from './actions/counter.actions';
import { SearchActions } from './actions/search.actions';

import {
    MainComponent,
    TextInputComponent,
    EditorInputComponent,
    CategoryTreeComponent,
    SamplePageComponent,
} from './components';

const appRoutes: Routes = [
    { path: 'crisis-center', component: SamplePageComponent },
    { path: 'content/category/:id', component: SamplePageComponent },
    { path: 'heroes', component: SamplePageComponent, data: { title: 'Heroes List' } },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: SamplePageComponent }
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
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(FauxFormsService),
        FormsModule,
        ReactiveFormsModule,
        NgReduxModule.forRoot()
    ],
    providers: [
        FormService,
        RestService,
        CounterActions,
        SearchActions,
        DevToolsExtension
    ]
})

export class AppModule { }