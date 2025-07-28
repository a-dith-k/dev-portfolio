import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'https://sheetdb.io/api/v1/4ws4swb5oapjq';

  constructor(private http: HttpClient) {}

  fetchProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
