import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs';

import { NavigationPath } from '@/shared/constants/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'projectxy';
NavigationPath = NavigationPath;
constructor(private http: HttpClient) {

  }

     ngOnInit(): void {
this.http.get('/assets/transport-data/stops.txt')
        .pipe(tap(data => console.log('stops_data', data))).subscribe();

     }
}
