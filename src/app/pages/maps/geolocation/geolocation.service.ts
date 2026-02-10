import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GeolocationsService {
    getPosition(): Observable<GeolocationPosition> {
        return new Observable((observer) => {
            let watchId: number;

            // The geolocation API (if it exists) provides values to publish
            if ('geolocation' in navigator) {
              watchId = navigator.geolocation.watchPosition(
                (position: GeolocationPosition) => observer.next(position),
                (error: GeolocationPositionError) => observer.error(error)
              );
            } else {
              observer.error('Geolocation not available');
            }

            // When the consumer unsubscribes, stop listening to geolocation changes.
            return {
              unsubscribe(): void {
                navigator.geolocation.clearWatch(watchId);
              }
            };
        });
    }
}