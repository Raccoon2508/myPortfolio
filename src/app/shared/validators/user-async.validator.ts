import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';

import { map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class NewUserValidator implements AsyncValidator {
    constructor(private http: HttpClient) {}
    validate(control: AbstractControl): Observable<ValidationErrors|null> {
        if (control.value) {
            return  this.http.post<{isAvailable: boolean}>('/api/checkUsername', {username: control.value}).pipe(map(userCheck => {
                return userCheck.isAvailable ? null : {oldUser: control.value};
              }));
        }

        return of(null);
    }
  }