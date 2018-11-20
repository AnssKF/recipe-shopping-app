import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
        }
      )
  }

  onGetData() {
    this.dataStorageService.getRecipes();
  }

  ngOnInit() {
  }

}
