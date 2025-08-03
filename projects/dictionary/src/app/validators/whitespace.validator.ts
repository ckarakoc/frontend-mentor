import { ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static noWhitespaceValidator: ValidatorFn = control => {
    if (control.value === '') return null;
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  }
}
