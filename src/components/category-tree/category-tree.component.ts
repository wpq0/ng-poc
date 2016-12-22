import { Component, Input } from '@angular/core';
import { TreeNode } from '../../models';

@Component({
    selector: 'category-tree',
    styles: [require('./category-tree.component.scss')],
    template: require('./category-tree.component.html')
})

export class CategoryTreeComponent {
    @Input() treeNodes: TreeNode[];
    constructor() {

    }
}
