import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    CategoryTreeComponent,
    DynamicFormComponent,
    DynamicQuestionComponent
} from './components';

@NgModule({
    bootstrap: [MainComponent],
    declarations: [
        MainComponent,
        CategoryTreeComponent,
        DynamicFormComponent,
        DynamicQuestionComponent],
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(FauxFormsService),
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