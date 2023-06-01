import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from './models/car.model';
import { ManufacturerModel } from './models/manufacturer.model';
import { VoteModel } from './models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl = 'https://caroftheyear2023.jedlik.cloud/api'

  constructor(private http: HttpClient) { }

  getManufacturers(): Observable<ManufacturerModel[]> {
    return this.http.get<ManufacturerModel[]>(`${this.apiUrl}/manufacturers`);
  }
  
  getCars(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(`${this.apiUrl}/cars`);
  }

  getCarsByManufacturer(manufacturerId: number | string): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(`${this.apiUrl}/cars/${manufacturerId}`);
  }

  postVote(vote: VoteModel): Observable<{message: string}> {
    return this.http.post<{message: string}>(`${this.apiUrl}/vote`, vote);
  }
}
