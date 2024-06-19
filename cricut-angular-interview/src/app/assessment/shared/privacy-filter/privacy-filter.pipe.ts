import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'privacyFilter',
  standalone: true,
})
export class PrivacyFilterPipe implements PipeTransform {
  transform(value: string, permission: string) {
    if (permission !== 'admin') {
      return `<span class="blur-text">${value}</span>`;
    }
    return value;
  }
}
