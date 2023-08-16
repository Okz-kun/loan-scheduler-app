import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sched } from 'src/models/loan-sched-model';
import { Inputs } from 'src/models/input-model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = 'https://localhost:44376/api/';

  constructor(private http: HttpClient) {}

  calculateLoan(input: Inputs): Observable<Sched[]> {
    const url = `${this.baseUrl}loan/calculate-loan-schedule`;
    return this.http.post<Sched[]>(url, input);
  }
}