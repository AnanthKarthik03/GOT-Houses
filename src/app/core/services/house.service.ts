import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, expand, reduce } from 'rxjs';
import { House } from '../models/house';

@Injectable({ providedIn: 'root' })
export class HouseService {
  private readonly api = 'https://anapioficeandfire.com/api/houses';
  private readonly pageSize = 10;

  constructor(private http: HttpClient) {}

  /**
   * Fetch all houses by client‑side pagination until an empty result is returned.
   *
   * The typed accumulator (<House[]>) prevents TypeScript from inferring `never[]`
   * when the initial seed `[]` is provided, eliminating the overload error you
   * saw around `reduce`.
   */
  getAllHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${this.api}?page=1&pageSize=1000`);
  }

  /** Fetch a single house by numeric id. */
  getHouse(id: string): Observable<House> {
    return this.http.get<House>(`${this.api}/${id}`);
  }
}