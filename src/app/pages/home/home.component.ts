import { Component, OnInit } from '@angular/core';
/**
 * rotuer-outlet in home component because system use lazy loader
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
  }

}
