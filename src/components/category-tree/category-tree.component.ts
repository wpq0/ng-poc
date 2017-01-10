import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TreeNode } from '../../models';
import { RandomNumberService } from '../../services/random-number.service';

export let x = state => state.counter;

@Component({
    selector: 'category-tree',
    styles: [require('./category-tree.component.scss')],
    template: require('./category-tree.component.html'),
    providers: [RandomNumberService]
})

export class CategoryTreeComponent implements OnInit {


    @Input() treeNodes: TreeNode[];
    constructor() {

    }

    clicked(event) {
    }

    ngOnInit() {

    }
}
