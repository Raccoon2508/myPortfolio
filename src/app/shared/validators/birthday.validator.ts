import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenBirthdayValidator(): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      const dateNow = new Date();
      const controlDate = new Date(control.value);
      return controlDate > dateNow ? { invalidBirthday: control.value } : null;
    };
  }