import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { INavigationCard } from '@/shared/interface/cards-interfaces';

@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  styleUrl: './navigation-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationCardComponent {
  @Input() card = {} as INavigationCard;
}
