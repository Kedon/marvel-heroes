import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOnline: boolean = navigator.onLine

  constructor() {
    /**
     * Event listener check internet conection
     */
    window.addEventListener('online', () => {
      this.isOnline = true
    });

    window.addEventListener('offline', () => {
      this.isOnline = false
    });
  }


  ngOnInit() {
  }

}
