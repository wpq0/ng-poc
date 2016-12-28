import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from '../../store/index';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { TreeNode, FormData } from '../../models';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'sample-page',
    styles: [require('./sample-page.component.scss')],
    template: require('./sample-page.component.html')
})

export class SamplePageComponent implements OnInit {
    form: FormData;

    constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                let id = 1;
                if (params['id']) {
                    id = +params['id'];
                }   
                return this.restService.getFormById(id);
            })
            .subscribe(form => this.form = form as FormData);
    }
}
