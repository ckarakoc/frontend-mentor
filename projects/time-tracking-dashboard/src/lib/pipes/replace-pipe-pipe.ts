import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, pattern: string, replaceWith: string, flags?: string): string {
    if (!value || !pattern) return value;
    const regex = new RegExp(pattern, flags || 'g');
    return value.replace(regex, replaceWith);
  }
}
