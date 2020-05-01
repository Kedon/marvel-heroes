import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() label: string;
    @Input() btDisabled: boolean;
    @Output() clickButton = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        
    }

    public actionButton = (event) => {
        this.clickButton.emit(event);
      }
}