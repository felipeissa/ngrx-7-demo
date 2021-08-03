import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  getRandomNumber(): Observable<number> {
    return of(Math.random() * 100);
  }

  getErrorResponse(): Observable<string> {
    return throwError('Some error on http call')
  }
}
