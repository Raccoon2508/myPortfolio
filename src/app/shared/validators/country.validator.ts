import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

import { Country } from '@/shared/enum/country';

export function forbiddenCountryValidator(): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      const isCountryFromTheList = Object.keys(Country)
        .map(item => item.toLowerCase())
        .find(item => item === control.value.toLowerCase());
      return control.value ? isCountryFromTheList ? null : { invalidCountry: { value: control.value } } : null;
    };
  }