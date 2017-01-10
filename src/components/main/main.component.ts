import { Component } from '@angular/core';
import { IAppState, rootReducer, enhancers } from '../../store/index';
import { FormService } from '../../services/form.service';
import { RestService } from '../../services/rest.service';
import { TreeNode, FormData, Question } from '../../models';

@Component({
    selector: 'main-component',
    styles: [require('./main.component.scss')],
    template: require('./main.component.html')
})
export class MainComponent {
    treeNodes: TreeNode[] = null;

    constructor(private formService: FormService, private restService: RestService) {
        restService.getCategoryTree().subscribe((nodes: TreeNode[]) => {
            this.treeNodes = nodes;
        });
    }
}