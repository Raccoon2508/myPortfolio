import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID, Input } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as L from 'leaflet';
import { first, Observable, of, switchMap, tap } from 'rxjs';

import { MapLayers } from '@/pages/maps/constants/transport-data.constants';

import { GeolocationsService } from '@/pages/maps/geolocation/geolocation.service';
import { IStop } from '@/pages/maps/interfaces/transport-data.interface';
import { busStopRender } from '@/pages/maps/services/bus-stop-icons';
import { TransportDataReaderService } from '@/pages/maps/services/transport-data-reader.service';

@UntilDestroy()
@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent implements AfterViewInit {
  @Input() mapId = 'map';
  @Input() layerId?: MapLayers;
  private markerClusterGroup?: L.MarkerClusterGroup;
  private map?: L.Map;
  private leafletMap: any;
  private markerLayer: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private geolocation: GeolocationsService,
    private transportDataService: TransportDataReaderService
  ) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.L = L;
      const importLeaflet = import('leaflet');
      const importMarkerGroup = import('leaflet.markercluster');

      Promise.all([importLeaflet, importMarkerGroup]).then(([leafletMap, markerClusterGroup]) => {
        this.leafletMap = leafletMap;
        // @ts-expect-error incorrect import type
        this.markerClusterGroup = new markerClusterGroup.MarkerClusterGroup({
          spiderLegPolylineOptions: {color: 'transparent'},
          removeOutsideVisibleBounds: true,
          disableClusteringAtZoom: 17
        });

        this.initMap();
      });
    }
  }

  setStops(): Observable<IStop[]> {
    return this.transportDataService.getStopsData<IStop>()
            .pipe(
              untilDestroyed(this),
              tap(data => {
              data.forEach(stop => {
                const stopLat = stop['stop_lat'];
                const stopLon = stop['stop_lon'];

                if (!stopLat || !stopLon) {
                  return;
                }

                const icon = this.leafletMap.divIcon({
                  html: busStopRender((stop['stop_name'] || '').replace(/"/gi, ''), 18),
                });

                const coord = L.latLng([Number(stopLat), Number(stopLon)]);
                const iconLayer = L.marker(coord).setIcon(icon);
                this.markerClusterGroup?.addLayer(iconLayer);
                });

              this.markerClusterGroup?.addTo(this.map as L.Map);
            }));
  }

private initMap(): void {
    this.geolocation.getPosition()
      .pipe(
        untilDestroyed(this),
        first(),
        tap((position) => {
          const {latitude, longitude} = position.coords;

          this.map = this.leafletMap.map(this.mapId, {
            center: [latitude, longitude],
            zoom: 19,
          });

          const tiles = this.leafletMap.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 11,
            attribution: '',
          });

          tiles.addTo(this.map);
        }),
        switchMap(() => {
          switch (this.layerId) {
            case MapLayers.WROCLAW_TRANSPORT: {
              return this.setStops();
            }
            default: {
              return of([]);
            }
          }
        }
        )
      ).subscribe();
  }
}
