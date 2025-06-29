import { ChangeDetectorRef, Component, EventEmitter, inject, Injector, Input, Output, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { map, Observable, startWith } from 'rxjs';

import { Country } from '@/shared/enum/country';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})

export class UserFormComponent implements AfterViewInit {
  @Input() disabled = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() formGroup = new FormGroup<any>({});
  @Output() deleteUserCard = new EventEmitter<void>();

  injector = inject(Injector);
  options: string[] = Object.keys(Country);
  filteredOptions$?: Observable<string[]>;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.filteredOptions$ = this.formGroup.controls['userCountry']?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const country = value;
        return country ? this.countriesFilter(country as string) : this.options.slice();
      }),
    );

    // to avoid NG0100: ExpressionChangedAfterItHasBeenCheckedError
    this.cd.detectChanges();
  }

  deleteCard(): void {
    this.deleteUserCard.emit();
  }

  getErrorMessage(keyProp: string): string {
    return `Please provide a correct ${keyProp}`;
  }

  private countriesFilter(country: string): string[] {
    const filterValue = country.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
