import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
    @Input() label: string;
    @Output() onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        
    }

    onClickButton(event) {
        this.onClick.emit(event);
      }
}