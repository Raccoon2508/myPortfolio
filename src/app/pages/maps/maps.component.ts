import { Component } from '@angular/core';

import { MapLayers } from '@/pages/maps/constants/transport-data.constants';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {
  MapLayers = MapLayers;
}
