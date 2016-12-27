import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'editor-input',
    styles: [require('./editor-input.component.scss')],
    template: require('./editor-input.component.html'),
    providers: []
})

export class EditorInputComponent {

    @Input() isEditing: boolean = false;
    @Input() name: string;
    @Input() currentLang: string = 'SV';
    @Input() data: { [lang: string]: string };
    @Output() dataChange: EventEmitter<{ [lang: string]: string }>;

    get langs(): Array<string> {
        return Object.keys(this.data);
    }

    get currentValue(): string {
        return this.data[this.currentLang];
    }

    constructor() {
        this.dataChange = new EventEmitter<{ [lang: string]: string }>();
    }

    ngOnInit() {
        //window['CKEDITOR']['replace']('editor1');
    }

    switchMode() {
        this.isEditing = !this.isEditing;
    }

    switchLang(newLang) {
        this.currentLang = newLang;
    }

    ngOnChanges(changes) {
        console.log(changes);
    }

    onInputChange(newValue) {
        this.data[this.currentLang] = newValue;
        this.dataChange.emit(this.data);
    }
} 
