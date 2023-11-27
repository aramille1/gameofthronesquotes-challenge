import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { House, Person, PersonQoute } from '../interfaces/got.interface';

@Injectable({
  providedIn: 'root'
})
export class GotServiceService {
  private apiBaseUrl = 'https://api.gameofthronesquotes.xyz/v1';

  constructor(private http: HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${this.apiBaseUrl}/houses`);
  }

  getHouse(houseSlug: string): Observable<House[]> {
    return this.http.get<House[]>(`${this.apiBaseUrl}/house/${houseSlug}`);
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiBaseUrl}/characters`);
  }

  getPerson(personSlug: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiBaseUrl}/character/${personSlug}`);
  }


  getAllQuotes(): Observable<PersonQoute[]> {
    return this.http.get<PersonQoute[]>(`${this.apiBaseUrl}/random/5`);
  }

  getPersonQuotes(person: string): Observable<PersonQoute[]> {
    return this.http.get<PersonQoute[]>(`${this.apiBaseUrl}/author/${person}/5`);
  }

}
