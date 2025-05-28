import { Component } from '@angular/core';

import { NavigationPath } from '@/shared/constants/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projectxy';
     NavigationPath = NavigationPath;
}
