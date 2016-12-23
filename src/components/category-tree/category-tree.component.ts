import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';
import { TreeNode } from '../../models';
import { CounterActions } from '../../actions/counter.actions';
import { IAppState } from '../../store';
import { RandomNumberService } from '../../services/random-number.service';


export let x = state => state.counter;

@Component({
    selector: 'category-tree',
    styles: [require('./category-tree.component.scss')],
    template: require('./category-tree.component.html'),
    providers: [ CounterActions, RandomNumberService ]
})

export class CategoryTreeComponent implements OnInit {

    @select(x) funcCounter$: Observable<number>;

    @Input() treeNodes: TreeNode[];
    constructor(public actions: CounterActions, private ngRedux: NgRedux<IAppState>) {

    }

    clicked(event) {
        this.actions.increment();
    }

    ngOnInit() {
        
    }
}
