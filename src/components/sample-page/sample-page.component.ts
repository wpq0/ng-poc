import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from '../../store/index';

@Component({
    selector: 'sample-page',
    styles: [require('./sample-page.component.scss')],
    template: require('./sample-page.component.html')
})

export class SamplePageComponent implements OnInit {

    data: { [lang: string]: string };

    constructor() {

    }

    ngOnInit() {
        this.data = {
            "SV": "Halu",
            "EN": "Hello"
        }
    }
}
