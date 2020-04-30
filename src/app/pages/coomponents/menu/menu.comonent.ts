import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input() label: string;
    @Output() onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        
    }

    onClickButton(event) {
        this.onClick.emit(event);
      }
}