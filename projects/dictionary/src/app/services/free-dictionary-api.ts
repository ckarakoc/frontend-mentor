import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { DictionaryEntry } from '../models/dictionary.model';
import { DictionaryError } from '../models/dictionary.model.error';

@Injectable({
  providedIn: 'root',
  deps: [HttpClient],
})
export class FreeDictionaryAPI {
  private http: HttpClient = inject(HttpClient);
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  getWordData(word: string): Observable<any> {
    return this.http.get<DictionaryEntry[]>(`${ this.apiUrl }/${ word }`, { responseType: 'json', headers: { 'X-HTTP-SPINNER': 'true' } }).pipe(
      catchError(error => {
        const err: DictionaryError = {
          title: error.error?.title || 'Error',
          message: error.error?.message || 'Unknown error occurred',
          resolution: error.error?.resolution || 'Please try again later.',
        };
        return throwError(() => err);
      })
    );
  }
}
