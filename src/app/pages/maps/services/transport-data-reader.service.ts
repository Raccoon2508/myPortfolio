import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, of, tap } from 'rxjs';

import * as stops from '@/assets/transport-data/stops.txt';
import { TransportDataFilesNames } from '@/pages/maps/constants/transport-data.constants';

@Injectable({
    providedIn: 'root',
})

export class TransportDataReaderService {
    cachedData: Record<string, any> = {};
    constructor(private http: HttpClient) {}

    getAgencyData(): Observable<Record<string, string>[]> {
        return this.getTransportData(TransportDataFilesNames.AGENCY);
    }

    getStopsData<T>(): Observable<T[]> {
        return this.getTransportData<T>(TransportDataFilesNames.STOPS) as Observable<T[]>;
    }

    private getTransportData<T>(key: TransportDataFilesNames): Observable<T[]> {
        let resultObservable$: Observable<T[]>;

        console.log('stops1', stops);

        const path = `assets/transport-data/${key}.txt`;

        if (this.cachedData[path]) {
            resultObservable$ = of(this.cachedData[path]);
        } else {
            resultObservable$ = this.http.get(path, { responseType: 'text' })
            .pipe(
                tap(data => console.log('cachedData', data)),
                map(data => this.parseFileData(data) as T[]),
                tap(data => this.cachedData[path] = data)
            );
        }

        return resultObservable$.pipe(catchError(err => {
                console.error(`Error: ${key} file is not available.`);
                return of(err);
            }));

    }

    private parseFileLegend(textStr: string): string[] {
        let result = '';
        for (let item = 0; item < textStr.length; item++) {
            if (textStr[item] !== '\r') {
                result +=textStr[item];
            } else {
                break;
            }
        }

        const resultKeysArray = result.split(',');
        return resultKeysArray;
    }

    private parseFileData(textStr: string): Record<string, string>[] {
        let isFirstLine = true;
        let result = '';

        const fileKeys = this.parseFileLegend(textStr);

        for (let item = 0; item < textStr.length; item++) {
            if (isFirstLine && textStr[item] !== '\n') {
                continue;
            } else if (isFirstLine && textStr[item] === '\n') {
                isFirstLine = false;
                continue;
            }

            result +=textStr[item];
        }

        const resultArray = result.split('\r\n');

        const resultJSONStructure = resultArray.map(item => {
            const splittedItem = item.split(',');
            if (!splittedItem.length) {
                return {};
            }

            const resultObj = {} as Record<string, string>;

            fileKeys.forEach((key, index) => {
                resultObj[key] = splittedItem[index];
            });

            return resultObj;
        });

        return resultJSONStructure;
    }

}