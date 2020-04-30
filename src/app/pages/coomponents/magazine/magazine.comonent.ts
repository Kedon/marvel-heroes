import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-magazine',
    templateUrl: './magazine.component.html',
    styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {
    @Input() label: string;
    @Output() onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        
    }

    onClickButton(event) {
        this.onClick.emit(event);
      }
}