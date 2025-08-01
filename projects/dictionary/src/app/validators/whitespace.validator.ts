import { ValidatorFn } from '@angular/forms';

// todo:I can make this a shared-util library and share it among apps. Perhaps an idea.
export class CustomValidators {
  static noWhitespaceValidator: ValidatorFn = control => {
    if (control.value === '') return null;
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  }
}
