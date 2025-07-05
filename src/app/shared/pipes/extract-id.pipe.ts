import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'extractId', standalone: true })
export class ExtractIdPipe implements PipeTransform {
  transform(url: string): string {
    return url?.split('/').filter(Boolean).pop() ?? '';
  }
}