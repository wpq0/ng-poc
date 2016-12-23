import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from '../../store/index';
import { FormService } from '../../services/form.service';
import { RestService } from '../../services/rest.service';
import { TreeNode, FormData, Question } from '../../models';
import thunk from 'redux-thunk';

@Component({
    selector: 'main-component',
    styles: [require('./main.component.scss')],
    template: require('./main.component.html')
})
export class MainComponent {
    forms: FormData[] = null;
    treeNodes: TreeNode[] = null;
    selectedForm: FormData = null;

    constructor(private ngRedux: NgRedux<IAppState>, private devTool: DevToolsExtension, private formService: FormService, private restService: RestService) {

        this.ngRedux.configureStore(
            rootReducer,
            {},
            [thunk],
            [...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]);

        restService.getForms().subscribe((forms: FormData[]) => {
            this.formService.setForms(forms);
            this.forms = this.formService.getAllForms();
        });

        restService.getCategoryTree().subscribe((nodes: TreeNode[]) => {
            this.treeNodes = nodes;
        });
    }

    selectForm(formId: number) {
        this.selectedForm = this.formService.getForm(formId);
    }
}