import { Injectable } from '@angular/core';
import { KOMENTARZ_DANE } from './mock';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { 

  }

  getKomentarze() {
    return KOMENTARZ_DANE;
    }
}
