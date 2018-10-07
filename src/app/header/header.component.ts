import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * Change page content event handler
   */
  @Output() ChangePageEvent = new EventEmitter<string>();

  onChangePage(page:string){
    this.ChangePageEvent.emit(page);
  }


  constructor() { }

  ngOnInit() {
  }

}
