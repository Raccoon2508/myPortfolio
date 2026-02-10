import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LeafletMapComponent } from '@/pages/maps/components/leaflet-map/leaflet-map.component';
import { MainMenuModule } from '@/pages/maps/components/main-menu/main-menu.module';
import { GeolocationsService } from '@/pages/maps/geolocation/geolocation.service';
import { MapsRoutingModule } from '@/pages/maps/maps-routing.module';
import { MapsComponent } from '@/pages/maps/maps.component';

@NgModule({
  declarations: [LeafletMapComponent, MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,

    MainMenuModule,
  ],
  providers: [GeolocationsService]
})
export class MapsModule { }
