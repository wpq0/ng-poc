import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';

export let x = state => state.counter;

@Component({
    selector: 'text-input',
    styles: [require('./text-input.component.scss')],
    template: require('./text-input.component.html'),
    providers: []
})

export class TextInputComponent implements OnInit {

    @select(x) funcCounter$: Observable<number>;

    @Input() treeNodes: string[];

    constructor(private ngRedux: NgRedux<IAppState>) {

    }

    ngOnInit() {

    }
}
