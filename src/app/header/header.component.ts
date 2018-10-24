import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router) { }

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

  onLogout(){
    this.authService.logout();
    this.router.navigate['/signin'];
  }

  ngOnInit() {
  }

}
