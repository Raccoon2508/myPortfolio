import { Component } from '@angular/core';

import { StylesLabPath } from '@/shared/constants/app.config';

@Component({
  selector: 'app-styles-laboratory',
  templateUrl: './styles-laboratory.component.html',
  styleUrl: './styles-laboratory.component.scss'
})
export class StylesLaboratoryComponent {
  StylesLabPath = StylesLabPath;
}
