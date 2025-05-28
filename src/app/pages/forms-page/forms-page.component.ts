import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, map, Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';

import { IUserForm } from '@/shared/models/user-form.model';
import { forbiddenBirthdayValidator } from '@/shared/validators/birthday.validator';
import { forbiddenCountryValidator } from '@/shared/validators/country.validator';
import { NewUserValidator } from '@/shared/validators/user-async.validator';

@UntilDestroy()
@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.scss',
  providers: [NewUserValidator]
})
export class FormsPageComponent implements OnInit {
  userFormControlsArray = new FormArray<FormGroup>([]);
  disabled = false;
  invalidFormsCounter$ = new BehaviorSubject<number>(0);
  cancelTimer$ = new Subject<null>();
  pendingTimer$ = new Subject<number>();

  constructor(private userValidator: NewUserValidator, private http: HttpClient) { }

  ngOnInit(): void {
    this.userFormControlsArray.valueChanges
      .pipe(
        untilDestroyed(this))
      .subscribe(() => {
        let invalidCardsCounter = 0;

        this.userFormControlsArray.controls.forEach(control => {
          if (control.invalid) {
            invalidCardsCounter++;
          }
        });

        this.invalidFormsCounter$.next(invalidCardsCounter);
      });
  }
  get userCardsArray(): IUserForm[] {
    return new Array(this.userFormControlsArray.length);
  }

  addCard(): void {
    const newUserCardGroup = new FormGroup({
      userName: new FormControl('', [], [this.userValidator.validate.bind(this.userValidator)]),
      userCountry: new FormControl('', [forbiddenCountryValidator()]),
      userBirthday: new FormControl(new Date, [forbiddenBirthdayValidator()])
    });

    this.userFormControlsArray.push(newUserCardGroup);
  }

  deleteUserCard(index: number): void {
    this.userFormControlsArray.removeAt(index);
    this.userFormControlsArray.updateValueAndValidity();
  }

  submitForm(): void {
    this.setTimer();
    this.disabled = true;
    this.userFormControlsArray.disable();
    this.userFormControlsArray.markAllAsTouched();
  }

  cancelPendingTimer(): void {
    this.cancelTimer$.next(null);
    this.pendingTimer$.next(0);
    this.userFormControlsArray.enable();
    this.disabled = false;
  }

  private postUserFormsData(): void {
    this.http.post('/api/submitForm', this.userFormControlsArray.value)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  private setTimer(): void {
    const start = 5;
    this.pendingTimer$.next(start * 1000);
    timer(0, 1000).pipe(
      map(i => start - i),
      takeUntil(this.cancelTimer$),
      takeWhile(value => value >= 0),
      tap(i => this.pendingTimer$.next(i * 1000)),
      untilDestroyed(this))
      .subscribe({
        next: (value) => {
          if (value === 0) {
            this.postUserFormsData();
            this.cancelPendingTimer();
          }
        }
      });
  }
}

