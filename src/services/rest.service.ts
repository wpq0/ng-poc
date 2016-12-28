import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FormData, TreeNode } from '../models';

@Injectable()
export class RestService {
    constructor(private http: Http) { }

    getForms() {
        return this.http.get('api/forms')
            .map((response) => {
                const json = response.json();

                if (response.ok) {
                    return json.data as FormData[];
                } else {
                    return this.logError(json.data);
                }
            });
    }

    getFormById(id: Number) {
        return this.http.get(`api/forms/${id}`)
            .map((response) => {
                const json = response.json();

                if (response.ok) {
                    return json.data as FormData;
                } else {
                    return this.logError(json.data);
                }
            });
    }

    getCategoryTree() {
        return this.http.get('api/tree')
            .map((response) => {
                const json = response.json();

                if (response.ok) {
                    return json.data as TreeNode[];
                } else {
                    return this.logError(json.data);
                }
            })
    }

    private logError(error: any) {
        try {
            error = error.json();
            console.error(error.error);
        } catch (e) {
            console.error(error);
        }

        return Observable.throw(error);
    }
}