import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from '../../store/index';

@Component({
    selector: 'sample-page',
    styles: [require('./sample-page.component.scss')],
    template: require('./sample-page.component.html')
})

export class SamplePageComponent implements OnInit {

    names: { [lang: string]: string };
    labels: { [lang: string]: string };
    tags: { [lang: string]: string };

    constructor() {

    }

    ngOnInit() {
        this.names = {
            "SV": "Name SV",
            "EN": "Name EN"
        }

        this.labels = {
            "SV": "Label SV",
            "EN": "Label EN"
        }

        this.tags = {
            "SV": "Tag SV",
            "EN": "Tag EN"
        }        
    }
}
