import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'text-input',
    styles: [require('./text-input.component.scss')],
    template: require('./text-input.component.html'),
    providers: []
})

export class TextInputComponent {

    @Input() isEditing: boolean = false;
    @Input() name: string;
    
    @Input() language: string;

    @Input() data: { [lang: string]: string };
    @Output() dataChange: EventEmitter<{ [lang: string]: string }>;
    
    selectedValue: string;

    get langs(): Array<string> {
        return Object.keys(this.data);
    }

    constructor() {
        this.dataChange = new EventEmitter<{ [lang: string]: string }>();
    }

    switchMode() {
        this.isEditing = !this.isEditing;
    }   

    ngOnChanges(changes) {
        console.log(changes);
    }

    onInputChange(newValue) {
        this.data[this.language] = newValue;
        this.dataChange.emit(this.data);
    }
} 
