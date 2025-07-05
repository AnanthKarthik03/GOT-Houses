import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacterByUrl(url: string) {
    return this.http.get<Character>(url);
  }

  getCharacter(id: string) {
    return this.http.get<Character>(`https://anapioficeandfire.com/api/characters/${id}`);
  }
}
 